//* GENERATE TONAL PALETTE
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
    } else if (tone <= 95) {
        const factor = (tone - 40) / (95 - 40);
        newL = +(baseL + (0.9524 - baseL) * factor).toFixed(4);
        newC = +(baseC + (0.0202 - baseC) * factor).toFixed(4);
    } else {
        const factor = (tone - 95) / (100 - 95);
        newL = +(0.9524 + (1 - 0.9524) * factor).toFixed(4);
        newC = +(0.0202 * (1 - factor)).toFixed(4);
    }
    return `oklch(${newL} ${newC} ${baseH})`;
};
export const generateTonalHex = (base: string, tone: number): string => {
    if (!/^#([0-9a-fA-F]{6})$/.test(base)) return base;
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
    const rgb = hexToRgb(base);
    const hsl = rgbToHsl(rgb);
    if (tone === 0) return '#000000';
    if (tone === 100) return '#ffffff';
    if (tone === 40) return base;
    let l = hsl.l;
    let s = hsl.s;
    if (tone < 40) {
        const factor = tone / 40;
        l = +(hsl.l * factor).toFixed(4);
        s = +(hsl.s * factor).toFixed(4);
    } else if (tone <= 95) {
        const factor = (tone - 40) / (95 - 40);
        l = +(hsl.l + (0.92 - hsl.l) * factor).toFixed(4);
        s = hsl.s;
    } else {
        const factor = (tone - 95) / (100 - 95);
        l = +(0.92 + (1 - 0.92) * factor).toFixed(4);
        s = +(hsl.s * (1 - factor)).toFixed(4);
    }
    return hslToHex({ ...hsl, l, s });
};
export const generateTonalRGB = (base: string, tone: number): string => {
    const match = base.match(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)$/i);
    if (!match) return base;
    const [r, g, b] = match.slice(1).map(Number);
    if (tone === 0) return `rgb(0, 0, 0)`;
    if (tone === 100) return `rgb(255, 255, 255)`;
    if (tone === 40) return base;
    const rNorm = r / 255,
        gNorm = g / 255,
        bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm),
        min = Math.min(rNorm, gNorm, bNorm);
    const l0 = (max + min) / 2;
    let h = 0,
        s = 0;
    if (max !== min) {
        const d = max - min;
        s = l0 > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rNorm:
                h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
                break;
            case gNorm:
                h = (bNorm - rNorm) / d + 2;
                break;
            case bNorm:
                h = (rNorm - gNorm) / d + 4;
                break;
        }
        h /= 6;
    }
    let l = l0;
    if (tone < 40) {
        const factor = tone / 40;
        l = +(l0 * factor).toFixed(4);
        s = +(s * factor).toFixed(4);
    } else if (tone <= 95) {
        const factor = (tone - 40) / (95 - 40);
        l = +(l0 + (0.92 - l0) * factor).toFixed(4);
    } else {
        const factor = (tone - 95) / (100 - 95);
        l = +(0.92 + (1 - 0.92) * factor).toFixed(4);
        s = +(s * (1 - factor)).toFixed(4); // drop off sharp
    }
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
    const rOut = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
    const gOut = Math.round(hue2rgb(p, q, h) * 255);
    const bOut = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
    return `rgb(${rOut}, ${gOut}, ${bOut})`;
};
export const generateTonalRGBA = (base: string, tone: number): string => {
    const match = base.match(/^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\s*\)$/i);
    if (!match) return base;
    const [r, g, b, a] = match.slice(1).map(Number);
    if (tone === 0) return `rgba(0, 0, 0, ${a})`;
    if (tone === 100) return `rgba(255, 255, 255, ${a})`;
    if (tone === 40) return base;
    const rNorm = r / 255,
        gNorm = g / 255,
        bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm),
        min = Math.min(rNorm, gNorm, bNorm);
    const l0 = (max + min) / 2;
    let h = 0,
        s = 0;
    if (max !== min) {
        const d = max - min;
        s = l0 > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rNorm:
                h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
                break;
            case gNorm:
                h = (bNorm - rNorm) / d + 2;
                break;
            case bNorm:
                h = (rNorm - gNorm) / d + 4;
                break;
        }
        h /= 6;
    }
    let l = l0;
    if (tone < 40) {
        const factor = tone / 40;
        l = +(l0 * factor).toFixed(4);
        s = +(s * factor).toFixed(4);
    } else if (tone <= 95) {
        const factor = (tone - 40) / (95 - 40);
        l = +(l0 + (0.92 - l0) * factor).toFixed(4);
    } else {
        const factor = (tone - 95) / (100 - 95);
        l = +(0.92 + (1 - 0.92) * factor).toFixed(4);
        s = +(s * (1 - factor)).toFixed(4);
    }
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
    const rOut = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
    const gOut = Math.round(hue2rgb(p, q, h) * 255);
    const bOut = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
    return `rgba(${rOut}, ${gOut}, ${bOut}, ${a})`;
};

