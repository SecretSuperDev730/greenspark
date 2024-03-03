/** @type {import('tailwindcss').Config} */
const sizes = {}
for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`
}

const opacities = {}
for (let i = 0; i <= 100; i++) {
  opacities[i] = `${i / 100}`
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      opacity: opacities,
      colors: {
        primary: {
          DEFAULT: '#3B755F',
          light: '#AFC6BD'
        },
        light: '#F9F9F9',
        gray: '#B0B0B0',
        beige: '#F2EBDB'
      },
      fontFamily: {
        primary: [
          'Cabin',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      },
      boxShadow: {
        card: '0px 0.7777777910232544px 2.9907407760620117px 0px #00000003, 0px 3.422222137451172px 6.192592620849609px 0px #00000005, 0px 8.399999618530273px 12.350000381469727px 0px #00000006, 0px 16.177778244018555px 24.207406997680664px 0px #00000008, 0px 27.22222137451172px 44.50925827026367px 0px #0000000A, 0px 42px 76px 0px #0000000D',
        switch: '0px 1px 6.8px 0px #00000026 inset',
        'switch-thumb': '0px 0px 1.3672161102294922px 0px #00000059'
      }
    }
  },
  plugins: []
}
