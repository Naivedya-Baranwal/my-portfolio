'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import Script from 'next/script'

const ThemeContext = createContext()

// This component will only run on the client side
export function ThemeProvider({ children }) {
  // Start with null theme to avoid hydration mismatch
  const [theme, setTheme] = useState(null)
  const [mounted, setMounted] = useState(false)

  // Only run after component is mounted (client-side only)
  useEffect(() => {
    // Mark component as mounted
    setMounted(true)
    
    // Get theme from localStorage or default to dark
    const storedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(storedTheme)
    
    // Apply theme to document
    document.documentElement.dataset.theme = storedTheme
  }, [])

  // Update HTML data-theme attribute when theme changes
  useEffect(() => {
    if (theme && mounted) {
      document.documentElement.dataset.theme = theme
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    if (mounted) {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <>
      {/* Script that runs before React hydration */}
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme) {
                  document.documentElement.dataset.theme = storedTheme;
                } else {
                  // Default to dark theme
                  document.documentElement.dataset.theme = 'dark';
                  localStorage.setItem('theme', 'dark');
                }
              } catch (e) {
                // If localStorage is not available, default to dark
                document.documentElement.dataset.theme = 'dark';
              }
            })()
          `,
        }}
      />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  // Don't render anything until client-side rendering is complete
  if (!theme) return null

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  )
}