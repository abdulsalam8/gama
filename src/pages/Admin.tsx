import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Eye,
  Lock,
  Trash2,
  Image as ImageIcon,
} from 'lucide-react'
import {
  deleteRequest,
  getRequests,
  STATUS_LABELS,
  updateRequestStatus,
  type CustomerRequest,
  type RequestStatus,
} from '../lib/requests'
import { ADMIN_PIN } from '../config/site'

const ADMIN_KEY = 'amu_admin_session'

const STATUSES: RequestStatus[] = ['new', 'in-progress', 'ready', 'completed']

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [requests, setRequests] = useState<CustomerRequest[]>([])
  const [filter, setFilter] = useState<RequestStatus | 'all'>('all')
  const [active, setActive] = useState<CustomerRequest | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem(ADMIN_KEY) === '1') setAuthed(true)
  }, [])

  useEffect(() => {
    if (authed) setRequests(getRequests())
  }, [authed])

  const filtered = useMemo(() => {
    if (filter === 'all') return requests
    return requests.filter((r) => r.status === filter)
  }, [requests, filter])

  const counts = useMemo(() => {
    return {
      all: requests.length,
      new: requests.filter((r) => r.status === 'new').length,
      'in-progress': requests.filter((r) => r.status === 'in-progress').length,
      ready: requests.filter((r) => r.status === 'ready').length,
      completed: requests.filter((r) => r.status === 'completed').length,
    }
  }, [requests])

  function login(e: React.FormEvent) {
    e.preventDefault()
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem(ADMIN_KEY, '1')
      setAuthed(true)
      setError('')
    } else {
      setError('Incorrect PIN. Try again.')
    }
  }

  function logout() {
    sessionStorage.removeItem(ADMIN_KEY)
    setAuthed(false)
  }

  function refresh() {
    setRequests(getRequests())
  }

  function setStatus(id: string, status: RequestStatus) {
    updateRequestStatus(id, status)
    refresh()
    setActive((prev) => (prev?.id === id ? { ...prev, status } : prev))
  }

  function remove(id: string) {
    if (!confirm('Delete this request?')) return
    deleteRequest(id)
    setActive(null)
    refresh()
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-950 px-5">
        <form
          onSubmit={login}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink-900 p-8"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="text-center font-display text-2xl font-bold text-silver-50">
            Staff Dashboard
          </h1>
          <p className="mt-2 text-center text-sm text-silver-400">
            Enter the admin PIN to view orders saved on this device only.
          </p>
          <p className="mt-1 text-center text-xs text-silver-500">
            WhatsApp is the main inbox — this dashboard is a local helper.
          </p>
          <input
            type="password"
            className="input-field mt-6"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            autoFocus
          />
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          <button type="submit" className="btn-primary mt-4 w-full">
            Sign In
          </button>
          <Link to="/" className="btn-ghost mt-3 w-full">
            Back to site
          </Link>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ink-950 text-silver-50">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-ink-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-silver-400 hover:text-gold">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <p className="font-display text-lg font-bold">Admin Dashboard</p>
              <p className="text-xs text-silver-400">Customer requests</p>
            </div>
          </div>
          <button type="button" onClick={logout} className="btn-secondary !py-2 text-xs">
            Log out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-6 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
          Orders are saved in this browser only. WhatsApp messages are your
          real order inbox. Open <code className="text-gold">/admin</code> on
          the shop phone to track local copies.
        </div>
        <div className="flex flex-wrap gap-2">
          {(['all', ...STATUSES] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                filter === s
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-white/10 text-silver-300 hover:border-white/25'
              }`}
            >
              {s === 'all' ? 'All' : STATUS_LABELS[s]} ({counts[s]})
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-white/10 bg-ink-900 text-xs uppercase tracking-wide text-silver-400">
              <tr>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Model</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-silver-400">
                    No requests yet. Submissions from the website will appear here.
                  </td>
                </tr>
              )}
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-white/5 transition hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-silver-50">{r.fullName}</p>
                    <p className="text-xs text-silver-400">{r.phone}</p>
                  </td>
                  <td className="px-4 py-3">
                    {r.service}
                    {r.homeService && (
                      <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] text-accent-soft">
                        Home
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-silver-300">{r.iphoneModel}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="px-4 py-3 text-silver-400">
                    {new Date(r.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => setActive(r)}
                      className="inline-flex items-center gap-1 text-gold hover:underline"
                    >
                      <Eye className="h-4 w-4" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-2xl animate-fade-up">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-xl font-bold">{active.fullName}</h2>
                <p className="text-sm text-silver-400">
                  {new Date(active.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-sm text-silver-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <dl className="mt-6 space-y-3 text-sm">
              <Row label="Phone" value={active.phone} />
              <Row label="Email" value={active.email || '—'} />
              <Row label="iPhone" value={active.iphoneModel} />
              <Row label="Service" value={active.service} />
              <Row
                label="Home service"
                value={active.homeService ? 'Yes' : 'No'}
              />
              <Row
                label="Contact via"
                value={active.contactMethod}
              />
              <div>
                <dt className="text-silver-400">Description</dt>
                <dd className="mt-1 whitespace-pre-wrap text-silver-100">
                  {active.description}
                </dd>
              </div>
            </dl>

            {active.photos.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 flex items-center gap-2 text-sm text-silver-400">
                  <ImageIcon className="h-4 w-4" /> Photos
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.photos.map((src, i) => (
                    <a key={i} href={src} target="_blank" rel="noreferrer">
                      <img
                        src={src}
                        alt=""
                        className="h-20 w-20 rounded-lg object-cover border border-white/10"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <p className="mb-2 text-sm text-silver-400">Update status</p>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatus(active.id, s)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      active.status === s
                        ? 'border-gold bg-gold/15 text-gold'
                        : 'border-white/10 text-silver-300'
                    }`}
                  >
                    {STATUS_LABELS[s]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${active.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 text-xs"
              >
                WhatsApp customer
              </a>
              <a href={`tel:${active.phone}`} className="btn-secondary !py-2 text-xs">
                Call
              </a>
              <button
                type="button"
                onClick={() => remove(active.id)}
                className="inline-flex items-center gap-1 rounded-full border border-red-500/30 px-4 py-2 text-xs text-red-300 hover:bg-red-500/10"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
      <dt className="text-silver-400">{label}</dt>
      <dd className="text-right text-silver-100 capitalize">{value}</dd>
    </div>
  )
}

function StatusBadge({ status }: { status: RequestStatus }) {
  const colors: Record<RequestStatus, string> = {
    new: 'bg-accent/20 text-accent-soft',
    'in-progress': 'bg-amber-500/20 text-amber-300',
    ready: 'bg-gold/20 text-gold',
    completed: 'bg-emerald-500/20 text-emerald-300',
  }
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  )
}
