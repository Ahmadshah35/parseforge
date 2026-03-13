// Dashboard functionality - Fully Functional Version
const API_BASE = window.location.origin;

// Global chart instances
let charts = {
    usage: null,
    response: null,
    status: null
};

// Global state
let dashboardData = {
    stats: {},
    apiKeys: [],
    activity: [],
    endpoints: []
};

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', async () => {
    initializeSidebar();
    await loadDashboardData();
    initializeCharts();
    initializeEventListeners();
    initializeScrollSpy();
    
    // Auto-refresh data every 30 seconds
    setInterval(refreshDashboardData, 30000);
    
    console.log('✅ Dashboard fully initialized and functional');
});

// Initialize sidebar navigation
function initializeSidebar() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Allow normal navigation for external links (like settings.html)
            if (href && !href.startsWith('#')) {
                return; // Let the browser handle it
            }
            
            // Handle hash links with smooth scrolling
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            if (href && href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Initialize scroll spy to highlight active section
function initializeScrollSpy() {
    const sections = document.querySelectorAll('.dashboard-content section[id]');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Update active menu item
                menuItems.forEach(item => {
                    const href = item.getAttribute('href');
                    if (href === `#${id}`) {
                        menuItems.forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Load all dashboard data
async function loadDashboardData() {
    try {
        // Load all data in parallel
        const [stats, usage, responseTimes, statusCodes, endpoints, activity, keys] = await Promise.all([
            fetch(`${API_BASE}/api/dashboard/stats`).then(r => r.json()),
            fetch(`${API_BASE}/api/dashboard/usage?period=7`).then(r => r.json()),
            fetch(`${API_BASE}/api/dashboard/response-times`).then(r => r.json()),
            fetch(`${API_BASE}/api/dashboard/status-codes`).then(r => r.json()),
            fetch(`${API_BASE}/api/dashboard/endpoints`).then(r => r.json()),
            fetch(`${API_BASE}/api/dashboard/activity`).then(r => r.json()),
            fetch(`${API_BASE}/api/keys`).then(r => r.json())
        ]);
        
        dashboardData = {
            stats,
            usage,
            responseTimes,
            statusCodes,
            endpoints,
            activity,
            apiKeys: keys
        };
        
        updateUI();
        return dashboardData;
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Failed to load dashboard data', 'error');
    }
}

// Refresh dashboard data
async function refreshDashboardData() {
    await loadDashboardData();
    updateCharts();
    console.log('🔄 Dashboard data refreshed');
}

// Update all UI elements with loaded data
function updateUI() {
    updateStats();
    updateAPIKeys();
    updateActivity();
    updateEndpoints();
}

// Update statistics cards
function updateStats() {
    const { stats } = dashboardData;
    
    document.querySelector('.stat-card:nth-child(1) .stat-value').textContent = 
        stats.apiCalls?.toLocaleString() || '0';
    document.querySelector('.stat-card:nth-child(2) .stat-value').textContent = 
        stats.activeKeys || '0';
    document.querySelector('.stat-card:nth-child(3) .stat-value').textContent = 
        stats.avgResponseTime + 'ms' || '0ms';
    document.querySelector('.stat-card:nth-child(4) .stat-value').textContent = 
        stats.successRate + '%' || '0%';
}

// Update API keys list
function updateAPIKeys() {
    const keysList = document.querySelector('.keys-list');
    if (!keysList) return;
    
    keysList.innerHTML = dashboardData.apiKeys.map(key => {
        const created = new Date(key.created).toLocaleDateString('en-US', { 
            year: 'numeric', month: 'short', day: 'numeric' 
        });
        const lastUsed = key.lastUsed ? 
            getRelativeTime(new Date(key.lastUsed)) : 
            'Never used';
        
        return `
            <div class="key-item" data-key-id="${key.id}">
                <div class="key-info">
                    <div class="key-name">${key.name}</div>
                    <code class="key-value">${key.key}</code>
                    <div class="key-meta">
                        <span>Created: ${created}</span>
                        <span>Last used: ${lastUsed}</span>
                    </div>
                </div>
                <div class="key-actions">
                    <button class="btn-secondary btn-sm" onclick="copyKey(this)">Copy</button>
                    <button class="btn-danger btn-sm" onclick="revokeKey('${key.id}', this)">Revoke</button>
                </div>
            </div>
        `;
    }).join('');
}

// Update activity list
function updateActivity() {
    const activityList = document.querySelector('.activity-list');
    if (!activityList) return;
    
    activityList.innerHTML = dashboardData.activity.map(activity => {
        const isSuccess = activity.status >= 200 && activity.status < 300;
        const iconClass = isSuccess ? 'success' : 'error';
        const icon = isSuccess ? '✓' : '✗';
        const timeAgo = getRelativeTime(new Date(activity.timestamp));
        
        return `
            <div class="activity-item">
                <div class="activity-icon ${iconClass}">${icon}</div>
                <div class="activity-info">
                    <div class="activity-title">${activity.method} ${activity.path}</div>
                    <div class="activity-meta">${timeAgo} · ${activity.status} · ${activity.responseTime}ms</div>
                </div>
            </div>
        `;
    }).join('');
}

// Update top endpoints
function updateEndpoints() {
    const endpointsList = document.querySelector('.endpoints-list');
    if (!endpointsList) return;
    
    const maxCount = Math.max(...dashboardData.endpoints.map(e => e.count));
    
    endpointsList.innerHTML = dashboardData.endpoints.map(endpoint => {
        const percentage = (endpoint.count / maxCount) * 100;
        return `
            <div class="endpoint-item">
                <div class="endpoint-info">
                    <span class="endpoint-method ${endpoint.method.toLowerCase()}">${endpoint.method}</span>
                    <span class="endpoint-path">${endpoint.path}</span>
                </div>
                <div class="endpoint-stat">
                    <span class="endpoint-count">${endpoint.count.toLocaleString()}</span>
                    <div class="endpoint-bar" style="width: ${percentage}%;"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Initialize event listeners
function initializeEventListeners() {
    // Usage period selector
    const usagePeriod = document.getElementById('usagePeriod');
    if (usagePeriod) {
        usagePeriod.addEventListener('change', async (e) => {
            const period = e.target.value;
            const usage = await fetch(`${API_BASE}/api/dashboard/usage?period=${period}`).then(r => r.json());
            dashboardData.usage = usage;
            updateUsageChart();
        });
    }
}

// Initialize all charts
function initializeCharts() {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }
    
    createUsageChart();
    createResponseChart();
    createStatusChart();
}

// Create usage chart
function createUsageChart() {
    const usageCtx = document.getElementById('usageChart');
    if (!usageCtx) return;
    
    if (charts.usage) {
        charts.usage.destroy();
    }
    
    charts.usage = new Chart(usageCtx, {
        type: 'line',
        data: {
            labels: dashboardData.usage?.labels || [],
            datasets: [{
                label: 'API Calls',
                data: dashboardData.usage?.values || [],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Create response time chart
function createResponseChart() {
    const responseCtx = document.getElementById('responseChart');
    if (!responseCtx) return;
    
    if (charts.response) {
        charts.response.destroy();
    }
    
    charts.response = new Chart(responseCtx, {
        type: 'line',
        data: {
            labels: dashboardData.responseTimes?.labels || [],
            datasets: [{
                label: 'Response Time (ms)',
                data: dashboardData.responseTimes?.values || [],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + 'ms';
                        }
                    }
                }
            }
        }
    });
}

// Create status code chart
function createStatusChart() {
    const statusCtx = document.getElementById('statusChart');
    if (!statusCtx) return;
    
    if (charts.status) {
        charts.status.destroy();
    }
    
    charts.status = new Chart(statusCtx, {
        type: 'doughnut',
        data: {
            labels: dashboardData.statusCodes?.labels || [],
            datasets: [{
                data: dashboardData.statusCodes?.values || [],
                backgroundColor: [
                    '#10b981',
                    '#3b82f6',
                    '#f59e0b',
                    '#ef4444',
                    '#94a3b8'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Update charts with new data
function updateCharts() {
    updateUsageChart();
    updateResponseChart();
    updateStatusChart();
}

// Update individual charts
function updateUsageChart() {
    if (charts.usage && dashboardData.usage) {
        charts.usage.data.labels = dashboardData.usage.labels;
        charts.usage.data.datasets[0].data = dashboardData.usage.values;
        charts.usage.update();
    }
}

function updateResponseChart() {
    if (charts.response && dashboardData.responseTimes) {
        charts.response.data.labels = dashboardData.responseTimes.labels;
        charts.response.data.datasets[0].data = dashboardData.responseTimes.values;
        charts.response.update();
    }
}

function updateStatusChart() {
    if (charts.status && dashboardData.statusCodes) {
        charts.status.data.labels = dashboardData.statusCodes.labels;
        charts.status.data.datasets[0].data = dashboardData.statusCodes.values;
        charts.status.update();
    }
}

// API Key Management Functions

// Copy API key to clipboard
function copyKey(button) {
    const keyItem = button.closest('.key-item');
    const keyValue = keyItem.querySelector('.key-value').textContent;
    
    navigator.clipboard.writeText(keyValue).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        showNotification('Failed to copy key', 'error');
    });
}

// Show create key modal
function showCreateKeyModal() {
    const name = prompt('Enter API key name:');
    if (!name) return;
    
    const type = confirm('Create production key? (Cancel for test key)') ? 'production' : 'test';
    
    createAPIKey(name, type);
}

// Create new API key
async function createAPIKey(name, type) {
    try {
        const response = await fetch(`${API_BASE}/api/keys`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, type })
        });
        
        if (!response.ok) {
            throw new Error('Failed to create API key');
        }
        
        const newKey = await response.json();
        
        // Show the full key (only shown once)
        alert(`API Key Created Successfully!\n\nKey: ${newKey.fullKey}\n\n⚠️ Make sure to copy this key now. You won't be able to see it again!`);
        
        // Reload keys list
        const keys = await fetch(`${API_BASE}/api/keys`).then(r => r.json());
        dashboardData.apiKeys = keys;
        updateAPIKeys();
        updateStats();
        
        showNotification('API key created successfully', 'success');
    } catch (error) {
        console.error('Error creating API key:', error);
        showNotification('Failed to create API key', 'error');
    }
}

// Revoke API key
async function revokeKey(keyId, button) {
    if (!confirm('Are you sure you want to revoke this API key? This action cannot be undone.')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/api/keys/${keyId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Failed to revoke API key');
        }
        
        // Remove key from UI
        const keyItem = button.closest('.key-item');
        keyItem.style.opacity = '0';
        setTimeout(() => keyItem.remove(), 300);
        
        // Update data
        dashboardData.apiKeys = dashboardData.apiKeys.filter(k => k.id !== keyId);
        updateStats();
        
        showNotification('API key revoked successfully', 'success');
    } catch (error) {
        console.error('Error revoking API key:', error);
        showNotification('Failed to revoke API key', 'error');
    }
}

// Utility Functions

// Get relative time string
function getRelativeTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
