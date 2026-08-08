export const BUSINESS = {
  name: 'ABU MUNIFA APPLE CARE +',
  tagline: 'Your One-Stop iPhone Plug',
  phone: '+2349043130174',
  phoneDisplay: '+234 904 313 0174',
  whatsapp: '2349043130174',
  email: 'hello@abumunifa.com',
  address: 'Lagos, Nigeria',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=ABU+MUNIFA+Apple+Care+Lagos+Nigeria',
  tiktokHandle: '@musayyib_ahmad01',
  tiktokUrl: 'https://www.tiktok.com/@musayyib_ahmad01',
} as const

export interface TikTokVideo {
  id: string
  url: string
  title: string
}

/** Add more TikTok video links here anytime */
export const TIKTOK_VIDEOS: TikTokVideo[] = [
  {
    id: '7661355724324244754',
    url: 'https://www.tiktok.com/@musayyib_ahmad01/video/7661355724324244754',
    title: 'Real repair work',
  },
  {
    id: '7656956144312683784',
    url: 'https://www.tiktok.com/@musayyib_ahmad01/video/7656956144312683784',
    title: 'Repair showcase',
  },
  {
    id: '7655673726410837266',
    url: 'https://www.tiktok.com/@musayyib_ahmad01/video/7655673726410837266',
    title: 'Phone care work',
  },
]

export type ServiceId =
  | 'repair'
  | 'screen'
  | 'back-glass'
  | 'customization'
  | 'case'
  | 'accessories'
  | 'home-service'
  | 'support'

export interface ServiceOption {
  id: ServiceId
  title: string
  short: string
  description: string
  path: string
  icon: string
  image?: string
}

export const SERVICES: ServiceOption[] = [
  {
    id: 'repair',
    title: 'iPhone Repair',
    short: 'I Need an iPhone Repair',
    description: 'Fix screen, battery, charging port, camera, speaker, Face ID and more.',
    path: '/repairs',
    icon: 'wrench',
    image: '/parts/iphone-repair.jpg',
  },
  {
    id: 'screen',
    title: 'Original Screens',
    short: 'I Want an Original Screen',
    description: 'Quality screen replacement with professional installation.',
    path: '/screens',
    icon: 'smartphone',
    image: '/parts/iphone-screen.png',
  },
  {
    id: 'back-glass',
    title: 'Back Glass',
    short: 'I Need Back Glass Replacement',
    description: 'Professional back glass replacement for a like-new finish.',
    path: '/back-glass',
    icon: 'layers',
    image: '/parts/iphone-back-glass.png',
  },
  {
    id: 'customization',
    title: 'Phone Customization',
    short: 'I Want Phone Customization',
    description:
      'Change housing/case look — e.g. XR to 14 Pro Max style, or any model finish you want.',
    path: '/request?service=customization',
    icon: 'sparkles',
    image: '/parts/iphone-back-glass.png',
  },
  {
    id: 'case',
    title: 'iPhone Cases',
    short: 'I Want to Buy an iPhone Case',
    description: 'Protective and stylish cases for everyday use.',
    path: '/shop?tab=cases',
    icon: 'shield',
    image: '/products/clear-case.jpg',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    short: 'I Want to Order Accessories',
    description: 'Chargers, cables, screen protectors, power banks and more.',
    path: '/shop?tab=accessories',
    icon: 'shopping-bag',
    image: '/products/charger.jpg',
  },
  {
    id: 'home-service',
    title: 'Home Service',
    short: 'I Need Home Service',
    description: 'We come to you for repairs and part fitting.',
    path: '/request?service=home-service',
    icon: 'home',
    image: '/services/home.jpg',
  },
  {
    id: 'support',
    title: 'Customer Support',
    short: 'I Need Customer Support',
    description: 'Questions about an order, repair status, or anything else.',
    path: '/request?service=support',
    icon: 'message',
  },
]

export const REPAIR_TYPES = [
  'Screen Replacement',
  'Battery Replacement',
  'Camera Replacement',
  'Charging Port',
  'Speaker / Mic',
  'Face ID / Sensors',
  'Back Glass',
  'Housing / Case Change',
  'Phone Customization',
  'Software Issue',
  'Water Damage',
  'Other Parts',
]

