export type RequestStatus = 'new' | 'in-progress' | 'ready' | 'completed'

export type ContactMethod = 'whatsapp' | 'call' | 'email'

export interface CustomerRequest {
  id: string
  fullName: string
  phone: string
  email: string
  iphoneModel: string
  service: string
  description: string
  photos: string[]
  contactMethod: ContactMethod
  homeService: boolean
  status: RequestStatus
  createdAt: string
}

const STORAGE_KEY = 'amu_customer_requests'

function readAll(): CustomerRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as CustomerRequest[]
  } catch {
    return []
  }
}

function writeAll(items: CustomerRequest[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    return true
  } catch {
    return false
  }
}

export function getRequests(): CustomerRequest[] {
  return readAll().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
}

export function getRequestById(id: string): CustomerRequest | undefined {
  return readAll().find((r) => r.id === id)
}

export function createRequest(
  data: Omit<CustomerRequest, 'id' | 'status' | 'createdAt'>,
): CustomerRequest {
  const request: CustomerRequest = {
    ...data,
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    status: 'new',
    createdAt: new Date().toISOString(),
  }

  let all = readAll()
  all.push(request)

  // Prefer saving with photos; if storage is full, drop photos then trim old requests
  if (!writeAll(all)) {
    const withoutPhotos = { ...request, photos: [] as string[] }
    all = readAll()
    all.push(withoutPhotos)

    if (!writeAll(all)) {
      // Keep only newest 10 + this request (no photos)
      const trimmed = [...readAll()]
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .slice(0, 10)
        .map((r) => ({ ...r, photos: [] as string[] }))

      trimmed.unshift(withoutPhotos)
      writeAll(trimmed)
      return withoutPhotos
    }

    return withoutPhotos
  }

  return request
}

export function updateRequestStatus(id: string, status: RequestStatus) {
  const all = readAll()
  const idx = all.findIndex((r) => r.id === id)
  if (idx === -1) return
  all[idx] = { ...all[idx], status }
  writeAll(all)
}

export function deleteRequest(id: string) {
  writeAll(readAll().filter((r) => r.id !== id))
}

/** Compress image for storage / preview (avoids localStorage quota errors) */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('Could not read image'))
    reader.onload = () => {
      const raw = String(reader.result)
      if (!file.type.startsWith('image/')) {
        resolve(raw)
        return
      }

      const img = new Image()
      img.onerror = () => resolve(raw)
      img.onload = () => {
        const maxSide = 1000
        let { width, height } = img
        if (width > maxSide || height > maxSide) {
          const scale = maxSide / Math.max(width, height)
          width = Math.round(width * scale)
          height = Math.round(height * scale)
        }

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          resolve(raw)
          return
        }
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', 0.65))
      }
      img.src = raw
    }
    reader.readAsDataURL(file)
  })
}

export const STATUS_LABELS: Record<RequestStatus, string> = {
  new: 'New',
  'in-progress': 'In Progress',
  ready: 'Ready',
  completed: 'Completed',
}
