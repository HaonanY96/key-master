# Key Master

A keyboard visualization and interaction tool.

## Fonts

This project uses the [Inter](https://fonts.google.com/specimen/Inter) font family, which is licensed under the [SIL Open Font License 1.1](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).

### Font Features

- Clean and modern design
- Excellent readability
- Optimized for screen display
- Comprehensive Unicode support
- Multiple weights for different use cases:
  - 300 (Light): Supplementary information, notes
  - 400 (Regular): Body text
  - 500 (Medium): Subtitles
  - 800 (Extra-bold): Section titles

### Font Usage

```css
/* Documentation text styles */
.keyboard-title {
  font-weight: 800;
} /* Titles */
.keyboard-subtitle {
  font-weight: 500;
} /* Subtitles */
.keyboard-text {
  font-weight: 400;
} /* Body text */
.keyboard-note {
  font-weight: 300;
} /* Notes */
```

### Font License

Inter is a free and open source font family, available for use under the SIL Open Font License 1.1. This means:

- ✅ Free to use in commercial projects
- ✅ Free to modify
- ✅ Free to distribute
- ✅ No attribution required (but appreciated)

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

[MIT License](LICENSE)
