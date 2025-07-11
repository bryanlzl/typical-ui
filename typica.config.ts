export const tokens = {
    color: {
        /*//* primary palette */
        pri: 'oklch(0.4955 0.1305 293.71)',
        /*//* secondary palette */
        sec: 'oklch(0.4859 0.0358 299.61)',
        /*//* tertiary palette */
        ter: 'oklch(0.4904 0.0605 358.45)',
        /*//* neutral palette */
        neu: 'oklch(0.4835 0.0116 305.22)',
        /*//* neutral variant palette*/
        'neu-var': 'oklch(0.4843 0.0147 301.01)',
        /*//* traffic light palette */
        err: 'oklch(0.5013 0.1783 28.7)',

        wrn: 'oklch(0.5559  0.1783 70)', //& NOT PART OF MD3
        suc: 'oklch(0.5559  0.1783 140)', //& NOT PART OF MD3
    },

    typography: {
        'font-family': {
            urbanist: [
                {
                    'font-family': 'urbanist',
                    src: "url('/fonts/urbanist-regular-var.woff2') format('woff2')",
                    'font-weight': '100 900',
                    'font-style': 'normal',
                    'font-display': 'swap',
                },
                {
                    'font-family': 'urbanist',
                    src: "url('/fonts/urbanist-italic-var.woff2') format('woff2')",
                    'font-weight': '100 90',
                    'font-style': 'italic',
                    'font-display': 'swap',
                },
            ],
            inter: [
                {
                    'font-family': 'inter',
                    src: "url('/fonts/inter-regular-var.woff2') format('woff2')",
                    'font-weight': '100 900',
                    'font-style': 'normal',
                    'font-display': 'swap',
                },
                {
                    'font-family': 'inter',
                    src: "url('/fonts/inter-italic-var.woff2') format('woff2')",
                    'font-weight': '100 900',
                    'font-style': 'italic',
                    'font-display': 'swap',
                },
            ],
            'source-code-pro': [
                {
                    'font-family': 'source-code-pro',
                    src: "url('/fonts/source-code-pro-regular-var.woff2') format('woff2')",
                    'font-weight': '100 900',
                    'font-style': 'normal',
                    'font-display': 'swap',
                },
                {
                    'font-family': 'source-code-pro',
                    src: "url('/fonts/source-code-pro-italic-var.woff2') format('woff2')",
                    'font-weight': '100 900',
                    'font-style': 'italic',
                    'font-display': 'swap',
                },
            ],
        },
        'font-role': {
            display: ['urbanist', 'roboto', 'system-ui'],
            headline: ['urbanist', 'roboto', 'system-ui'],
            title: ['urbanist', 'roboto', 'system-ui'],
            body: ['inter', 'roboto', 'system-ui'],
            label: ['inter', 'roboto', 'system-ui'],
        },
    },
};
