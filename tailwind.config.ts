import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'apple-gray': {
          dark: "hsl(var(--apple-gray-dark))",
          medium: "hsl(var(--apple-gray-medium))",
          light: "hsl(var(--apple-gray-light))",
        },
        'apple-accent': "hsl(var(--apple-accent))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', ...fontFamily.sans],
        'apple-medium': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', ...fontFamily.sans],
      },
      fontSize: {
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        'reading': '72ch',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-up': 'fadeUpIn 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'apple-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'apple-button': '0 2px 6px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
