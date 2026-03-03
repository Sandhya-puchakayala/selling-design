module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  screens: {
    sm: '640px',   
    md: '768px',    
    lg: '1024px',   
    xl: '1280px',
    '2xl': '1536px'
  },
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
        },
        
        // Secondary Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          muted: "var(--secondary-muted)",
        },
        
        // Accent Colors
        accent: {
          background: "var(--accent-background)",
          light: "var(--accent-light)",
          lighter: "var(--accent-lighter)",
          cream: "var(--accent-cream)",
          warm: "var(--accent-warm)",
          'cream-light': "var(--accent-cream-light)",
        },
        
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          dark: "var(--text-dark)",
          overlay: "var(--text-overlay)",
          green: "var(--text-green)",
          'gray-light': "var(--text-gray-light)",
          variants: "var(--text-variants)",
        },
        
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          muted: "var(--border-muted)",
          accent: "var(--border-accent)",
          dark: "var(--border-dark)",
        },
        
        // Component Colors
        header: {
          background: "var(--header-background)"
        },
        
        button: {
          primary: "var(--button-primary)",
          secondary: "var(--button-secondary)"
        },
        
        input: {
          background: "var(--input-background)"
        },
        
        search: {
          background: "var(--search-background)"
        },
        
        line: {
          background: "var(--line-background)"
        }
      },
      
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
        '9xl': 'var(--font-size-9xl)',
        '10xl': 'var(--font-size-10xl)',
        '11xl': 'var(--font-size-11xl)',
        '12xl': 'var(--font-size-12xl)'
      },
      
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)'
      },
      
      spacing: {
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
        '12': 'var(--spacing-12)',
        '13': 'var(--spacing-13)',
        '16': 'var(--spacing-16)',
        '17': 'var(--spacing-17)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
        '28': 'var(--spacing-28)',
        '32': 'var(--spacing-32)'
      },
      
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)'
      },
      
      letterSpacing: {
        'wide': 'var(--letter-spacing-wide)'
      },
      
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};