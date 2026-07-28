import { useEffect, useState } from 'react'
import './ThemeSwitcher.css'

const STORAGE_KEY = 'jumbopay-theme'

const themes = [
  { id: 'green', label: 'Green', swatch: '#a4e043' },
  { id: 'red', label: 'Red', swatch: '#e8543f' },
  { id: 'blue', label: 'Blue', swatch: '#3fb6e0' },
  { id: 'brown', label: 'Brown', swatch: '#d99a3f' },
  { id: 'purple', label: 'Purple', swatch: '#b154d9' },
]

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || 'green'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      {themes.map((t) => (
        <button
          key={t.id}
          className={`theme-swatch ${t.id === theme ? 'active' : ''}`}
          style={{ '--swatch': t.swatch }}
          aria-label={`${t.label} theme`}
          aria-pressed={t.id === theme}
          onClick={() => setTheme(t.id)}
        />
      ))}
    </div>
  )
}
