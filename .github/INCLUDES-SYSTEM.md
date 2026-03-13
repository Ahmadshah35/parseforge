# HTML Includes System

## Overview
This system extracts common header and footer components into separate HTML files that are loaded dynamically into each page using JavaScript.

## Structure

```
public/
├── includes/
│   ├── header.html      # Common navigation bar
│   └── footer.html      # Common footer
├── assets/
│   └── js/
│       └── includes.js  # Include loader script
└── *.html               # All pages use the include system
```

## How It Works

### 1. Include Files

**`includes/header.html`** - Contains the common navigation:
- ParseForge logo with SVG
- Main navigation links
- Mobile menu button
- Clickable logo linking to homepage

**`includes/footer.html`** - Contains the common footer:
- Company information
- Product links
- Resource links
- Account links
- Company links
- Copyright notice

### 2. Include Loader (`assets/js/includes.js`)

This JavaScript file:
- Runs on page load via `DOMContentLoaded` event
- Fetches `header.html` and `footer.html` using Fetch API
- Injects the HTML into placeholder divs
- Adds page-specific elements (e.g., cart button for marketplace)
- Sets the active navigation link based on current page

### 3. Using Includes in HTML Pages

Every page needs:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - ParseForge</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Header Include -->
    <div id="header-placeholder"></div>

    <!-- Your page content here -->
    <section>
        <!-- Content -->
    </section>

    <!-- Footer Include -->
    <div id="footer-placeholder"></div>

    <!-- IMPORTANT: Load includes.js BEFORE other scripts -->
    <script src="assets/js/includes.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>
```

## Page-Specific Elements

### Marketplace Cart Button

The marketplace page requires a cart button in the navigation. This is added automatically by `includes.js`:

```javascript
function addPageSpecificElements() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'marketplace.html') {
        // Adds cart button to navbar
    }
}
```

### Adding More Page-Specific Elements

To add elements for other pages, edit the `addPageSpecificElements()` function in `includes.js`:

```javascript
function addPageSpecificElements() {
    const currentPage = window.location.pathname.split('/').pop();
    const navContainer = document.querySelector('.navbar .container');
    
    // Example: Add notification bell to dashboard
    if (currentPage === 'dashboard.html' && navContainer) {
        const notificationBell = document.createElement('button');
        notificationBell.className = 'notification-btn';
        notificationBell.innerHTML = '🔔';
        navContainer.appendChild(notificationBell);
    }
}
```

## Active Navigation Link

The system automatically highlights the current page in the navigation by adding the `active` class to the matching link.

## Benefits

1. **DRY (Don't Repeat Yourself)** - Header and footer defined once
2. **Easy Maintenance** - Update logo or links in one place
3. **Consistency** - All pages guaranteed to have identical navigation/footer
4. **Performance** - Files are cached by the browser
5. **Flexibility** - Easy to add page-specific elements

## Updating Header or Footer

### To Update Navigation Links

Edit `includes/header.html`:
```html
<ul class="nav-links">
    <li><a href="docs.html">Documentation</a></li>
    <li><a href="sdks.html">SDKs & APIs</a></li>
    <li><a href="marketplace.html">Marketplace</a></li>
    <!-- Add new links here -->
</ul>
```

### To Update Footer

Edit `includes/footer.html`:
```html
<div class="footer-section">
    <h4>New Section</h4>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</div>
```

## Creating New Pages

When creating a new page:

1. Copy the HTML structure from any existing page
2. Replace the content between `<div id="header-placeholder"></div>` and `<div id="footer-placeholder"></div>`
3. Ensure `includes.js` is loaded before other scripts
4. Test that header and footer load correctly

## Troubleshooting

### Header/Footer Not Loading

- Check browser console for fetch errors
- Verify `includes/` folder exists and contains `header.html` and `footer.html`
- Ensure `includes.js` is loaded before other scripts
- Check that placeholder divs have correct IDs: `header-placeholder` and `footer-placeholder`

### Active Link Not Highlighting

- Verify the current page filename matches the href in navigation
- Check browser console for JavaScript errors
- Ensure `setActiveNavLink()` is called after header loads

### Page-Specific Elements Not Showing

- Check the filename condition in `addPageSpecificElements()`
- Verify the element is being appended to the correct parent
- Ensure the function runs after header HTML is injected

## Future Enhancements

Possible improvements:
- Add loading spinner while includes load
- Implement fallback for fetch errors
- Add support for multiple header variants (e.g., admin header)
- Cache includes in localStorage for faster subsequent loads
- Add lazy loading for non-critical includes

---

**Last Updated:** March 2, 2026  
**System Version:** 1.0
