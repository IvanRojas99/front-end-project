module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
	darkMode: 'class',
  theme: {
    extend: {
      animation:{
        'skeleton-pulse': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      }
    },
  },
  plugins: [],
}
