export const SCHEMA_COLOR_LIGHT: Record<string, string> = {
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

export const SCHEMA_COLOR_DARK: Record<string, string> = {
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
    'display-large-family': 'var(--font-display)',
    'display-large-weight': '400',
    'display-large-size': '57px',
    'display-large-line-height': '64px',
    'display-large-tracking': '-0.25px',

    'display-medium-family': 'var(--font-display)',
    'display-medium-weight': '400',
    'display-medium-size': '45px',
    'display-medium-line-height': '52px',
    'display-medium-tracking': '0px',

    'display-small-family': 'var(--font-display)',
    'display-small-weight': '400',
    'display-small-size': '36px',
    'display-small-line-height': '44px',
    'display-small-tracking': '0px',

    'headline-large-family': 'var(--font-headline)',
    'headline-large-weight': '400',
    'headline-large-size': '32px',
    'headline-large-line-height': '40px',
    'headline-large-tracking': '0px',

    'headline-medium-family': 'var(--font-headline)',
    'headline-medium-weight': '400',
    'headline-medium-size': '28px',
    'headline-medium-line-height': '36px',
    'headline-medium-tracking': '0px',

    'headline-small-family': 'var(--font-headline)',
    'headline-small-weight': '400',
    'headline-small-size': '24px',
    'headline-small-line-height': '32px',
    'headline-small-tracking': '0px',

    'title-large-family': 'var(--font-title)',
    'title-large-weight': '400',
    'title-large-size': '22px',
    'title-large-line-height': '28px',
    'title-large-tracking': '0px',

    'title-medium-family': 'var(--font-title)',
    'title-medium-weight': '500',
    'title-medium-size': '16px',
    'title-medium-line-height': '24px',
    'title-medium-tracking': '0.15px',

    'title-small-family': 'var(--font-title)',
    'title-small-weight': '500',
    'title-small-size': '14px',
    'title-small-line-height': '20px',
    'title-small-tracking': '0.1px',

    'body-large-family': 'var(--font-body)',
    'body-large-weight': '400',
    'body-large-size': '16px',
    'body-large-line-height': '24px',
    'body-large-tracking': '0.5px',

    'body-medium-family': 'var(--font-body)',
    'body-medium-weight': '400',
    'body-medium-size': '14px',
    'body-medium-line-height': '20px',
    'body-medium-tracking': '0.25px',

    'body-small-family': 'var(--font-body)',
    'body-small-weight': '400',
    'body-small-size': '12px',
    'body-small-line-height': '16px',
    'body-small-tracking': '0.4px',

    'label-large-family': 'var(--font-label)',
    'label-large-weight': '500',
    'label-large-size': '14px',
    'label-large-line-height': '20px',
    'label-large-tracking': '0.1px',

    'label-medium-family': 'var(--font-label)',
    'label-medium-weight': '500',
    'label-medium-size': '12px',
    'label-medium-line-height': '16px',
    'label-medium-tracking': '0.5px',

    'label-small-family': 'var(--font-label)',
    'label-small-weight': '500',
    'label-small-size': '11px',
    'label-small-line-height': '16px',
    'label-small-tracking': '0.5px',
};
export const SCHEMA_TYPE_SCALE_EMPHASIZED: Record<string, string> = {
    'display-large-family': 'var(--font-display)',
    'display-large-weight': '500',
    'display-large-size': '57px',
    'display-large-line-height': '64px',
    'display-large-tracking': '-0.25px',

    'display-medium-family': 'var(--font-display)',
    'display-medium-weight': '500',
    'display-medium-size': '45px',
    'display-medium-line-height': '52px',
    'display-medium-tracking': '0px',

    'display-small-family': 'var(--font-display)',
    'display-small-weight': '500',
    'display-small-size': '36px',
    'display-small-line-height': '44px',
    'display-small-tracking': '0px',

    'headline-large-family': 'var(--font-headline)',
    'headline-large-weight': '500',
    'headline-large-size': '32px',
    'headline-large-line-height': '40px',
    'headline-large-tracking': '0px',

    'headline-medium-family': 'var(--font-headline)',
    'headline-medium-weight': '500',
    'headline-medium-size': '28px',
    'headline-medium-line-height': '36px',
    'headline-medium-tracking': '0px',

    'headline-small-family': 'var(--font-headline)',
    'headline-small-weight': '500',
    'headline-small-size': '24px',
    'headline-small-line-height': '32px',
    'headline-small-tracking': '0px',

    'title-large-family': 'var(--font-title)',
    'title-large-weight': '500',
    'title-large-size': '22px',
    'title-large-line-height': '28px',
    'title-large-tracking': '0px',

    'title-medium-family': 'var(--font-title)',
    'title-medium-weight': '500',
    'title-medium-size': '16px',
    'title-medium-line-height': '24px',
    'title-medium-tracking': '0.15px',

    'title-small-family': 'var(--font-title)',
    'title-small-weight': '500',
    'title-small-size': '14px',
    'title-small-line-height': '20px',
    'title-small-tracking': '0.1px',

    'body-large-family': 'var(--font-body)',
    'body-large-weight': '500',
    'body-large-size': '16px',
    'body-large-line-height': '24px',
    'body-large-tracking': '0.5px',

    'body-medium-family': 'var(--font-body)',
    'body-medium-weight': '500',
    'body-medium-size': '14px',
    'body-medium-line-height': '20px',
    'body-medium-tracking': '0.25px',

    'body-small-family': 'var(--font-body)',
    'body-small-weight': '500',
    'body-small-size': '12px',
    'body-small-line-height': '16px',
    'body-small-tracking': '0.4px',

    'label-large-family': 'var(--font-label)',
    'label-large-weight': '700',
    'label-large-size': '14px',
    'label-large-line-height': '20px',
    'label-large-tracking': '0.1px',

    'label-medium-family': 'var(--font-label)',
    'label-medium-weight': '700',
    'label-medium-size': '12px',
    'label-medium-line-height': '16px',
    'label-medium-tracking': '0.5px',

    'label-small-family': 'var(--font-label)',
    'label-small-weight': '700',
    'label-small-size': '11px',
    'label-small-line-height': '16px',
    'label-small-tracking': '0.5px',
};
