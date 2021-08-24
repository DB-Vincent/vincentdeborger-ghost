module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              fontWeight: '800'
            },
            h3: {
              fontWeight: '800'
            },
          },
        },
      })
    },
  },
  variants: {
    marginBottom: ({ after }) => after(["last-of-type"])
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        }
      })
    },function ({ addVariant, e }) {
      addVariant("last-of-type", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-of-type${separator}${className}`)}:last-of-type`;
        });
      });
    },
    require('@tailwindcss/typography'),
  ]
}
