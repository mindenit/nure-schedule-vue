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
        'error-bg': 'var(--color-textError)',
        'error-text': 'var(--color-textError)',
        outline: 'var(--color-outline)',
        'primary-container': 'var(--color-primaryContainer)',
        'on-primary-container': 'var(--color-onPrimaryContainer)'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
