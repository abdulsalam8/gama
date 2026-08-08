import type { PartCategory } from './content'
import type { CaseStyle } from './content'
import { PART_IMAGES } from './iphone-colors'

/** Plain-language “what do you need?” options — one tap each */
export type SimpleNeed =
  | 'screen'
  | 'battery'
  | 'back-glass'
  | 'case'
  | 'camera'
  | 'charging'
  | 'audio'
  | 'face-id'
  | 'other'

export interface SimpleNeedOption {
  id: SimpleNeed
  /** Big label — no jargon */
  label: string
  /** One short line max */
  hint: string
  image: string
  category: PartCategory
  service: 'screen' | 'repair' | 'back-glass' | 'case'
}

export const SIMPLE_NEEDS: SimpleNeedOption[] = [
  {
    id: 'screen',
    label: 'Broken screen',
    hint: 'Cracked or black display',
    image: PART_IMAGES.screen,
    category: 'screens',
    service: 'screen',
  },
  {
    id: 'battery',
    label: 'Bad battery',
    hint: 'Drains fast or shuts off',
    image: PART_IMAGES.battery,
    category: 'battery',
    service: 'repair',
  },
  {
    id: 'back-glass',
    label: 'Back cracked',
    hint: 'Glass on the back',
    image: PART_IMAGES.backGlass,
    category: 'back-glass',
    service: 'back-glass',
  },
  {
    id: 'case',
    label: 'Phone case',
    hint: 'Protect your iPhone',
    image: PART_IMAGES.caseClear,
    category: 'cases',
    service: 'case',
  },
  {
    id: 'camera',
    label: 'Camera problem',
    hint: 'Blurry or not working',
    image: PART_IMAGES.camera,
    category: 'cameras',
    service: 'repair',
  },
  {
    id: 'charging',
    label: "Won't charge",
    hint: 'Cable or wireless',
    image: PART_IMAGES.charging,
    category: 'charging',
    service: 'repair',
  },
  {
    id: 'audio',
    label: "Can't hear / speak",
    hint: 'Speaker or mic',
    image: PART_IMAGES.speaker,
    category: 'audio',
    service: 'repair',
  },
  {
    id: 'face-id',
    label: 'Face ID broken',
    hint: 'Unlock not working',
    image: PART_IMAGES.faceId,
    category: 'sensors',
    service: 'repair',
  },
  {
    id: 'other',
    label: 'Something else',
    hint: 'We still help you',
    image: PART_IMAGES.repair,
    category: 'other',
    service: 'repair',
  },
]

/** iPhone models grouped newest first — short labels for buttons */
export const MODEL_GROUPS = [
  {
    series: '17',
    models: [
      { full: 'iPhone 17 Pro Max', short: '17 Pro Max' },
      { full: 'iPhone 17 Pro', short: '17 Pro' },
      { full: 'iPhone 17 Plus', short: '17 Plus' },
      { full: 'iPhone 17', short: '17' },
    ],
  },
  {
    series: '16',
    models: [
      { full: 'iPhone 16 Pro Max', short: '16 Pro Max' },
      { full: 'iPhone 16 Pro', short: '16 Pro' },
      { full: 'iPhone 16 Plus', short: '16 Plus' },
      { full: 'iPhone 16', short: '16' },
    ],
  },
  {
    series: '15',
    models: [
      { full: 'iPhone 15 Pro Max', short: '15 Pro Max' },
      { full: 'iPhone 15 Pro', short: '15 Pro' },
      { full: 'iPhone 15 Plus', short: '15 Plus' },
      { full: 'iPhone 15', short: '15' },
    ],
  },
  {
    series: '14',
    models: [
      { full: 'iPhone 14 Pro Max', short: '14 Pro Max' },
      { full: 'iPhone 14 Pro', short: '14 Pro' },
      { full: 'iPhone 14 Plus', short: '14 Plus' },
      { full: 'iPhone 14', short: '14' },
    ],
  },
  {
    series: '13',
    models: [
      { full: 'iPhone 13 Pro Max', short: '13 Pro Max' },
      { full: 'iPhone 13 Pro', short: '13 Pro' },
      { full: 'iPhone 13', short: '13' },
      { full: 'iPhone 13 mini', short: '13 mini' },
    ],
  },
  {
    series: '12',
    models: [
      { full: 'iPhone 12 Pro Max', short: '12 Pro Max' },
      { full: 'iPhone 12 Pro', short: '12 Pro' },
      { full: 'iPhone 12', short: '12' },
      { full: 'iPhone 12 mini', short: '12 mini' },
    ],
  },
  {
    series: '11 & XR',
    models: [
      { full: 'iPhone 11 Pro Max', short: '11 Pro Max' },
      { full: 'iPhone 11 Pro', short: '11 Pro' },
      { full: 'iPhone 11', short: '11' },
      { full: 'iPhone XR', short: 'XR' },
    ],
  },
] as const

