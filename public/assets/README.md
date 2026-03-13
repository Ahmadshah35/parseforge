# Assets Folder Structure

This folder contains all static assets for the ParseForge platform.

## 📁 Folder Organization

```
assets/
├── css/          # Stylesheets
│   ├── style.css        # Main global styles
│   ├── admin.css        # Admin panel styles
│   ├── dashboard.css    # Dashboard styles
│   └── docs.css         # Documentation styles
│
├── js/           # JavaScript files
│   ├── app.js           # Main application logic
│   ├── admin.js         # Admin panel functionality
│   ├── dashboard.js     # Dashboard functionality
│   └── docs.js          # Documentation interactivity
│
├── images/       # Images and graphics
│   └── (Store logo, icons, banners here)
│
└── fonts/        # Custom fonts
    └── (Store web fonts here)
```

## 🎯 Usage

### In HTML files:
```html
<!-- CSS -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- JavaScript -->
<script src="assets/js/app.js"></script>

<!-- Images -->
<img src="assets/images/logo.png" alt="Logo">
```

### In CSS files:
```css
/* Fonts */
@font-face {
    font-family: 'CustomFont';
    src: url('../fonts/custom-font.woff2');
}

/* Images */
.background {
    background-image: url('../images/background.jpg');
}
```

## 📝 File Descriptions

### CSS Files
- **style.css** - Cyber-futuristic design system, variables, global styles
- **admin.css** - Admin panel specific styling with glassmorphism effects
- **dashboard.css** - Developer dashboard with charts and stats styling
- **docs.css** - Documentation page styling with code blocks

### JavaScript Files
- **app.js** - Main application, navigation, mobile menu
- **admin.js** - Admin panel CRUD operations, API calls
- **dashboard.js** - Dashboard data loading, charts, API key management
- **docs.js** - Documentation interactivity, code copying, navigation

## 🚀 Adding New Assets

### Images
Place images in `assets/images/` folder:
- Logo files
- Icons
- Background images
- Feature graphics
- Screenshots

### Fonts
Place font files in `assets/fonts/` folder:
- .woff2 (preferred)
- .woff
- .ttf
- .otf

### CSS
Add new stylesheets to `assets/css/` folder and link in HTML:
```html
<link rel="stylesheet" href="assets/css/your-new-style.css">
```

### JavaScript
Add new scripts to `assets/js/` folder and include in HTML:
```html
<script src="assets/js/your-new-script.js"></script>
```

## ✨ Best Practices

1. **Organize by type** - Keep CSS, JS, images, and fonts separated
2. **Use descriptive names** - `hero-background.jpg` not `image1.jpg`
3. **Optimize images** - Compress before uploading
4. **Minify in production** - Use minified versions for CSS/JS
5. **Use relative paths** - Ensures portability across environments

## 🔧 Maintenance

- Keep files organized in their respective folders
- Remove unused assets regularly
- Update references when moving files
- Document custom assets in this README
