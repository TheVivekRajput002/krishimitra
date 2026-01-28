'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MessageCircle, Calculator, TrendingUp, User, Leaf, Settings } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
}

interface Language {
  code: string
  label: string
}

const Navbar = () => {
  const pathname = usePathname()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('IN हिं')

  const navItems: NavItem[] = [
    { name: 'होम', href: '/', icon: <Home className="w-6 h-6" /> },
    { name: 'चैट', href: '/chat', icon: <MessageCircle className="w-6 h-6" /> },
    { name: 'स्कैन', href: '/scan', icon: <Calculator className="w-6 h-6" /> },
    { name: 'बाज़ार', href: '/market', icon: <TrendingUp className="w-6 h-6" /> },
    { name: 'प्रोफ़ाइल', href: '/profile', icon: <User className="w-6 h-6" /> },
    { name: 'फसल खोजें', href: '/crop-search', icon: <Leaf className="w-6 h-6" /> },
    { name: 'सेटिंग्स', href: '/settings', icon: <Settings className="w-6 h-6" /> },
  ]

  const languages: Language[] = [
    { code: 'IN हिं', label: 'Hindi' },
    { code: 'US EN', label: 'English' },
    { code: 'IN मर', label: 'Marathi' },
    { code: 'IN த', label: 'Tamil' },
    { code: 'IN ಕ', label: 'Kannada' },
  ]

  return (
    <nav className="w-full md:w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-yellow-400">₹</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">स्मार्टफार्म</h1>
            <p className="text-sm text-gray-600">कृषि सलाहकार</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                    ? 'bg-green-50 text-green-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <span className={isActive ? 'text-green-700' : 'text-gray-500'}>
                    {item.icon}
                  </span>
                  <span className="text-lg">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Language Selector */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3 px-2">भाषा</p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedLanguage === lang.code
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              aria-label={`Switch to ${lang.label}`}
            >
              {lang.code}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar