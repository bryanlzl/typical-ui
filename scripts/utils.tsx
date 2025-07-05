export const isOKLCH = (value: string): boolean => value.startsWith('oklch');
export const isRGB = (value: string): boolean => value.startsWith('rgb') && !value.startsWith('rgba');
export const isRGBA = (value: string): boolean => value.startsWith('rgba');
export const isHex = (value: string): boolean => /^#([0-9a-fA-F]{6})$/.test(value);

export const generateTonalOKLCH = (base: string, tone: number): string => {
    const match = base.match(/^oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)$/);
    if (!match) return base;

    const [, baseLStr, baseCStr, baseHStr] = match;
    const baseL = parseFloat(baseLStr);
    const baseC = parseFloat(baseCStr);
    const baseH = parseFloat(baseHStr);

    if (tone === 0) return `oklch(0 0 0)`;
    if (tone === 100) return `oklch(1 0 0)`;
    if (tone === 40) return base;

    let newL = baseL;
    let newC = baseC;

    if (tone < 40) {
        const factor = tone / 40;
        newL = +(baseL * factor).toFixed(4);
        newC = +(baseC * factor).toFixed(4);
    } else {
        const factor = (tone - 40) / 60;
        newL = +(baseL + (1 - baseL) * factor).toFixed(4);
        newC = +(baseC * (1 - factor)).toFixed(4);
    }

    return `oklch(${newL} ${newC} ${baseH})`;
};

export const generateTonalHex = (baseHex: string, tone: number): string => {
    if (!/^#([0-9a-fA-F]{6})$/.test(baseHex)) return baseHex;

    const hexToRgb = (hex: string) => ({
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
    });

    const rgbToHsl = ({ r, g, b }: { r: number; g: number; b: number }) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        let h = 0,
            s = 0;
        const l = (max + min) / 2;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return { h, s, l };
    };

    const hslToHex = ({ h, s, l }: { h: number; s: number; l: number }) => {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        const r = hue2rgb(p, q, h + 1 / 3);
        const g = hue2rgb(p, q, h);
        const b = hue2rgb(p, q, h - 1 / 3);

        const toHex = (x: number) =>
            Math.round(x * 255)
                .toString(16)
                .padStart(2, '0');

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const rgb = hexToRgb(baseHex);
    const hsl = rgbToHsl(rgb);

    if (tone === 0) return '#000000';
    if (tone === 100) return '#ffffff';
    if (tone === 40) return baseHex;

    const adjustedL = tone < 40 ? hsl.l * (tone / 40) : hsl.l + (1 - hsl.l) * ((tone - 40) / 60);

    return hslToHex({ ...hsl, l: +adjustedL.toFixed(4) });
};

export const generateTonalRGB = (base: string, tone: number): string => {
    const match = base.match(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)$/i);
    if (!match) return base;

    const [r, g, b] = match.slice(1).map(Number);
    if (tone === 0) return `rgb(0, 0, 0)`;
    if (tone === 100) return `rgb(255, 255, 255)`;
    if (tone === 40) return base;

    const factor = tone < 40 ? tone / 40 : (tone - 40) / 60;
    const mix = (channel: number) =>
        tone < 40 ? Math.round(channel * factor) : Math.round(channel + (255 - channel) * factor);

    return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
};

export const generateTonalRGBA = (base: string, tone: number): string => {
    const match = base.match(/^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\s*\)$/i);
    if (!match) return base;

    const [r, g, b, a] = match.slice(1).map(Number);
    if (tone === 0) return `rgba(0, 0, 0, ${a})`;
    if (tone === 100) return `rgba(255, 255, 255, ${a})`;
    if (tone === 40) return base;

    const factor = tone < 40 ? tone / 40 : (tone - 40) / 60;
    const mix = (channel: number) =>
        tone < 40 ? Math.round(channel * factor) : Math.round(channel + (255 - channel) * factor);

    return `rgba(${mix(r)}, ${mix(g)}, ${mix(b)}, ${a})`;
};
