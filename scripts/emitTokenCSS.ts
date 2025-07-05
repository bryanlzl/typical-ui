import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tokens } from '../typicaui.config';
import {
    generateTonalHex,
    generateTonalOKLCH,
    generateTonalRGB,
    generateTonalRGBA,
    isHex,
    isOKLCH,
    isRGB,
    isRGBA,
} from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, '../src/styles/index.css');

let css = `@import 'tailwindcss';\n\n`;

const colorTonalPalette: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

//* FONT-FACE
for (const [_, faces] of Object.entries(tokens['font-face'])) {
    for (const face of faces) {
        css += `@font-face {\n`;
        for (const [k, v] of Object.entries(face)) {
            css += `  ${k}: ${v};\n`;
        }
        css += `}\n`;
    }
}

css += `\n:root {\n`;

//* COLORS
for (const [key, baseValue] of Object.entries(tokens.colors)) {
    for (const tone of colorTonalPalette) {
        const cssVarName = `--color-${key}-${tone}`;
        let colorValue: string;

        if (tone === 40) {
            colorValue = baseValue;
        } else if (isOKLCH(baseValue)) {
            colorValue = generateTonalOKLCH(baseValue, tone);
        } else if (isRGBA(baseValue)) {
            colorValue = generateTonalRGBA(baseValue, tone);
        } else if (isRGB(baseValue)) {
            colorValue = generateTonalRGB(baseValue, tone);
        } else if (isHex(baseValue)) {
            colorValue = generateTonalHex(baseValue, tone);
        } else {
            colorValue = baseValue;
        }
        css += `  ${cssVarName}: ${colorValue};\n`;
    }
}

css += '}\n';

fs.writeFileSync(outputPath, css);
console.log(`✅ Tokens written to ${outputPath}`);
