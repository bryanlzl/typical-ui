## typical-ui repo

Deviations from Google Material 3 Design:

- tonal color palette var names is 3 character instead of 1-2 (e.g. tertiary should be "t" but now its "ter")
- tonal color palette using self-derived color scaling algo (MD3 does not expose not explicitly define color scaling method used)
- tonal color palette has extra tonal palettes (success "suc" & "wrn")
- typescale property name is set to conform to @theme's prefix convention to be usable within tailwind
    - using "--TW_SELECTOR-TYPEFACE-SIZE-y" format instead of md.sys.typescale.TYPEFACE-SIZE.PROPERTY

## ⚙️ Getting Started

```bash
npm install       # Install dependencies
npm run dev       # Start development server
npm run lint      # Run ESLint
npm run build     # Build for production
```
