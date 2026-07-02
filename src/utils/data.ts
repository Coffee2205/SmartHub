export type FeatureItem = {
  title: string
  description: string
  icon: 'shield' | 'zap' | 'wifi' | 'brain' | 'bell' | 'sparkles'
}

export type SpecItem = {
  label: string
  value: string
}

export type GalleryItem = {
  title: string
  src: string
  alt: string
}

export type TestimonialItem = {
  name: string
  role: string
  quote: string
  avatar: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Specs', href: '#specs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
] as const

export const features: FeatureItem[] = [
  {
    title: 'Adaptive Scene Engine',
    description: 'Automatically shifts light, sound, and climate based on time, weather, and your routine.',
    icon: 'brain',
  },
  {
    title: 'Military-Grade Security',
    description: 'End-to-end encryption with on-device verification for every connected room and device.',
    icon: 'shield',
  },
  {
    title: 'Ultra-Low Latency',
    description: 'Sub-50ms command response for instant automation that feels as natural as flipping a switch.',
    icon: 'zap',
  },
  {
    title: 'Mesh-Ready Networking',
    description: 'Wi-Fi 7 + Thread + Matter support keeps every corner responsive, even in large homes.',
    icon: 'wifi',
  },
  {
    title: 'Predictive Alerts',
    description: 'Gets ahead of unusual patterns and notifies you before minor issues become costly problems.',
    icon: 'bell',
  },
  {
    title: 'No-Tool Setup',
    description: 'Pair sensors and devices with a guided flow in minutes, no installers required.',
    icon: 'sparkles',
  },
]

export const specifications: SpecItem[] = [
  { label: 'Processor', value: 'Octa-Core 3.1GHz Neural SoC' },
  { label: 'Memory', value: '16GB LPDDR5X' },
  { label: 'Storage', value: '512GB NVMe + Secure Enclave' },
  { label: 'Wireless', value: 'Wi-Fi 7, Thread, Matter, Bluetooth 5.4' },
  { label: 'Voice Assist', value: 'Multi-assistant, offline wake word' },
  { label: 'Camera Support', value: 'Up to 12 4K streams with AI indexing' },
  { label: 'Power', value: '65W GaN USB-C PD' },
  { label: 'Materials', value: 'Recycled aluminum + ceramic composite' },
]

export const galleryItems: GalleryItem[] = [
  {
    title: 'Satin Graphite Edition',
    src: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
    alt: 'Smart home hub with ambient desk lighting',
  },
  {
    title: 'Living Room Presence',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Minimal living room managed by a smart home controller',
  },
  {
    title: 'Night Routine Mode',
    src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80',
    alt: 'Bedroom lights dimmed by smart home routine',
  },
  {
    title: 'Security Dashboard',
    src: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1300&q=80',
    alt: 'Smart security status overview on premium interface',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'Linh Tran',
    role: 'Product Manager, HCM City',
    quote: 'Everything feels instant. The moment I enter home, lights and climate adjust perfectly.',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    name: 'Minh Vu',
    role: 'Startup Founder, Da Nang',
    quote: 'The design feels premium and the setup took less than 15 minutes for my full apartment.',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    name: 'An Nguyen',
    role: 'Architect, Hanoi',
    quote: 'This is the first smart hub that looks intentional in a high-end interior.',
    avatar: 'https://i.pravatar.cc/120?img=44',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Does Smart Home Hub work with Apple Home, Google Home, and Alexa?',
    answer: 'Yes. It supports Matter and bridges your devices across all major ecosystems.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'Core automations and local voice commands keep working even if the internet is down.',
  },
  {
    question: 'How secure is camera and sensor data?',
    answer: 'Sensitive events are encrypted on-device. You control retention, sharing, and remote access.',
  },
  {
    question: 'Is there a monthly subscription?',
    answer: 'No mandatory subscription. Optional cloud backup and analytics plans are available.',
  },
]

export const chatbotSeed: Record<string, string> = {
  hello: 'Hi! I can help with features, pricing, setup time, and compatibility.',
  price: 'Smart Home Hub starts at $799, with optional add-ons for cameras and sensors.',
  setup: 'Most homes finish setup within 10-20 minutes using guided pairing.',
  compatibility: 'It supports Matter, Thread, Apple Home, Google Home, and Alexa.',
  security: 'All device traffic is encrypted end-to-end, with on-device identity verification.',
}
