import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MD3_SCHEMA } from '../schema';
import { tokens } from '../typica.config';
import {
    emitThemeBlock,
    emitTypescaleUtilityClass,
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

const SPECTRUM_TONAL_PALETTE: number[] = [
    0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100,
];

const typescaleProps = { normal: {}, emphasized: {} };
let css = `@import 'tailwindcss';\n\n`;

//* FONT FAMILY
for (const [_, fontFamilies] of Object.entries(tokens['typography']['font-family'])) {
    for (const family of fontFamilies) {
        css += `@font-face {\n`;
        for (const [k, v] of Object.entries(family)) {
            css += `  ${k}: ${v};\n`;
        }
        css += `}\n`;
    }
}

css += `\n`;

css += `@theme {\n`;

//* TONAL COLORS
for (const [key, baseValue] of Object.entries(tokens.color)) {
    for (const tone of SPECTRUM_TONAL_PALETTE) {
        const cssVarName = `--color-${key}-${tone}`;
        let colorValue: string = baseValue;
        if (tone !== 40) {
            if (isOKLCH(baseValue)) {
                colorValue = generateTonalOKLCH(baseValue, tone);
            } else if (isRGBA(baseValue)) {
                colorValue = generateTonalRGBA(baseValue, tone);
            } else if (isRGB(baseValue)) {
                colorValue = generateTonalRGB(baseValue, tone);
            } else if (isHex(baseValue)) {
                colorValue = generateTonalHex(baseValue, tone);
            }
        }
        css += `  ${cssVarName}: ${colorValue};\n`;
    }
}

css += '\n';

//* FONT ROLES
for (const [fontRole, fontFamilies] of Object.entries(tokens.typography['font-role'])) {
    css += `  --font-${fontRole}:  `;
    css += fontFamilies.map((f) => `"${f}"`).join(', ') + ';';
    css += '  \n';
}

css += '\n';

//* TYPESCALE PROPERTY (normal)
for (const [typescaleProp, typescaleValue] of Object.entries(MD3_SCHEMA.typeScale)) {
    const croppedPropName = typescaleProp.split('-').slice(0, 2).join('-');
    if (!(croppedPropName in typescaleProps.normal)) {
        typescaleProps.normal[croppedPropName] = [];
    }
    if (typescaleValue.includes('--font-')) {
        css += `  --font-${typescaleProp}: ${typescaleValue};\n`;
        typescaleProps.normal[croppedPropName].push(`--font-${typescaleProp}`);
    } else if (typescaleProp.includes('weight')) {
        const baseName = typescaleProp.replace('-weight', '');
        css += `  --font-weight-${baseName}: ${typescaleValue};\n`;
        typescaleProps.normal[croppedPropName].push(`--font-weight-${baseName}`);
    } else if (typescaleProp.includes('line-height')) {
        const baseName = typescaleProp.replace('-line-height', '');
        css += `  --leading-${baseName}: ${typescaleValue};\n`;
        typescaleProps.normal[croppedPropName].push(`--leading-${baseName}`);
    } else if (typescaleProp.includes('tracking')) {
        const baseName = typescaleProp.replace('-tracking', '');
        css += `  --tracking-${baseName}: ${typescaleValue};\n\n`;
        typescaleProps.normal[croppedPropName].push(`--tracking-${baseName}`);
    } else {
        css += `  --text-${typescaleProp}: ${typescaleValue};\n`;
        typescaleProps.normal[croppedPropName].push(`--text-${typescaleProp}`);
    }
}

//* TYPESCALE PROPERTY (emphasized)
for (const [typescaleProp, typescaleValue] of Object.entries(MD3_SCHEMA.typeScaleEmphasized)) {
    const croppedPropName = typescaleProp.split('-').slice(0, 2).join('-');
    if (!(croppedPropName in typescaleProps.emphasized)) {
        typescaleProps.emphasized[croppedPropName] = [];
    }
    if (typescaleValue.includes('--font-')) {
        css += `  --font-emphasized-${typescaleProp}: ${typescaleValue};\n`;
        typescaleProps.emphasized[croppedPropName].push(`--font-emphasized-${typescaleProp}`);
    } else if (typescaleProp.includes('weight')) {
        const baseName = typescaleProp.replace('-weight', '');
        css += `  --font-weight-emphasized-${baseName}: ${typescaleValue};\n`;
        typescaleProps.emphasized[croppedPropName].push(`--font-weight-emphasized-${baseName}`);
    } else if (typescaleProp.includes('line-height')) {
        const baseName = typescaleProp.replace('-line-height', '');
        css += `  --leading-emphasized-${baseName}: ${typescaleValue};\n`;
        typescaleProps.emphasized[croppedPropName].push(`--leading-emphasized-${baseName}`);
    } else if (typescaleProp.includes('tracking')) {
        const baseName = typescaleProp.replace('-tracking', '');
        css += `  --tracking-emphasized-${baseName}: ${typescaleValue};\n\n`;
        typescaleProps.emphasized[croppedPropName].push(`--tracking-emphasized-${baseName}`);
    } else {
        css += `  --text-emphasized-${typescaleProp}: ${typescaleValue};\n`;
        typescaleProps.emphasized[croppedPropName].push(`--text-emphasized-${typescaleProp}`);
    }
}

css += `}\n\n`;

css += `@layer utilities {\n`;

//* TYPESCALE (normal)
css += emitTypescaleUtilityClass('typescale', typescaleProps.normal);

css += '\n';

//* TYPESCALE (emphasized)
css += emitTypescaleUtilityClass('typescale-emphasized', typescaleProps.emphasized);

css += `}\n\n`;

//*  THEME VARIABLES [COLOR, ELEVATION] (DARK & LIGHT)
css += emitThemeBlock('light', MD3_SCHEMA.themeColorLight, MD3_SCHEMA.elevationLight);
css += emitThemeBlock('dark', MD3_SCHEMA.themeColorDark, MD3_SCHEMA.elevationDark);

fs.writeFileSync(outputPath, css);
console.log(`✅ Tokens written to ${outputPath}`);