/** Detailed services shown on the landing & repairs pages */
export const CORE_REPAIRS = [
  {
    id: 'battery',
    title: 'Battery Change',
    text: 'Weak battery, sudden shutdowns, or slow charging? We replace it with a quality battery so your iPhone lasts all day again.',
    image: '/parts/iphone-battery.png',
    query: 'Battery Replacement',
  },
  {
    id: 'screen',
    title: 'Screen Change',
    text: 'Cracked, dead, or flickering display? We fit the screen type that matches your budget and quality needs.',
    image: '/parts/iphone-screen.png',
    query: 'Screen Replacement',
  },
  {
    id: 'camera',
    title: 'Camera Change',
    text: 'Blurry shots, black camera, or cracked lens glass — front and rear camera repairs available.',
    image: '/parts/iphone-camera.png',
    query: 'Camera Replacement',
  },
  {
    id: 'parts',
    title: 'Every Part Repaired',
    text: 'Charging port, speaker, mic, Face ID, buttons, flex cables, board issues and more — if it’s on your iPhone, we can work on it.',
    image: '/parts/iphone-repair.jpg',
    query: 'Other Parts',
  },
]

export const SCREEN_TYPES = [
  {
    name: 'Original Screen',
    text: 'Best colour, brightness and touch — closest to factory quality.',
  },
  {
    name: 'OLED Screen',
    text: 'Deep blacks, bright colours and smooth display performance.',
  },
  {
    name: 'Soft OLED',
    text: 'Strong OLED look at a more flexible price point.',
  },
  {
    name: 'Incell / Other Grades',
    text: 'Budget-friendly options — we’ll explain the difference before you choose.',
  },
]

export const CUSTOMIZATION_POINTS = [
  {
    title: 'Model look change',
    text: 'Want your XR, 11, 12 or any iPhone to look like a 14 Pro Max (or another model)? We customize housing and finish.',
  },
  {
    title: 'Housing / case change',
    text: 'Swap the frame and back for a fresh colour, Pro look, or a clean like-new body.',
  },
  {
    title: 'Full restyle',
    text: 'Combine screen, back glass, camera glass and housing for a complete transformation.',
  },
]

export const IPHONE_MODELS = [
  'iPhone 17 Pro Max',
  'iPhone 17 Pro',
  'iPhone 17 Plus',
  'iPhone 17',
  'iPhone 16 Pro Max',
  'iPhone 16 Pro',
  'iPhone 16 Plus',
  'iPhone 16',
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15 Plus',
  'iPhone 15',
  'iPhone 14 Pro Max',
  'iPhone 14 Pro',
  'iPhone 14 Plus',
  'iPhone 14',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
  'iPhone 13',
  'iPhone 13 mini',
  'iPhone 12 Pro Max',
  'iPhone 12 Pro',
  'iPhone 12',
  'iPhone 12 mini',
  'iPhone 11 Pro Max',
  'iPhone 11 Pro',
  'iPhone 11',
  'iPhone XR',
]

/** iPhone XR → 17 Pro Max — used on the parts catalog page */
export const IPHONE_CATALOG_MODELS = [...IPHONE_MODELS]

export type PartCategory =
  | 'screens'
  | 'cameras'
  | 'battery'
  | 'back-glass'
  | 'cases'
  | 'charging'
  | 'audio'
  | 'sensors'
  | 'housing'
  | 'other'

export interface IPhonePart {
  id: string
  name: string
  category: PartCategory
  description: string
  grades?: string[]
  colors?: string[]
  priceNote: string
  image: string
  service: ServiceId
  /** Only these models (empty = all catalog models) */
  forModels?: string[]
  /** Pro / Pro Max only */
  proOnly?: boolean
  /** mini models only */
  miniOnly?: boolean
  /** Plus models only */
  plusOnly?: boolean
  tag?: string
}