//* EMIT THEME VARIABLES
export const emitThemeBlock = (
    name: string,
    theme: Record<string, string>,
    elevation: Record<string, string>,
): string => {
    let out = ` [data-theme='${name}'] {\n`;
    for (const [k, v] of Object.entries(theme)) {
        out += `  --color-${k}: var(--color-${v});\n`;
    }
    out += `  \n`;
    for (const [k, v] of Object.entries(elevation)) {
        out += `  --${k}: ${v};\n`;
    }
    out += `}\n`;
    return out;
};
//* EMIT TYPESCALE PROPERTIES
export const emityTypescaleProps = (
    schema: Record<string, string>,
    target: Record<string, string[]>,
    isEmphasized: boolean,
) => {
    const prefix = isEmphasized ? 'emphasized-' : '';
    const cssLines: string[] = [];
    for (const [prop, value] of Object.entries(schema)) {
        const baseProp = prop.split('-').slice(0, 2).join('-');
        if (!(baseProp in target)) target[baseProp] = [];

        let varName = '';
        if (value.includes('--font-')) {
            varName = `--font-${prefix}${prop}`;
        } else if (prop.includes('weight')) {
            const base = prop.replace('-weight', '');
            varName = `--font-weight-${prefix}${base}`;
        } else if (prop.includes('line-height')) {
            const base = prop.replace('-line-height', '');
            varName = `--leading-${prefix}${base}`;
        } else if (prop.includes('tracking')) {
            const base = prop.replace('-tracking', '');
            varName = `--tracking-${prefix}${base}`;
        } else {
            varName = `--text-${prefix}${prop}`;
        }
        cssLines.push(`  ${varName}: ${value};${prop.includes('tracking') ? '\n' : ''}`);
        target[baseProp].push(varName);
    }
    return cssLines.join('\n') + '\n';
};
//* EMIT TYPESCALE UTILITIES
export const emitTypescaleUtilityClass = (classPrefix: string, typescaleMap: Record<string, string[]>): string => {
    let result = '';
    for (const [typescaleName, tsPropsMap] of Object.entries(typescaleMap)) {
        result += `  .${classPrefix}-${typescaleName} {\n`;
        for (const propVarName of tsPropsMap) {
            if (propVarName.includes('-family')) {
                result += `    font-family: var(${propVarName});\n`;
            } else if (propVarName.includes('--font-weight-')) {
                result += `    font-weight: var(${propVarName});\n`;
            } else if (propVarName.includes('--text')) {
                result += `    font-size: var(${propVarName});\n`;
            } else if (propVarName.includes('--leading')) {
                result += `    line-height: var(${propVarName});\n`;
            } else if (propVarName.includes('--tracking')) {
                result += `    letter-spacing: var(${propVarName});\n`;
            }
        }
        result += `  }\n`;
    }
    return result;
};

//* HELPER METHODS
//^ CHECK COLOR FORMAT
export const isOKLCH = (value: string): boolean => value.startsWith('oklch');
export const isRGB = (value: string): boolean => value.startsWith('rgb') && !value.startsWith('rgba');
export const isRGBA = (value: string): boolean => value.startsWith('rgba');
export const isHex = (value: string): boolean => /^#([0-9a-fA-F]{6})$/.test(value);
