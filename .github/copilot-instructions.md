# ParseForge Developer Platform

## Project Overview
ParseForge is an original developer platform for API documentation and tools. Full-stack web application with HTML/CSS/JavaScript frontend and Node.js/Express backend.

## Project Status
- [x] Create copilot-instructions.md
- [x] Clarify requirements - Original developer documentation platform
- [x] Scaffold project structure
- [x] Customize project - All pages and functionality created
- [x] Install dependencies - Ready (requires Node.js first)
- [x] Project documentation complete
- [x] Enhanced all features with advanced functionality

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js, Express.js
- Charts: Chart.js for analytics visualizations
- Features: API docs, code examples, developer dashboard, authentication, API playground, resources/blog

## All Pages Created

### Core Pages
- `index.html` - Landing page with hero and features
- `docs.html` - Interactive API documentation (expanded with webhooks, errors, rate limiting, pagination)
- `dashboard.html` - Developer dashboard with charts and analytics
- `login.html` - Authentication page
- `register.html` - Sign-up page with social login
- `settings.html` - User account settings and profile management

### Additional Pages
- `sdks.html` - SDKs & APIs page (6 languages: Node.js, Python, Ruby, Go, Java, PHP)
- `pricing.html` - Pricing page (Starter $89, Professional $149, Enterprise Custom)
- `resources.html` - Blog and resources section with guides and tutorials
- `playground.html` - Interactive API playground for testing endpoints
- `contact.html` - Contact and support page with FAQ

## Key Features

### Landing Page (index.html)
✅ Modern hero section
✅ Feature grid showcase
✅ Quick start steps
✅ Responsive navigation
✅ Footer with multiple sections

### Documentation (docs.html)
✅ Comprehensive API reference
✅ Code examples in multiple languages (cURL, JavaScript, Python)
✅ Authentication guide
✅ Error handling documentation
✅ Rate limiting information
✅ Pagination guide
✅ Webhooks documentation
✅ Interactive code copying

### Dashboard (dashboard.html)
✅ Real-time statistics (API calls, response times, success rate)
✅ Usage charts with Chart.js (API usage, response time, status codes)
✅ Top endpoints analytics with progress bars
✅ API key management
✅ Recent activity feed
✅ Sidebar navigation

### SDKs & APIs (sdks.html)
✅ 6 SDK languages with installation guides
✅ Interactive tab switching between languages
✅ Code examples for each SDK
✅ Complete API suite overview (Users, Data, Webhooks, Payments, Storage, Email)
✅ Original version numbers and features

### Pricing (pricing.html)
✅ 3 pricing tiers with detailed features
✅ Monthly/yearly billing toggle (20% discount)
✅ Feature comparison table
✅ FAQ section
✅ Original pricing structure

### Resources (resources.html)
✅ Categorized guides and tutorials
✅ Video tutorials section
✅ Search functionality
✅ Resource filtering by type
✅ Newsletter subscription
✅ Multiple resource cards (Getting Started, Advanced Topics, Videos)

### API Playground (playground.html)
✅ Interactive endpoint testing
✅ Request configuration (API key, base URL)
✅ Query parameters management
✅ Request body editing
✅ Real-time response display
✅ Response metadata (status, time, size)
✅ Code syntax highlighting

### Contact & Support (contact.html)
✅ Multiple contact methods (chat, email, phone, office)
✅ Contact form with subject selection
✅ Response time statistics
✅ FAQ section with expandable answers
✅ Support channel information

### User Settings (settings.html)
✅ Profile information management
✅ Password change functionality
✅ Two-factor authentication toggle
✅ Billing and subscription management
✅ Payment method management
✅ Billing history with invoices
✅ Team member management
✅ Notification preferences
✅ Webhook configuration

### Authentication
✅ Login page with social authentication
✅ Register page with detailed form
✅ Form validation
✅ Password strength requirements
✅ Terms of service acceptance
✅ Newsletter opt-in

