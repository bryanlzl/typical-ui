//@ts-expect-error:ext file definitions
declare module '*.png' {
    const pngValue: string;
    export default pngValue;
}

declare module '*.jpg' {
    const jpgValue: string;
    export default jpgValue;
}

declare module '*.jpeg' {
    const jpegValue: string;
    export default jpegValue;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
