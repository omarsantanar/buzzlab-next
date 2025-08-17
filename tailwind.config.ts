
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { yellow: '#FFD600', blue: '#1E88E5', dark: '#0F172A' }
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { card: '0 2px 10px rgba(0,0,0,0.08)' }
    }
  },
  plugins: []
}
export default config
