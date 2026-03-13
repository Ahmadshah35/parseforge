// ========================================
// MARKETPLACE - E-COMMERCE FUNCTIONALITY
// ========================================

// Product Database
const products = [
    {
        id: 1,
        name: 'Node.js SDK Pro',
        category: 'sdk',
        icon: '⚡',
        price: 149,
        description: 'Full-featured Node.js SDK with TypeScript support, async/await, and advanced error handling.',
        features: ['TypeScript Support', 'Async/Await', 'WebSocket Support', 'Auto-retry', 'Request batching', 'Full documentation'],
        badge: 'bestseller',
        rating: 4.9,
        reviews: 234,
        downloads: 15000
    },
    {
        id: 2,
        name: 'Python SDK Enterprise',
        category: 'sdk',
        icon: '🐍',
        price: 169,
        description: 'Professional Python SDK with asyncio support, type hints, and comprehensive testing.',
        features: ['Asyncio Support', 'Type Hints', 'Data Validation', 'CLI Tools', 'Testing Suite', 'Migration Tools'],
        badge: 'featured',
        rating: 4.8,
        reviews: 189,
        downloads: 12000
    },
    {
        id: 3,
        name: 'REST API Complete',
        category: 'api',
        icon: '🔌',
        price: 99,
        description: 'Complete REST API access with all endpoints, webhooks, and real-time updates.',
        features: ['All Endpoints', 'Webhooks', 'Real-time Updates', 'Rate Limiting', 'Analytics', 'Priority Support'],
        badge: 'featured',
        rating: 4.9,
        reviews: 456,
        downloads: 25000
    },
    {
        id: 4,
        name: 'GraphQL API',
        category: 'api',
        icon: '◆',
        price: 129,
        description: 'Modern GraphQL API with schema introspection, subscriptions, and optimized queries.',
        features: ['Schema Introspection', 'Subscriptions', 'Query Optimization', 'Caching', 'Type Safety', 'Playground Access'],
        badge: 'new',
        rating: 4.7,
        reviews: 92,
        downloads: 5000
    },
    {
        id: 5,
        name: 'React Components Library',
        category: 'library',
        icon: '⚛️',
        price: 79,
        description: 'Pre-built React components for rapid UI development with ParseForge integration.',
        features: ['50+ Components', 'Responsive Design', 'Dark Mode', 'TypeScript', 'Storybook', 'Theme Customization'],
        badge: 'new',
        rating: 4.6,
        reviews: 67,
        downloads: 3000
    },
    {
        id: 6,
        name: 'Java SDK Professional',
        category: 'sdk',
        icon: '☕',
        price: 159,
        description: 'Enterprise-grade Java SDK with Spring Boot integration and reactive programming support.',
        features: ['Spring Boot Integration', 'Reactive Support', 'Connection Pooling', 'JUnit Tests', 'Maven & Gradle', 'Enterprise Features'],
        badge: null,
        rating: 4.8,
        reviews: 145,
        downloads: 8000
    },
    {
        id: 7,
        name: 'Go SDK Lightning',
        category: 'sdk',
        icon: '🚀',
        price: 139,
        description: 'High-performance Go SDK optimized for concurrent operations and microservices.',
        features: ['Goroutine Support', 'Context Management', 'HTTP/2', 'Middleware', 'Testing Helpers', 'Docker Ready'],
        badge: null,
        rating: 4.9,
        reviews: 178,
        downloads: 11000
    },
    {
        id: 8,
        name: 'Ruby SDK Elegant',
        category: 'sdk',
        icon: '💎',
        price: 135,
        description: 'Beautiful Ruby SDK following Rails conventions with ActiveRecord-style syntax.',
        features: ['Rails Integration', 'ActiveRecord Style', 'RSpec Tests', 'Gem Package', 'Auto Configuration', 'Dev Tools'],
        badge: null,
        rating: 4.7,
        reviews: 98,
        downloads: 6000
    },
    {
        id: 9,
        name: 'PHP SDK Modern',
        category: 'sdk',
        icon: '🐘',
        price: 125,
        description: 'Modern PHP SDK with PSR standards, Composer support, and Laravel integration.',
        features: ['PSR Standards', 'Composer Package', 'Laravel Support', 'PHPUnit Tests', 'Auto-loading', 'Middleware'],
        badge: null,
        rating: 4.6,
        reviews: 134,
        downloads: 9000
    },
    {
        id: 10,
        name: 'WebSocket API Real-time',
        category: 'api',
        icon: '📡',
        price: 149,
        description: 'Real-time WebSocket API for live data streaming and bidirectional communication.',
        features: ['Bidirectional Communication', 'Auto Reconnection', 'Event Broadcasting', 'Room Management', 'Scalability', 'Low Latency'],
        badge: 'featured',
        rating: 4.9,
        reviews: 201,
        downloads: 14000
    },
    {
        id: 11,
        name: 'Authentication API',
        category: 'api',
        icon: '🔐',
        price: 89,
        description: 'Complete authentication solution with OAuth2, JWT, and social login support.',
        features: ['OAuth2 Support', 'JWT Tokens', 'Social Login', '2FA', 'Session Management', 'Role-based Access'],
        badge: 'bestseller',
        rating: 4.8,
        reviews: 312,
        downloads: 18000
    },
    {
        id: 12,
        name: 'Vue.js Components Pro',
        category: 'library',
        icon: '🔷',
        price: 75,
        description: 'Vue 3 components library with Composition API and full TypeScript support.',
        features: ['Vue 3 Ready', 'Composition API', 'TypeScript', 'Responsive', 'Accessibility', 'Documentation'],
        badge: null,
        rating: 4.7,
        reviews: 89,
        downloads: 4500
    },
    {
        id: 13,
        name: 'Mobile SDK Flutter',
        category: 'sdk',
        icon: '📱',
        price: 179,
        description: 'Cross-platform Flutter SDK for iOS and Android with native performance.',
        features: ['iOS & Android', 'Native Performance', 'Hot Reload', 'Widget Library', 'State Management', 'Testing Tools'],
        badge: 'new',
        rating: 4.8,
        reviews: 156,
        downloads: 7000
    },
    {
        id: 14,
        name: 'Swift SDK Native',
        category: 'sdk',
        icon: '🍎',
        price: 165,
        description: 'Native iOS SDK built with SwiftUI and Combine for modern app development.',
        features: ['SwiftUI Support', 'Combine Framework', 'Async/Await', 'TestFlight Ready', 'CocoaPods', 'SPM Support'],
        badge: null,
        rating: 4.9,
        reviews: 123,
        downloads: 6500
    },
    {
        id: 15,
        name: 'Kotlin SDK Android',
        category: 'sdk',
        icon: '🤖',
        price: 155,
        description: 'Modern Android SDK using Kotlin coroutines and Jetpack Compose.',
        features: ['Kotlin Coroutines', 'Jetpack Compose', 'Room Database', 'ViewModel', 'LiveData', 'Unit Tests'],
        badge: null,
        rating: 4.8,
        reviews: 167,
        downloads: 8500
    },
    {
        id: 16,
        name: 'Rust SDK Performance',
        category: 'sdk',
        icon: '🦀',
        price: 189,
        description: 'Ultra-fast Rust SDK with zero-cost abstractions and memory safety.',
        features: ['Zero-cost Abstractions', 'Memory Safety', 'Async Runtime', 'WASM Support', 'Benchmarks', 'Cargo Package'],
        badge: 'new',
        rating: 4.9,
        reviews: 78,
        downloads: 3500
    },
    {
        id: 17,
        name: 'Payment API Gateway',
        category: 'api',
        icon: '💳',
        price: 199,
        description: 'Comprehensive payment gateway with support for major payment providers.',
        features: ['Multiple Providers', 'Subscription Billing', 'Invoicing', 'Refunds', 'Webhooks', 'PCI Compliance'],
        badge: 'featured',
        rating: 4.9,
        reviews: 289,
        downloads: 16000
    },
    {
        id: 18,
        name: 'Email API Service',
        category: 'api',
        icon: '📧',
        price: 69,
        description: 'Transactional and marketing email API with templates and analytics.',
        features: ['Template Engine', 'SMTP & API', 'Analytics', 'A/B Testing', 'Scheduling', 'Deliverability'],
        badge: 'bestseller',
        rating: 4.7,
        reviews: 401,
        downloads: 22000
    },
    {
        id: 19,
        name: 'Angular Components Suite',
        category: 'library',
        icon: '🅰️',
        price: 85,
        description: 'Enterprise Angular components with Material Design and accessibility.',
        features: ['Material Design', 'Accessibility', 'Reactive Forms', 'Lazy Loading', 'AOT Compilation', 'i18n Support'],
        badge: null,
        rating: 4.6,
        reviews: 112,
        downloads: 5500
    },
    {
        id: 20,
        name: 'Storage API Cloud',
        category: 'api',
        icon: '☁️',
        price: 119,
        description: 'Cloud storage API with CDN, image processing, and file management.',
        features: ['CDN Integration', 'Image Processing', 'File Versioning', 'Access Control', 'Backup', 'Analytics'],
        badge: null,
        rating: 4.8,
        reviews: 234,
        downloads: 13000
    },
    {
        id: 21,
        name: 'Analytics API Premium',
        category: 'api',
        icon: '📊',
        price: 159,
        description: 'Advanced analytics API with real-time insights and custom dashboards.',
        features: ['Real-time Analytics', 'Custom Dashboards', 'Event Tracking', 'Funnel Analysis', 'Cohort Reports', 'Export Tools'],
        badge: 'featured',
        rating: 4.9,
        reviews: 178,
        downloads: 10000
    },
    {
        id: 22,
        name: 'Machine Learning API',
        category: 'api',
        icon: '🤖',
        price: 249,
        description: 'Pre-trained ML models API for image recognition, NLP, and predictions.',
        features: ['Image Recognition', 'NLP Processing', 'Sentiment Analysis', 'Predictions', 'Model Training', 'GPU Acceleration'],
        badge: 'new',
        rating: 4.8,
        reviews: 93,
        downloads: 4000
    },
    {
        id: 23,
        name: 'Database API Multi-DB',
        category: 'api',
        icon: '🗄️',
        price: 139,
        description: 'Universal database API supporting SQL, NoSQL, and graph databases.',
        features: ['Multi-DB Support', 'Query Builder', 'Migrations', 'Transactions', 'Connection Pool', 'Replication'],
        badge: null,
        rating: 4.7,
        reviews: 167,
        downloads: 9500
    },
    {
        id: 24,
        name: 'CLI Tools Package',
        category: 'library',
        icon: '⌨️',
        price: 59,
        description: 'Command-line tools and utilities for developers using ParseForge.',
        features: ['Code Generators', 'Migration Tools', 'Testing Utilities', 'Deployment Scripts', 'Config Management', 'Plugins'],
        badge: null,
        rating: 4.6,
        reviews: 145,
        downloads: 7500
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('parseforge_cart')) || [];

// Current filters
let currentFilters = {
    category: 'all',
    priceRange: 'all',
    search: '',
    sortBy: 'featured'
};

let currentPage = 1;
const itemsPerPage = 12;

// ========================================
// Tax Rates by Country/State
// ========================================
const taxRates = {
    US: {
        label: 'State',
        zipLabel: 'ZIP Code',
        states: {
            'AL': { name: 'Alabama', rate: 0.04 },
            'AK': { name: 'Alaska', rate: 0.00 },
            'AZ': { name: 'Arizona', rate: 0.056 },
            'AR': { name: 'Arkansas', rate: 0.065 },
            'CA': { name: 'California', rate: 0.0725 },
            'CO': { name: 'Colorado', rate: 0.029 },
            'CT': { name: 'Connecticut', rate: 0.0635 },
            'DE': { name: 'Delaware', rate: 0.00 },
            'FL': { name: 'Florida', rate: 0.06 },
            'GA': { name: 'Georgia', rate: 0.04 },
            'HI': { name: 'Hawaii', rate: 0.04 },
            'ID': { name: 'Idaho', rate: 0.06 },
            'IL': { name: 'Illinois', rate: 0.0625 },
            'IN': { name: 'Indiana', rate: 0.07 },
            'IA': { name: 'Iowa', rate: 0.06 },
            'KS': { name: 'Kansas', rate: 0.065 },
            'KY': { name: 'Kentucky', rate: 0.06 },
            'LA': { name: 'Louisiana', rate: 0.0445 },
            'ME': { name: 'Maine', rate: 0.055 },
            'MD': { name: 'Maryland', rate: 0.06 },
            'MA': { name: 'Massachusetts', rate: 0.0625 },
            'MI': { name: 'Michigan', rate: 0.06 },
            'MN': { name: 'Minnesota', rate: 0.06875 },
            'MS': { name: 'Mississippi', rate: 0.07 },
            'MO': { name: 'Missouri', rate: 0.04225 },
            'MT': { name: 'Montana', rate: 0.00 },
            'NE': { name: 'Nebraska', rate: 0.055 },
            'NV': { name: 'Nevada', rate: 0.0685 },
            'NH': { name: 'New Hampshire', rate: 0.00 },
            'NJ': { name: 'New Jersey', rate: 0.06625 },
            'NM': { name: 'New Mexico', rate: 0.05125 },
            'NY': { name: 'New York', rate: 0.04 },
            'NC': { name: 'North Carolina', rate: 0.0475 },
            'ND': { name: 'North Dakota', rate: 0.05 },
            'OH': { name: 'Ohio', rate: 0.0575 },
            'OK': { name: 'Oklahoma', rate: 0.045 },
            'OR': { name: 'Oregon', rate: 0.00 },
            'PA': { name: 'Pennsylvania', rate: 0.06 },
            'RI': { name: 'Rhode Island', rate: 0.07 },
            'SC': { name: 'South Carolina', rate: 0.06 },
            'SD': { name: 'South Dakota', rate: 0.045 },
            'TN': { name: 'Tennessee', rate: 0.07 },
            'TX': { name: 'Texas', rate: 0.0625 },
            'UT': { name: 'Utah', rate: 0.0485 },
            'VT': { name: 'Vermont', rate: 0.06 },
            'VA': { name: 'Virginia', rate: 0.053 },
            'WA': { name: 'Washington', rate: 0.065 },
            'WV': { name: 'West Virginia', rate: 0.06 },
            'WI': { name: 'Wisconsin', rate: 0.05 },
            'WY': { name: 'Wyoming', rate: 0.04 },
            'DC': { name: 'District of Columbia', rate: 0.06 }
        }
    },
    CA: {
        label: 'Province',
        zipLabel: 'Postal Code',
        states: {
            'AB': { name: 'Alberta', rate: 0.05 },
            'BC': { name: 'British Columbia', rate: 0.12 },
            'MB': { name: 'Manitoba', rate: 0.12 },
            'NB': { name: 'New Brunswick', rate: 0.15 },
            'NL': { name: 'Newfoundland and Labrador', rate: 0.15 },
            'NT': { name: 'Northwest Territories', rate: 0.05 },
            'NS': { name: 'Nova Scotia', rate: 0.15 },
            'NU': { name: 'Nunavut', rate: 0.05 },
            'ON': { name: 'Ontario', rate: 0.13 },
            'PE': { name: 'Prince Edward Island', rate: 0.15 },
            'QC': { name: 'Quebec', rate: 0.14975 },
            'SK': { name: 'Saskatchewan', rate: 0.11 },
            'YT': { name: 'Yukon', rate: 0.05 }
        }
    },
    UK: {
        label: 'Region',
        zipLabel: 'Postcode',
        defaultRate: 0.20 // 20% VAT
    },
    AU: {
        label: 'State',
        zipLabel: 'Postcode',
        defaultRate: 0.10 // 10% GST
    },
    DE: {
        label: 'State',
        zipLabel: 'Postcode',
        defaultRate: 0.19 // 19% VAT
    },
    FR: {
        label: 'Region',
        zipLabel: 'Postal Code',
        defaultRate: 0.20 // 20% VAT
    },
    IN: {
        label: 'State',
        zipLabel: 'PIN Code',
        states: {
            'AN': { name: 'Andaman and Nicobar', rate: 0.18 },
            'AP': { name: 'Andhra Pradesh', rate: 0.18 },
            'AR': { name: 'Arunachal Pradesh', rate: 0.18 },
            'AS': { name: 'Assam', rate: 0.18 },
            'BR': { name: 'Bihar', rate: 0.18 },
            'CG': { name: 'Chhattisgarh', rate: 0.18 },
            'DL': { name: 'Delhi', rate: 0.18 },
            'GA': { name: 'Goa', rate: 0.18 },
            'GJ': { name: 'Gujarat', rate: 0.18 },
            'HR': { name: 'Haryana', rate: 0.18 },
            'HP': { name: 'Himachal Pradesh', rate: 0.18 },
            'JK': { name: 'Jammu and Kashmir', rate: 0.18 },
            'JH': { name: 'Jharkhand', rate: 0.18 },
            'KA': { name: 'Karnataka', rate: 0.18 },
            'KL': { name: 'Kerala', rate: 0.18 },
            'MP': { name: 'Madhya Pradesh', rate: 0.18 },
            'MH': { name: 'Maharashtra', rate: 0.18 },
            'MN': { name: 'Manipur', rate: 0.18 },
            'ML': { name: 'Meghalaya', rate: 0.18 },
            'MZ': { name: 'Mizoram', rate: 0.18 },
            'NL': { name: 'Nagaland', rate: 0.18 },
            'OR': { name: 'Odisha', rate: 0.18 },
            'PY': { name: 'Puducherry', rate: 0.18 },
            'PB': { name: 'Punjab', rate: 0.18 },
            'RJ': { name: 'Rajasthan', rate: 0.18 },
            'SK': { name: 'Sikkim', rate: 0.18 },
            'TN': { name: 'Tamil Nadu', rate: 0.18 },
            'TS': { name: 'Telangana', rate: 0.18 },
            'TR': { name: 'Tripura', rate: 0.18 },
            'UP': { name: 'Uttar Pradesh', rate: 0.18 },
            'UK': { name: 'Uttarakhand', rate: 0.18 },
            'WB': { name: 'West Bengal', rate: 0.18 }
        }
    },
    // Default rates for other countries
    DEFAULT: {
        BR: 0.17, // Brazil
        MX: 0.16, // Mexico
        JP: 0.10, // Japan
        SG: 0.08, // Singapore
        AE: 0.05, // UAE
        NL: 0.21, // Netherlands
        SE: 0.25, // Sweden
        OTHER: 0.10
    }
};

// ========================================
// Initialize Marketplace
// ========================================
function initializeMarketplace() {
    console.log('=== MARKETPLACE INITIALIZATION ===');
    console.log('Products count:', products.length);
    console.log('First product:', products[0]);
    const gridElement = document.getElementById('productsGrid');
    console.log('Products grid element:', gridElement);
    console.log('Grid element exists:', !!gridElement);
    
    if (!gridElement) {
        console.error('CRITICAL: productsGrid element not found in DOM!');
        console.log('Available elements with id:', Array.from(document.querySelectorAll('[id]')).map(el => el.id));
        return;
    }
    
    renderProducts();
    updateCartUI();
    setupEventListeners();
    updateProductCount();
    console.log('=== MARKETPLACE INITIALIZED ===');
}

// Make products array accessible for debugging
window.marketplaceDebug = {
    products: products,
    renderProducts: () => renderProducts(),
    currentFilters: currentFilters
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    console.log('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', initializeMarketplace);
} else {
    // DOM already loaded
    console.log('DOM already loaded, initializing immediately...');
    initializeMarketplace();
}

function setupEventListeners() {
    document.getElementById('searchProducts').addEventListener('input', handleSearch);
    document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilter);
    document.getElementById('priceFilter').addEventListener('change', handlePriceFilter);
    document.getElementById('sortBy').addEventListener('change', handleSort);
    
    // Country change - show/hide state and zip fields
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
        countrySelect.addEventListener('change', handleCountryChange);
    }
    
    // State/Zip change - recalculate tax
    const stateSelect = document.getElementById('stateSelect');
    const zipInput = document.getElementById('zipCode');
    if (stateSelect) {
        stateSelect.addEventListener('change', recalculateTax);
    }
    if (zipInput) {
        zipInput.addEventListener('input', recalculateTax);
    }
    
    // Checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
    
    // Payment method change
    const paymentInputs = document.querySelectorAll('input[name="payment"]');
    paymentInputs.forEach(input => {
        input.addEventListener('change', handlePaymentChange);
    });
}

