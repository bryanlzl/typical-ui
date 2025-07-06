export const SCHEMA_THEME_COLOR_LIGHT: Record<string, string> = {
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
export const SCHEMA_ELEVATION_LIGHT: Record<string, string> = {
    'elevation-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    'elevation-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    'elevation-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
    'elevation-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
    'elevation-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
};

export const SCHEMA_THEME_COLOR_DARK: Record<string, string> = {
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
export const SCHEMA_ELEVATION_DARK: Record<string, string> = {
    'elevation-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
    'elevation-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
    'elevation-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
    'elevation-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
    'elevation-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
};

export const SCHEMA_TYPE_SCALE: Record<string, string> = {
    '--ts-display-large-font': 'var(--font-display)',
    '--ts-display-large-weight': '400',
    '--ts-display-large-size': '57px',
    '--ts-display-large-line': '64px',
    '--ts-display-large-track': '-0.25px',

    '--ts-display-medium-font': 'var(--font-display)',
    '--ts-display_medium-weight': '400',
    '--ts-display-medium-size': '45px',
    '--ts-display-medium-line': '52px',
    '--ts-display-medium-track': '0px',

    '--ts-display-small-font': 'var(--font-display)',
    '--ts-display-small-weight': '400',
    '--ts-display-small-size': '36px',
    '--ts-display-small-line': '44px',
    '--ts-display-small-track': '0px',

    '--ts-headline-large-font': 'var(--font-headline)',
    '--ts-headline-large-weight': '400',
    '--ts-headline-large-size': '32px',
    '--ts-headline-large-line': '40px',
    '--ts-headline-large-track': '0px',

    '--ts-headline-medium-font': 'var(--font-headline)',
    '--ts-headline-medium-weight': '400',
    '--ts-headline-medium-size': '28px',
    '--ts-headline-medium-line': '36px',
    '--ts-headline-medium-track': '0px',

    '--ts-headline-small-font': 'var(--font-headline)',
    '--ts-headline-small-weight': '400',
    '--ts-headline-small-size': '24px',
    '--ts-headline-small-line': '32px',
    '--ts-headline-small-track': '0px',

    '--ts-title-large-font': 'var(--font-title)',
    '--ts-title-large-weight': '400',
    '--ts-title-large-size': '22px',
    '--ts-title-large-line': '28px',
    '--ts-title-large-track': '0px',

    '--ts-title-medium-font': 'var(--font-title)',
    '--ts-title-medium-weight': '500',
    '--ts-title-medium-size': '16px',
    '--ts-title-medium-line': '24px',
    '--ts-title-medium-track': '0.15px',

    '--ts-title-small-font': 'var(--font-title)',
    '--ts-title-small-weight': '500',
    '--ts-title-small-size': '14px',
    '--ts-title-small-line': '20px',
    '--ts-title-small-track': '0.1px',

    '--ts-body-large-font': 'var(--font-body)',
    '--ts-body-large-weight': '400',
    '--ts-body-large-size': '16px',
    '--ts-body-large-line': '24px',
    '--ts-body-large-track': '0.5px',

    '--ts-body-medium-font': 'var(--font-body)',
    '--ts-body-medium-weight': '400',
    '--ts-body-medium-size': '14px',
    '--ts-body-medium-line': '20px',
    '--ts-body-medium-track': '0.25px',

    '--ts-body-small-font': 'var(--font-body)',
    '--ts-body-small-weight': '400',
    '--ts-body-small-size': '12px',
    '--ts-body-small-line': '16px',
    '--ts-body-small-track': '0.4px',

    '--ts-label-large-font': 'var(--font-label)',
    '--ts-label-large-weight': '500',
    '--ts-label-large-size': '14px',
    '--ts-label-large-line': '20px',
    '--ts-label-large-track': '0.1px',

    '--ts-label-medium-font': 'var(--font-label)',
    '--ts-label-medium-weight': '500',
    '--ts-label-medium-size': '12px',
    '--ts-label-medium-line': '16px',
    '--ts-label-medium-track': '0.5px',

    '--ts-label-small-font': 'var(--font-label)',
    '--ts-label-small-weight': '500',
    '--ts-label-small-size': '11px',
    '--ts-label-small-line': '16px',
    '--ts-label-small-track': '0.5px',
};
export const SCHEMA_TYPE_SCALE_EMPHASIZED: Record<string, string> = {
    '--ts-emphasized-display-large-weight': '500',
    '--ts-emphasized-display-medium-weight': '500',
    '--ts-emphasized-display-small-weight': '500',

    '--ts-emphasized-headline-large-weight': '500',
    '--ts-emphasized-headline-medium-weight': '500',
    '--ts-emphasized-headline-small-weight': '500',

    '--ts-emphasized-title-large-weight': '500',
    '--ts-emphasized-title-medium-weight': '500',
    '--ts-emphasized-title-small-weight': '500',

    '--ts-emphasized-body-large-weight': '500',
    '--ts-emphasized-body-medium-weight': '500',
    '--ts-emphasized-body-small-weight': '500',

    '--ts-emphasized-label-large-weight': '700',
    '--ts-emphasized-label-medium-weight': '700',
    '--ts-emphasized-label-small-weight': '700',
};
