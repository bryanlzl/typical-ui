export const tokens = {
    colors: {
        /*//* primary palette */
        primary: 'oklch(0.4955 0.1305 293.71)',
        /*//* secondary palette */
        secondary: 'oklch(0.4859 0.0358 299.61)',
        /*//* tertiary palette */
        tertiary: 'oklch(0.4904 0.0605 358.45)',
        /*//* neutral palette */
        neutral: 'oklch(0.4835 0.0116 305.22)',
        /*//* neutral variant palette*/
        'neutral-variant': 'oklch(0.4843 0.0147 301.01)',
        /*//* traffic light palette */
        error: 'oklch(0.5013 0.1783 28.7)',
        warn: 'oklch(0.5559  0.1783 70)',
        success: 'oklch(0.5559  0.1783 140)',
    },
    'font-face': {
        urbanist: [
            {
                'font-family': 'urbanist',
                src: "url('/fonts/urbanist-regular-var.woff2') format('woff2')",
                'font-weight': '100 900',
                'font-style': 'normal',
            },
            {
                'font-family': 'urbanist',
                src: "url('/fonts/urbanist-italic-var.woff2') format('woff2')",
                'font-weight': '100 90',
                'font-style': 'italic',
            },
        ],
        inter: [
            {
                'font-family': 'inter',
                src: "url('/fonts/inter-regular-var.woff2') format('woff2')",
                'font-weight': '100 900',
                'font-style': 'rmal',
            },
            {
                'font-family': 'inter',
                src: "url('/fonts/inter-italic-var.woff2') format('woff2')",
                'font-weight': '100 900',
                'font-style': 'italic',
            },
        ],
        'source-code-pro': [
            {
                'font-family': 'source-code-pro',
                src: "url('/fonts/source-code-pro-regular-var.woff2') format('woff2')",
                'font-weight': '100 900',
                'font-style': 'normal',
            },
            {
                'font-family': 'source-code-pro',
                src: "url('/fonts/source-code-pro-italic-var.woff2') format('woff2')",
                'font-weight': '100 900',
                'font-style': 'italic',
            },
        ],
    },
};
