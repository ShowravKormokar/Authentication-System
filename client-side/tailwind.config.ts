import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // ensures Tailwind scans your project
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
