/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090a0f',
        surface: {
          DEFAULT: '#12151e',
          hover: '#1a1f2c',
        },
        border: {
          DEFAULT: '#222736',
          active: '#3b4358',
        },
        cyan: {
          status: '#38bdf8',
        },
        blue: {
          action: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
