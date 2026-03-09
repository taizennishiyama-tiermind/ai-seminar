export interface NavItem {
  readonly id: string
  readonly label: string
  readonly path: string
  readonly icon: string
}

export interface NavGroup {
  readonly category: string
  readonly items: readonly NavItem[]
}

export const navigation: readonly NavGroup[] = [
  {
    category: 'OVERVIEW',
    items: [
      { id: 'home', label: 'ホーム', path: '/', icon: 'Home' },
    ],
  },
  {
    category: 'SERVICES',
    items: [
      { id: 'strategy', label: 'AI戦略設計', path: '/services/strategy', icon: 'Target' },
      { id: 'development', label: 'AI駆動開発', path: '/services/development', icon: 'Zap' },
      { id: 'training', label: '研修・育成', path: '/services/training', icon: 'GraduationCap' },
      { id: 'poc', label: 'PoC→本番', path: '/services/poc', icon: 'Rocket' },
      { id: 'talent', label: 'AI人材支援', path: '/services/talent', icon: 'Users' },
      { id: 'advisory', label: '顧問・顧問', path: '/services/advisory', icon: 'Shield' },
      { id: 'operations', label: '運用・内製化', path: '/services/operations', icon: 'RefreshCw' },
    ],
  },
  {
    category: 'SUPPORT',
    items: [
      { id: 'faq', label: 'よくある質問', path: '/faq', icon: 'HelpCircle' },
      { id: 'contact', label: 'お問い合わせ', path: '/contact', icon: 'Mail' },
    ],
  },
]