export const PART_CATEGORIES: { id: PartCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All parts' },
  { id: 'screens', label: 'Screens' },
  { id: 'cameras', label: 'Cameras' },
  { id: 'battery', label: 'Battery' },
  { id: 'back-glass', label: 'Back glass' },
  { id: 'cases', label: 'Cases' },
  { id: 'charging', label: 'Charging' },
  { id: 'audio', label: 'Speaker / Mic' },
  { id: 'sensors', label: 'Face ID & sensors' },
  { id: 'housing', label: 'Housing & custom' },
  { id: 'other', label: 'Other parts' },
]

export const CASE_STYLES = [
  'Clear Case',
  'Silicone Case',
  'MagSafe Case',
  'Leather Case',
  'Rugged Case',
] as const

export type CaseStyle = (typeof CASE_STYLES)[number]

const BAT_11 = ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone XR']
const BAT_12 = ['iPhone 12 mini', 'iPhone 12', 'iPhone 12 Pro', 'iPhone 12 Pro Max']
const BAT_13 = ['iPhone 13 mini', 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max']
const BAT_14 = ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max']
const BAT_15 = ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max']
const BAT_16 = ['iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max']
const BAT_17 = ['iPhone 17', 'iPhone 17 Plus', 'iPhone 17 Pro', 'iPhone 17 Pro Max']

export const IPHONE_PARTS: IPhonePart[] = [
  {
    id: 'scr-original',
    name: 'Original Screen',
    category: 'screens',
    description: 'Factory-quality display — best colour, brightness and touch response.',
    grades: ['Original'],
    priceNote: 'Price varies by model',
    image: '/parts/iphone-screen-oled.png',
    service: 'screen',
    tag: 'Premium',
  },
  {
    id: 'scr-oled',
    name: 'OLED Screen',
    category: 'screens',
    description: 'Deep blacks and vivid colours — ideal for Pro and OLED iPhones.',
    grades: ['OLED'],
    priceNote: 'Price varies by model',
    image: '/parts/iphone-screen-oled.png',
    service: 'screen',
    tag: 'Popular',
  },
  {
    id: 'scr-soft-oled',
    name: 'Soft OLED Screen',
    category: 'screens',
    description: 'Strong OLED look at a more flexible price point.',
    grades: ['Soft OLED'],
    priceNote: 'Price varies by model',
    image: '/parts/iphone-screen-oled.png',
    service: 'screen',
  },
  {
    id: 'scr-incell',
    name: 'Incell Screen',
    category: 'screens',
    description: 'Budget-friendly LCD option — we explain the difference before you choose.',
    grades: ['Incell'],
    priceNote: 'Price varies by model',
    image: '/parts/iphone-screen-incell.png',
    service: 'screen',
  },
  {
    id: 'cam-front',
    name: 'Front Camera (Selfie)',
    category: 'cameras',
    description: 'Fix blurry selfies, black front camera, or cracked lens glass.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-camera.png',
    service: 'repair',
  },
  {
    id: 'cam-rear-main',
    name: 'Rear Main Camera',
    category: 'cameras',
    description: 'Replace the primary rear camera module for sharp photos again.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-camera.png',
    service: 'repair',
  },
  {
    id: 'cam-ultra-wide',
    name: 'Ultra Wide Camera',
    category: 'cameras',
    description: 'For iPhones with ultra-wide lens — restore wide-angle shots.',
    priceNote: 'Pro & dual-camera models',
    image: '/parts/iphone-camera-pro.png',
    service: 'repair',
    proOnly: true,
  },
  {
    id: 'cam-telephoto',
    name: 'Telephoto Camera',
    category: 'cameras',
    description: 'Zoom camera replacement for Pro and Pro Max models.',
    priceNote: 'Pro / Pro Max only',
    image: '/parts/iphone-camera-pro.png',
    service: 'repair',
    proOnly: true,
  },
  {
    id: 'cam-glass',
    name: 'Camera Glass Lens',
    category: 'cameras',
    description: 'Cracked camera glass? We replace the lens cover cleanly.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-camera.png',
    service: 'repair',
  },
  {
    id: 'bat-original',
    name: 'Original Quality Battery',
    category: 'battery',
    description:
      'Factory-spec quality battery — restores all-day power. Available for every model XR to 17 Pro Max.',
    grades: ['Original quality'],
    priceNote: 'Price varies by model',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    tag: 'Best quality',
  },
  {
    id: 'bat-high-cap',
    name: 'High Capacity Battery',
    category: 'battery',
    description:
      'Longer-lasting high-capacity cell — great for heavy users. Fitted professionally in-shop or at home.',
    grades: ['High capacity'],
    priceNote: 'Price varies by model',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    tag: 'Popular',
  },
  {
    id: 'bat-xr-11',
    name: 'Battery — XR & iPhone 11 Series',
    category: 'battery',
    description: 'Fresh battery for iPhone XR, 11, 11 Pro and 11 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_11,
  },
  {
    id: 'bat-12',
    name: 'Battery — iPhone 12 Series',
    category: 'battery',
    description: 'Battery replacement for iPhone 12 mini, 12, 12 Pro and 12 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_12,
  },
  {
    id: 'bat-13',
    name: 'Battery — iPhone 13 Series',
    category: 'battery',
    description: 'Battery replacement for iPhone 13 mini, 13, 13 Pro and 13 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_13,
  },
  {
    id: 'bat-14',
    name: 'Battery — iPhone 14 Series',
    category: 'battery',
    description: 'Battery replacement for iPhone 14, 14 Plus, 14 Pro and 14 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_14,
  },
  {
    id: 'bat-15',
    name: 'Battery — iPhone 15 Series',
    category: 'battery',
    description: 'Battery replacement for iPhone 15, 15 Plus, 15 Pro and 15 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_15,
  },
  {
    id: 'bat-16',
    name: 'Battery — iPhone 16 Series',
    category: 'battery',
    description: 'Battery replacement for iPhone 16, 16 Plus, 16 Pro and 16 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_16,
  },
  {
    id: 'bat-17',
    name: 'Battery — iPhone 17 Series',
    category: 'battery',
    description: 'Battery replacement for iPhone 17, 17 Plus, 17 Pro and 17 Pro Max.',
    priceNote: 'Ask for quote',
    image: '/parts/iphone-battery.png',
    service: 'repair',
    forModels: BAT_17,
  },
  {
    id: 'chg-port',
    name: 'Charging Port / Flex',
    category: 'charging',
    description: 'Phone not charging, loose cable, or port damage — we fix the port.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-charging.png',
    service: 'repair',
  },
  {
    id: 'chg-wireless',
    name: 'Wireless Charging Coil',
    category: 'charging',
    description: 'Wireless charging stopped working? Coil replacement available.',
    priceNote: 'Supported models only',
    image: '/parts/iphone-charging.png',
    service: 'repair',
  },
  {
    id: 'aud-earpiece',
    name: 'Earpiece Speaker',
    category: 'audio',
    description: 'Can’t hear calls? Earpiece speaker repair and replacement.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-earpiece.png',
    service: 'repair',
  },
  {
    id: 'aud-loud',
    name: 'Loud Speaker',
    category: 'audio',
    description: 'Fix muffled or dead bottom speaker for media and speakerphone.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-loudspeaker.png',
    service: 'repair',
  },
  {
    id: 'aud-mic',
    name: 'Microphone',
    category: 'audio',
    description: 'People can’t hear you on calls? Mic replacement available.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-earpiece.png',
    service: 'repair',
  },
  {
    id: 'sen-faceid',
    name: 'Face ID / TrueDepth',
    category: 'sensors',
    description: 'Face ID not working? Sensor and TrueDepth module repair when possible.',
    priceNote: 'Diagnosis required',
    image: '/parts/iphone-faceid-parts.png',
    service: 'repair',
  },
  {
    id: 'sen-proximity',
    name: 'Proximity Sensor',
    category: 'sensors',
    description: 'Screen stays on during calls? Proximity sensor fix.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-faceid-module.png',
    service: 'repair',
  },
  {
    id: 'hou-frame',
    name: 'Housing / Frame Change',
    category: 'housing',
    description: 'Swap bent or damaged frame for a fresh body and clean look.',
    priceNote: 'Price varies by model',
    image: '/parts/iphone-back-glass.png',
    service: 'customization',
  },
  {
    id: 'hou-custom',
    name: 'Phone Customization',
    category: 'housing',
    description: 'Change look to another model style — e.g. XR to 14 Pro Max appearance.',
    priceNote: 'Custom quote',
    image: '/parts/iphone-back-glass.png',
    service: 'customization',
    tag: 'Custom',
  },
  {
    id: 'oth-buttons',
    name: 'Power & Volume Buttons',
    category: 'other',
    description: 'Sticky or unresponsive buttons — flex and button repair.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-repair.jpg',
    service: 'repair',
  },
  {
    id: 'oth-taptic',
    name: 'Taptic Engine (Vibration)',
    category: 'other',
    description: 'No vibration feedback? Haptic engine replacement.',
    priceNote: 'Ask for your model',
    image: '/parts/iphone-repair.jpg',
    service: 'repair',
  },
  {
    id: 'oth-software',
    name: 'Software & Diagnostics',
    category: 'other',
    description: 'Stuck on logo, update issues, or general software troubleshooting.',
    priceNote: 'Diagnosis first',
    image: '/parts/iphone-repair.jpg',
    service: 'repair',
  },
  {
    id: 'oth-water',
    name: 'Water Damage Repair',
    category: 'other',
    description: 'Liquid damage assessment and component-level repair when possible.',
    priceNote: 'Inspection required',
    image: '/parts/iphone-repair.jpg',
    service: 'repair',
  },
]

export interface Product {
  id: string
  name: string
  category: 'case' | 'accessory'
  price: string
  blurb: string
  image: string
  tag?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'Clear Armor Case',
    category: 'case',
    price: '₦8,500',
    blurb: 'See your iPhone’s design with strong drop protection.',
    image: '/products/clear-case.jpg',
    tag: 'Best seller',
  },
  {
    id: 'c2',
    name: 'MagSafe Silicone Case',
    category: 'case',
    price: '₦12,000',
    blurb: 'Soft silicone feel with MagSafe charging support.',
    image: '/products/silicone-case.jpg',
  },
  {
    id: 'c3',
    name: 'Leather Folio Case',
    category: 'case',
    price: '₦18,500',
    blurb: 'Premium leather look with card slots.',
    image: '/products/leather-case.jpg',
    tag: 'Premium',
  },
  {
    id: 'c4',
    name: 'Rugged Shield Case',
    category: 'case',
    price: '₦14,000',
    blurb: 'Extra tough protection for daily hustle.',
    image: '/products/rugged-case.jpg',
  },
  {
    id: 'a1',
    name: '20W USB-C Fast Charger',
    category: 'accessory',
    price: '₦9,500',
    blurb: 'Fast, reliable wall charger for modern iPhones.',
    image: '/products/charger.jpg',
    tag: 'Essential',
  },
  {
    id: 'a2',
    name: 'Braided USB-C Cable (2m)',
    category: 'accessory',
    price: '₦5,500',
    blurb: 'Strong braided cable that lasts longer.',
    image: '/products/cable.jpg',
  },
  {
    id: 'a3',
    name: 'Tempered Glass Protector',
    category: 'accessory',
    price: '₦4,000',
    blurb: 'Hard glass screen cover, edge-to-edge fit.',
    image: '/products/screen-protector.jpg',
  },
  {
    id: 'a4',
    name: '10,000mAh Power Bank',
    category: 'accessory',
    price: '₦22,000',
    blurb: 'Slim power bank with fast charging support.',
    image: '/products/powerbank.jpg',
    tag: 'Popular',
  },
  {
    id: 'a5',
    name: 'MagSafe Wireless Charger',
    category: 'accessory',
    price: '₦16,500',
    blurb: 'Snap-on wireless charging for desk or travel.',
    image: '/products/wireless-charger.jpg',
  },
  {
    id: 'a6',
    name: 'AirPods Case Cover',
    category: 'accessory',
    price: '₦3,500',
    blurb: 'Protective cover for AirPods with keyring.',
    image: '/products/airpods.jpg',
  },
]

/** Simplified main navigation */
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Parts', path: '/parts' },
  { label: 'Repair', path: '/repairs' },
  { label: 'Shop', path: '/shop' },
  { label: 'Our Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