export const SCREEN_CHOICES = [
  { id: 'scr-original', label: 'Best', hint: 'Original quality', image: PART_IMAGES.screenOled },
  { id: 'scr-oled', label: 'OLED', hint: 'Sharp & bright', image: PART_IMAGES.screenOled },
  { id: 'scr-incell', label: 'Budget', hint: 'Lower price', image: PART_IMAGES.screenIncell },
] as const

export const CAMERA_CHOICES = [
  { id: 'cam-front', label: 'Selfie camera', proOnly: false, image: PART_IMAGES.camera },
  { id: 'cam-rear-main', label: 'Back camera', proOnly: false, image: PART_IMAGES.camera },
  { id: 'cam-glass', label: 'Camera glass cracked', proOnly: false, image: PART_IMAGES.camera },
  { id: 'cam-ultra-wide', label: 'Wide camera', proOnly: true, image: PART_IMAGES.cameraPro },
  { id: 'cam-telephoto', label: 'Zoom camera', proOnly: true, image: PART_IMAGES.cameraPro },
] as const

export const CHARGING_CHOICES = [
  { id: 'chg-port', label: 'Cable port', image: PART_IMAGES.charging },
  { id: 'chg-wireless', label: 'Wireless charging', image: PART_IMAGES.charging },
] as const

export const AUDIO_CHOICES = [
  { id: 'aud-earpiece', label: "Can't hear calls", image: PART_IMAGES.earpiece },
  { id: 'aud-loud', label: "Can't hear music", image: PART_IMAGES.loudspeaker },
  { id: 'aud-mic', label: "They can't hear me", image: PART_IMAGES.earpiece },
] as const

export const OTHER_CHOICES = [
  { id: 'oth-buttons', label: 'Buttons stuck' },
  { id: 'oth-water', label: 'Water damage' },
  { id: 'hou-custom', label: 'Change phone look' },
  { id: 'oth-software', label: 'Software problem' },
] as const

export const CASE_STYLE_OPTIONS: {
  style: CaseStyle
  label: string
  image: string
}[] = [
  { style: 'Clear Case', label: 'Clear', image: PART_IMAGES.caseClear },
  { style: 'Silicone Case', label: 'Silicone', image: PART_IMAGES.caseSilicone },
  { style: 'MagSafe Case', label: 'MagSafe', image: PART_IMAGES.caseSilicone },
  { style: 'Leather Case', label: 'Leather', image: PART_IMAGES.caseLeather },
  { style: 'Rugged Case', label: 'Rugged', image: PART_IMAGES.caseClear },
]

export function shortModelName(full: string): string {
  return full.replace(/^iPhone /, '')
}

export function needHasColorStep(need: SimpleNeed): boolean {
  return need === 'back-glass' || need === 'case'
}

export function needHasOptionStep(need: SimpleNeed): boolean {
  return (
    need === 'screen' ||
    need === 'camera' ||
    need === 'charging' ||
    need === 'audio' ||
    need === 'other'
  )
}

export function needSkipsOptions(need: SimpleNeed): boolean {
  return need === 'battery' || need === 'face-id'
}