## Mobile Responsiveness
✅ Responsive navigation with mobile menu
✅ Adaptive grid layouts for all screen sizes
✅ Mobile-friendly forms
✅ Collapsible sections on mobile
✅ Touch-friendly buttons and interactions

## Styling
- Modern CSS with CSS variables for theming
- Consistent color scheme (Primary: #6366f1, Secondary: #8b5cf6)
- Smooth transitions and hover effects
- Professional card-based layouts
- Responsive breakpoints (968px, 640px)

## To Run the Project

1. **Install Node.js** from https://nodejs.org/ (if not installed)
2. **Open NEW terminal** in this directory
3. **Install dependencies**: `npm install`
4. **Start server**: `npm start` or `node server.js`
5. **Open browser**: http://localhost:3000

## Available Routes
- Home: http://localhost:3000/
- Documentation: http://localhost:3000/docs.html
- SDKs & APIs: http://localhost:3000/sdks.html
- Pricing: http://localhost:3000/pricing.html
- Resources: http://localhost:3000/resources.html
- API Playground: http://localhost:3000/playground.html
- Contact: http://localhost:3000/contact.html
- Dashboard: http://localhost:3000/dashboard.html
- Login: http://localhost:3000/login.html
- Register: http://localhost:3000/register.html
- Settings: http://localhost:3000/settings.html

## Project Structure
```
project/
├── server.js                  # Express server with API endpoints
├── package.json              # Project dependencies
├── README.md                 # Project documentation
├── SETUP.md                  # Setup instructions
├── .github/
│   └── copilot-instructions.md
└── public/
    ├── index.html           # Landing page
    ├── docs.html            # API documentation
    ├── sdks.html            # SDKs & APIs
    ├── pricing.html         # Pricing plans
    ├── resources.html       # Blog & resources
    ├── playground.html      # API playground
    ├── contact.html         # Contact & support
    ├── dashboard.html       # Developer dashboard
    ├── login.html           # Login page
    ├── register.html        # Sign-up page
    ├── settings.html        # Account settings
    ├── css/
    │   ├── style.css        # Main styles (with mobile responsive)
    │   ├── docs.css         # Documentation styles
    │   └── dashboard.css    # Dashboard styles
    └── js/
        ├── app.js           # Main JavaScript
        ├── docs.js          # Documentation functionality
        └── dashboard.js     # Dashboard with Chart.js
```

## Dependencies Installed
- express@^4.18.2
- body-parser@^1.20.2
- cors@^2.8.5
- Chart.js (via CDN for dashboard visualizations)

Total: 70 packages installed, 0 vulnerabilities

## CSS Patterns & Best Practices

### Custom Dropdown Styling
⚠️ **IMPORTANT:** When styling `<select>` dropdowns with custom arrows, always use the comprehensive fix documented in [dropdown-fix-reference.md](.github/dropdown-fix-reference.md) to prevent multiple arrows from appearing.

**Quick Reference:**
```css
select {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    background-image: url("data:image/svg+xml,...") !important;
}

select::-ms-expand { display: none; }
select::-webkit-calendar-picker-indicator { display: none !important; }
```

**Key Points:**
- Always use `!important` on appearance and background-image properties
- Use `background-color` NOT `background` shorthand (preserves background-image)
- Include browser-specific pseudo-elements (`::-ms-expand`, `::-webkit-calendar-picker-indicator`)
- Re-declare background-image in `:focus` and `:hover` states
- Test across Chrome, Firefox, Safari, and Edge
- Use cache-busting with `?v=X.X` on CSS links

**Applied in:**
- `marketplace.css` - Filter dropdowns and global selects
- `dashboard.css` - Chart selects
- `admin.css` - Form controls
- `settings.html` - Form selects

## Notable Features
🎨 Modern, professional design throughout
📊 Interactive charts and analytics
🔧 Working API playground
📚 Comprehensive documentation
💳 Complete billing/subscription management
👥 Team management functionality
🔔 Notification preferences
📱 Fully responsive mobile design
🎯 Original content (no copyright violations)
⚡ Fast, lightweight implementation