// ========================================
// Country/State/Tax Handling
// ========================================
function handleCountryChange(e) {
    const country = e.target.value;
    const stateGroup = document.getElementById('stateGroup');
    const zipGroup = document.getElementById('zipGroup');
    const stateLabel = document.getElementById('stateLabel');
    const zipLabel = document.getElementById('zipLabel');
    const stateSelect = document.getElementById('stateSelect');
    const zipInput = document.getElementById('zipCode');
    
    // Reset fields
    stateSelect.innerHTML = '<option value="">Select state</option>';
    zipInput.value = '';
    
    if (!country) {
        stateGroup.style.display = 'none';
        zipGroup.style.display = 'none';
        stateSelect.removeAttribute('required');
        zipInput.removeAttribute('required');
        recalculateTax();
        return;
    }
    
    const countryData = taxRates[country];
    
    if (countryData && countryData.states) {
        // Show state/province field with options
        stateGroup.style.display = 'block';
        zipGroup.style.display = 'block';
        stateLabel.textContent = countryData.label;
        stateLabel.classList.add('required');
        zipLabel.textContent = countryData.zipLabel;
        zipLabel.classList.add('required');
        stateSelect.setAttribute('required', 'required');
        zipInput.setAttribute('required', 'required');
        
        // Populate states
        Object.keys(countryData.states).forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = countryData.states[code].name;
            stateSelect.appendChild(option);
        });
    } else if (countryData && countryData.defaultRate) {
        // Show zip only for countries with default rates
        stateGroup.style.display = 'none';
        zipGroup.style.display = 'block';
        stateSelect.removeAttribute('required');
        zipLabel.textContent = countryData.zipLabel;
        zipLabel.classList.add('required');
        zipInput.setAttribute('required', 'required');
    } else {
        // Show zip only for other countries
        stateGroup.style.display = 'none';
        zipGroup.style.display = 'block';
        stateSelect.removeAttribute('required');
        zipLabel.textContent = 'Postal Code';
        zipLabel.classList.add('required');
        zipInput.setAttribute('required', 'required');
    }
    
    recalculateTax();
}

