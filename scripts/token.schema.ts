export const SPECTRUM_TONAL_PALETTE: number[] = [
    0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100,
];

export const SCHEMA_LIGHT_THEME_COLOR: Record<string, string> = {
    //* primary
    primary: 'pri-40',
    'on-primary': 'pri-100',
    'primary-container': 'pri-90',
    'on-primary-container': 'pri-30',

    'primary-fixed': 'pri-90',
    'primary-fixed-dim': 'pri-80',

    'on-primary-fixed': 'pri-10',
    'on-primary-fixed-variant': 'pri-30',

    'inverse-primary': 'pri-80',

    //* secondary
    secondary: 'sec-40',
    'on-secondary': 'sec-100',
    'secondary-container': 'sec-90',
    'on-secondary-container': 'sec-30',

    'secondary-fixed': 'sec-90',
    'secondary-fixed-dim': 'sec-80',

    'on-secondary-fixed': 'sec-10',
    'on-secondary-fixed-variant': 'sec-30',

    //* tertiary
    tertiary: 'ter-40',
    'on-tertiary': 'ter-100',
    'tertiary-container': 'ter-90',
    'on-tertiary-container': 'ter-30',

    'tertiary-fixed': 'ter-90',
    'tertiary-fixed-dim': 'ter-80',

    'on-tertiary-fixed': 'ter-10',
    'on-tertiary-fixed-variant': 'ter-30',

    //* error
    error: 'err-40',
    'on-error': 'err-100',
    'error-container': 'err-90',
    'on-error-container': 'err-30',

    //* surface
    'surface-dim': 'neu-87',
    surface: 'neu-98',
    'surface-bright': 'neu-98',

    'surface-container-lowest': 'neu-100',
    'surface-container-low': 'neu-96',
    'surface-container': 'neu-94',
    'surface-container-high': 'neu-92',
    'surface-container-highest': 'neu-90',

    'on-surface': 'neu-10',
    'on-surface-variant': 'neu-var-30',

    'inverse-surface': 'neu-20',
    'inverse-on-surface': 'neu-95',

    //* outline
    outline: 'neu-var-50',
    'outline-variant': 'neu-var-80',

    //* misc
    scrim: 'neu-0',
    shadow: 'neu-0',
};

export const SCHEMA_DARK_THEME_COLOR: Record<string, string> = {
    //* primary
    primary: 'pri-80',
    'on-primary': 'pri-20',
    'primary-container': 'pri-30',
    'on-primary-container': 'pri-90',

    'primary-fixed': 'pri-90',
    'primary-fixed-dim': 'pri-80',

    'on-primary-fixed': 'pri-10',
    'on-primary-fixed-variant': 'pri-30',

    'inverse-primary': 'pri-40',

    //* secondary
    secondary: 'sec-80',
    'on-secondary': 'sec-20',
    'secondary-container': 'sec-30',
    'on-secondary-container': 'sec-90',

    'secondary-fixed': 'sec-90',
    'secondary-fixed-dim': 'sec-80',

    'on-secondary-fixed': 'sec-10',
    'on-secondary-fixed-variant': 'sec-30',

    //* tertiary
    tertiary: 'ter-80',
    'on-tertiary': 'ter-20',
    'tertiary-container': 'ter-30',
    'on-tertiary-container': 'ter-90',

    'tertiary-fixed': 'ter-90',
    'tertiary-fixed-dim': 'ter-80',

    'on-tertiary-fixed': 'ter-10',
    'on-tertiary-fixed-variant': 'ter-30',

    //* error
    error: 'err-80',
    'on-error': 'err-20',
    'error-container': 'err-30',
    'on-error-container': 'err-90',

    //* surface
    'surface-dim': 'neu-6',
    surface: 'neu-6',
    'surface-bright': 'neu-24',

    'surface-container-lowest': 'neu-4',
    'surface-container-low': 'neu-10',
    'surface-container': 'neu-12',
    'surface-container-high': 'neu-17',
    'surface-container-highest': 'neu-22',

    'on-surface': 'neu-90',
    'on-surface-variant': 'neu-var-80',

    'inverse-surface': 'neu-90',
    'inverse-on-surface': 'neu-20',

    //* outline
    outline: 'neu-var-60',
    'outline-variant': 'neu-var-30',

    //* misc
    scrim: 'neu-0',
    shadow: 'neu-0',
};
