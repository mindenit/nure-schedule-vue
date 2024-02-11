/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/**/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-text)',
        secondary: 'var(--color-secondary)',
        'secondary-container': 'var(--color-secondary-container)',
        'surface-container': 'var(--color-surface-container)',
        'navbar-chip': 'var(--color-navbar-chip)',
        'modal-bg': 'var(--color-modal-bg)',
        'modal-close-element': 'var(--color-modal-close-element)',
        'active-card': 'var(--color-active-card)',
        'app-bg': 'var(--color-app-background)',
        'window-background': 'var(--color-window-background)',
        surface: 'var(--color-surface)',
        'surface-variant': 'var(--color-surface-variant)',
        'desktop-header': 'var(--color-desktop-header)',
        muted: 'var(--color-text)',
        darker: 'var(--color-text-darker)',
        contrast: 'var(--color-text-contrast)',
        calendar: 'var(--vt-c-medium-gray)',
        emoji: 'var(--color-iconColor)',
        icon: 'var(--color-bgError)',
        'error-bg': 'var(--color-bgError)',
        'error-text': 'var(--color-textError)',
        outline: 'var(--color-outline)',
        'primary-container': 'var(--color-primaryContainer)',
        'on-primary-container': 'var(--color-onPrimaryContainer)'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        'loader-spin': {
          '100%': { transform: 'rotate(1turn)' }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            height: '100%'
          },
          '100%': {
            opacity: '0',
            height: '0'
          }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        }
      },
      animation: {
        'loader-spin': 'loader-spin 1s infinite linear',
        'fade-out': 'fade-out',
        fadeIn: 'fadeIn 200ms ease-out',
        fadeOut: 'fadeOut 200ms ease-in'
      }
    }
  },
  plugins: []
}