function getTaxRate() {
    const country = document.getElementById('countrySelect')?.value;
    const state = document.getElementById('stateSelect')?.value;
    
    // Only apply tax if we have both country and state/province
    if (!country || !state) return 0;
    
    const countryData = taxRates[country];
    
    if (countryData && countryData.states && state) {
        // Get state-specific rate
        return countryData.states[state]?.rate || 0;
    } else if (countryData && countryData.defaultRate) {
        // Get country default rate if state not in list
        return countryData.defaultRate;
    } else if (taxRates.DEFAULT[country]) {
        // Get from default rates
        return taxRates.DEFAULT[country];
    }
    
    return 0; // No tax if location unknown
}

function recalculateTax() {
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderTax = document.getElementById('orderTax');
    const orderTotal = document.getElementById('orderTotal');
    const taxLabel = document.getElementById('taxLabel');
    const taxRow = document.getElementById('taxRow');
    
    if (!orderSubtotal) return; // Not in checkout modal yet
    
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const taxRate = getTaxRate();
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    const country = document.getElementById('countrySelect')?.value;
    const state = document.getElementById('stateSelect')?.value;
    
    // Show/hide tax row based on whether tax applies
    if (taxRow) {
        if (taxRate > 0 && state) {
            taxRow.style.display = 'flex';
            orderTax.textContent = `$${tax.toFixed(2)}`;
            
            // Update tax rate display
            let taxLabelText = `Tax (${(taxRate * 100).toFixed(2)}%)`;
            
            if (country && taxRates[country]?.states && state) {
                const stateName = taxRates[country].states[state]?.name;
                taxLabelText += ` - ${stateName}`;
            } else if (country) {
                const countryOption = document.querySelector(`#countrySelect option[value="${country}"]`);
                if (countryOption) {
                    // Remove emoji flags (regional indicator symbols) from country name
                    const countryName = countryOption.textContent.replace(/[\u{1F1E6}-\u{1F1FF}]/gu, '').trim();
                    taxLabelText += ` - ${countryName}`;
                }
            }
            
            if (taxLabel) {
                taxLabel.textContent = taxLabelText + ':';
            }
        } else {
            taxRow.style.display = 'none';
        }
    }
    
    orderTotal.textContent = `$${total.toFixed(2)}`;
}

// ========================================
// Product Rendering
// ========================================
function renderProducts() {
    let filteredProducts = filterProducts();
    filteredProducts = sortProducts(filteredProducts);
    
    console.log('Rendering products. Filtered count:', filteredProducts.length);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    const grid = document.getElementById('productsGrid');
    if (!grid) {
        console.error('Products grid element not found!');
        return;
    }
    
    grid.innerHTML = paginatedProducts.map(product => createProductCard(product)).join('');
    
    renderPagination(filteredProducts.length);
}

function createProductCard(product) {
    const badgeHTML = product.badge ? `<div class="product-badge ${product.badge}">${product.badge}</div>` : '';
    const isInCart = cart.some(item => item.id === product.id);
    
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            ${badgeHTML}
            <div class="product-icon">${product.icon}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <ul class="product-features">
                ${product.features.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="product-footer">
                <div>
                    <div class="product-price">$${product.price}</div>
                    <span class="product-price-label">One-time payment</span>
                </div>
                <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" 
                        onclick="event.stopPropagation(); ${isInCart ? 'removeFromCart' : 'addToCart'}(${product.id})">
                    ${isInCart ? '✓ Added' : '+ Add'}
                </button>
            </div>
        </div>
    `;
}

// ========================================
// Filtering & Sorting
// ========================================
function filterProducts() {
    return products.filter(product => {
        // Category filter
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }
        
        // Price filter
        if (currentFilters.priceRange !== 'all') {
            const [min, max] = currentFilters.priceRange.split('-').map(p => parseInt(p) || Infinity);
            if (product.price < min || product.price > (max || Infinity)) {
                return false;
            }
        }
        
        // Search filter
        if (currentFilters.search) {
            const searchLower = currentFilters.search.toLowerCase();
            return product.name.toLowerCase().includes(searchLower) ||
                   product.description.toLowerCase().includes(searchLower) ||
                   product.features.some(f => f.toLowerCase().includes(searchLower));
        }
        
        return true;
    });
}

function sortProducts(products) {
    const sorted = [...products];
    
    switch (currentFilters.sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'popular':
            return sorted.sort((a, b) => b.downloads - a.downloads);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        default: // featured
            return sorted.sort((a, b) => {
                if (a.badge === 'featured') return -1;
                if (b.badge === 'featured') return 1;
                if (a.badge === 'bestseller') return -1;
                if (b.badge === 'bestseller') return 1;
                return 0;
            });
    }
}

function handleSearch(e) {
    currentFilters.search = e.target.value;
    currentPage = 1;
    renderProducts();
}

function handleCategoryFilter(e) {
    currentFilters.category = e.target.value;
    currentPage = 1;
    renderProducts();
}

function handlePriceFilter(e) {
    currentFilters.priceRange = e.target.value;
    currentPage = 1;
    renderProducts();
}

function handleSort(e) {
    currentFilters.sortBy = e.target.value;
    renderProducts();
}

// ========================================
// Pagination
// ========================================
function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    if (currentPage > 1) {
        html += `<button onclick="changePage(${currentPage - 1})">Previous</button>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<button disabled>...</button>`;
        }
    }
    
    if (currentPage < totalPages) {
        html += `<button onclick="changePage(${currentPage + 1})">Next</button>`;
    }
    
    pagination.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Shopping Cart
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (!cart.some(item => item.id === productId)) {
        cart.push(product);
        saveCart();
        updateCartUI();
        renderProducts(); // Re-render to update button states
        showNotification('Added to cart!', 'success');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    renderProducts(); // Re-render to update button states
    showNotification('Removed from cart', 'info');
}

function saveCart() {
    localStorage.setItem('parseforge_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <span style="font-size: 3rem;">🛒</span>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-icon">${item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-category">${item.category}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const backdrop = document.getElementById('cartBackdrop');
    sidebar.classList.toggle('active');
    backdrop.classList.toggle('active');
}

// ========================================
// Product Modal
// ========================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const isInCart = cart.some(item => item.id === productId);
    const modal = document.getElementById('productModal');
    const details = document.getElementById('productDetails');
    
    details.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-left">
                <div class="product-detail-icon">${product.icon}</div>
                <div class="product-screenshots">
                    <div class="screenshot">Code Example</div>
                    <div class="screenshot">Documentation</div>
                    <div class="screenshot">API Reference</div>
                    <div class="screenshot">Usage Guide</div>
                </div>
            </div>
            <div class="product-detail-right">
                <div class="product-category">${product.category}</div>
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-count">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-detail-price">$${product.price}</div>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">One-time payment • Lifetime access</p>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-detail-features">
                    <h3>What's Included:</h3>
                    <ul>
                        ${product.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                <button class="btn-primary" style="width: 100%; padding: 1.25rem; font-size: 1.125rem;" 
                        onclick="${isInCart ? 'removeFromCart' : 'addToCart'}(${product.id}); closeProductModal();">
                    ${isInCart ? '✓ Remove from Cart' : '🛒 Add to Cart - $' + product.price}
                </button>
                
                <p style="text-align: center; color: var(--text-muted); font-size: 0.875rem; margin-top: 1rem;">
                    Instant download • 30-day money-back guarantee
                </p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ========================================
// Checkout
// ========================================
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const orderItems = document.getElementById('orderItems');
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderTax = document.getElementById('orderTax');
    const orderTotal = document.getElementById('orderTotal');
    const taxLabel = document.getElementById('taxLabel');
    const taxRow = document.getElementById('taxRow');
    
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const taxRate = getTaxRate();
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span class="order-item-name">${item.icon} ${item.name}</span>
            <span class="order-item-price">$${item.price}</span>
        </div>
    `).join('');
    
    orderSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    orderTotal.textContent = `$${total.toFixed(2)}`;
    
    // Initially hide tax row until state/province is selected
    if (taxRow) {
        if (taxRate > 0) {
            taxRow.style.display = 'flex';
            orderTax.textContent = `$${tax.toFixed(2)}`;
            if (taxLabel) {
                taxLabel.textContent = `Tax (${(taxRate * 100).toFixed(2)}%):`;
            }
        } else {
            taxRow.style.display = 'none';
        }
    }
    
    modal.classList.add('active');
    toggleCart(); // Close cart sidebar
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function handlePaymentChange(e) {
    const cardDetails = document.getElementById('cardDetails');
    // Show card details only for PayPal Credit Card
    cardDetails.style.display = e.target.value === 'paypal-card' ? 'block' : 'none';
}

function handleCheckout(e) {
    e.preventDefault();
    
    // Simulate payment processing
    showNotification('Processing payment...', 'info');
    
    setTimeout(() => {
        showNotification('Purchase successful! Check your email for download links.', 'success');
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();
        closeCheckoutModal();
        renderProducts();
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    }, 2000);
}

// ========================================
// Utility Functions
// ========================================
function updateProductCount() {
    const totalProducts = document.getElementById('totalProducts');
    if (totalProducts) {
        totalProducts.textContent = products.length;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(29, 233, 182, 0.2))' : 
                     type === 'error' ? 'linear-gradient(135deg, rgba(255, 51, 102, 0.2), rgba(255, 0, 85, 0.2))' :
                     'rgba(0, 217, 255, 0.2)'};
        border: 1px solid ${type === 'success' ? 'var(--success)' : 
                           type === 'error' ? 'var(--danger)' : 
                           'var(--neon-blue)'};
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        backdrop-filter: blur(20px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
