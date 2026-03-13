// ========================================
// ADMIN PANEL - JAVASCRIPT
// ========================================

const API_BASE = 'http://localhost:3000/api/admin';

// ========================================
// Navigation & Section Management
// ========================================
function initializeNavigation() {
    const menuItems = document.querySelectorAll('.admin-menu-item');
    const sections = document.querySelectorAll('.admin-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            
            // Update active menu item
            menuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');
            
            // Show selected section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
            
            // Load section data
            loadSectionData(sectionId);
        });
    });
}

function loadSectionData(sectionId) {
    switch(sectionId) {
        case 'overview':
            loadOverview();
            break;
        case 'pricing':
            loadPricing();
            break;
        case 'apis':
            loadAPIs();
            break;
        case 'users':
            loadUsers();
            break;
    }
}

// ========================================
// Overview Section
// ========================================
async function loadOverview() {
    try {
        // Load stats
        const statsResponse = await fetch(`${API_BASE}/overview`);
        const stats = await statsResponse.json();
        
        document.getElementById('totalUsers').textContent = stats.totalUsers;
        document.getElementById('activeSubscriptions').textContent = stats.activeSubscriptions;
        document.getElementById('totalAPIs').textContent = stats.totalAPIs;
        document.getElementById('monthlyRevenue').textContent = `$${stats.monthlyRevenue.toLocaleString()}`;
        
        // Load recent activities
        const activityResponse = await fetch(`${API_BASE}/recent-activities`);
        const activities = await activityResponse.json();
        
        const activityList = document.getElementById('recentActivities');
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <span class="activity-icon">📌</span>
                <div class="activity-info">
                    <p>${activity.action}</p>
                    <span class="activity-time">${formatTimeAgo(activity.time)}</span>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading overview:', error);
        showNotification('Failed to load overview data', 'error');
    }
}

// ========================================
// Pricing Management
// ========================================
async function loadPricing() {
    try {
        const response = await fetch(`${API_BASE}/pricing`);
        const plans = await response.json();
        
        const tableBody = document.getElementById('pricingTableBody');
        tableBody.innerHTML = plans.map(plan => `
            <tr>
                <td><strong>${plan.name}</strong></td>
                <td>$${plan.monthlyPrice}</td>
                <td>$${plan.yearlyPrice}</td>
                <td>${plan.features.length} features</td>
                <td>
                    <span class="status-badge ${plan.status}">${plan.status}</span>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="editPricing('${plan.id}')">Edit</button>
                        <button class="action-btn delete" onclick="deletePricing('${plan.id}')">Delete</button>
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading pricing:', error);
        showNotification('Failed to load pricing plans', 'error');
    }
}

function openPricingModal(planId = null) {
    const modal = document.getElementById('pricingModal');
    const form = document.getElementById('pricingForm');
    const title = document.getElementById('pricingModalTitle');
    
    if (planId) {
        // Edit existing plan
        title.textContent = 'Edit Pricing Plan';
        fetch(`${API_BASE}/pricing`)
            .then(res => res.json())
            .then(plans => {
                const plan = plans.find(p => p.id === planId);
                if (plan) {
                    document.getElementById('pricingId').value = plan.id;
                    document.getElementById('planName').value = plan.name;
                    document.getElementById('monthlyPrice').value = plan.monthlyPrice;
                    document.getElementById('yearlyPrice').value = plan.yearlyPrice;
                    document.getElementById('planFeatures').value = plan.features.join('\n');
                    document.getElementById('planStatus').value = plan.status;
                }
            });
    } else {
        // Add new plan
        title.textContent = 'Add Pricing Plan';
        form.reset();
    }
    
    modal.classList.add('active');
}

function closePricingModal() {
    const modal = document.getElementById('pricingModal');
    modal.classList.remove('active');
    document.getElementById('pricingForm').reset();
}

async function editPricing(planId) {
    openPricingModal(planId);
}

async function deletePricing(planId) {
    if (!confirm('Are you sure you want to delete this pricing plan?')) return;
    
    try {
        const response = await fetch(`${API_BASE}/pricing/${planId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showNotification('Pricing plan deleted successfully', 'success');
            loadPricing();
        }
    } catch (error) {
        console.error('Error deleting pricing:', error);
        showNotification('Failed to delete pricing plan', 'error');
    }
}

// Pricing Form Submit
document.getElementById('pricingForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const planId = document.getElementById('pricingId').value;
    const planData = {
        name: document.getElementById('planName').value,
        monthlyPrice: parseFloat(document.getElementById('monthlyPrice').value),
        yearlyPrice: parseFloat(document.getElementById('yearlyPrice').value),
        features: document.getElementById('planFeatures').value,
        status: document.getElementById('planStatus').value
    };
    
    try {
        const url = planId ? `${API_BASE}/pricing/${planId}` : `${API_BASE}/pricing`;
        const method = planId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(planData)
        });
        
        if (response.ok) {
            showNotification(`Pricing plan ${planId ? 'updated' : 'added'} successfully`, 'success');
            closePricingModal();
            loadPricing();
        }
    } catch (error) {
        console.error('Error saving pricing:', error);
        showNotification('Failed to save pricing plan', 'error');
    }
});

// ========================================
// APIs & SDKs Management
// ========================================
async function loadAPIs() {
    try {
        const response = await fetch(`${API_BASE}/apis`);
        const apis = await response.json();
        
        const apiGrid = document.getElementById('apiGrid');
        apiGrid.innerHTML = apis.map(api => `
            <div class="api-card">
                <div class="api-card-header">
                    <div>
                        <h3>${api.name}</h3>
                        <span class="api-version">${api.version}</span>
                    </div>
                    <span class="status-badge ${api.status}">${api.status}</span>
                </div>
                <p>${api.description}</p>
                <div class="api-card-footer">
                    <span style="color: var(--text-muted); font-size: 0.875rem;">${api.type.toUpperCase()} • ${api.language}</span>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="editAPI('${api.id}')">Edit</button>
                        <button class="action-btn delete" onclick="deleteAPI('${api.id}')">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading APIs:', error);
        showNotification('Failed to load APIs/SDKs', 'error');
    }
}

function openAPIModal(apiId = null) {
    const modal = document.getElementById('apiModal');
    const form = document.getElementById('apiForm');
    const title = document.getElementById('apiModalTitle');
    
    if (apiId) {
        title.textContent = 'Edit API/SDK';
        fetch(`${API_BASE}/apis`)
            .then(res => res.json())
            .then(apis => {
                const api = apis.find(a => a.id === apiId);
                if (api) {
                    document.getElementById('apiId').value = api.id;
                    document.getElementById('apiName').value = api.name;
                    document.getElementById('apiType').value = api.type;
                    document.getElementById('apiLanguage').value = api.language;
                    document.getElementById('apiVersion').value = api.version;
                    document.getElementById('apiDescription').value = api.description;
                    document.getElementById('apiDocumentation').value = api.documentation;
                    document.getElementById('apiStatus').value = api.status;
                }
            });
    } else {
        title.textContent = 'Add New API/SDK';
        form.reset();
    }
    
    modal.classList.add('active');
}

function closeAPIModal() {
    const modal = document.getElementById('apiModal');
    modal.classList.remove('active');
    document.getElementById('apiForm').reset();
}

async function editAPI(apiId) {
    openAPIModal(apiId);
}

async function deleteAPI(apiId) {
    if (!confirm('Are you sure you want to delete this API/SDK?')) return;
    
    try {
        const response = await fetch(`${API_BASE}/apis/${apiId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showNotification('API/SDK deleted successfully', 'success');
            loadAPIs();
        }
    } catch (error) {
        console.error('Error deleting API:', error);
        showNotification('Failed to delete API/SDK', 'error');
    }
}

// API Form Submit
document.getElementById('apiForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const apiId = document.getElementById('apiId').value;
    const apiData = {
        name: document.getElementById('apiName').value,
        type: document.getElementById('apiType').value,
        language: document.getElementById('apiLanguage').value,
        version: document.getElementById('apiVersion').value,
        description: document.getElementById('apiDescription').value,
        documentation: document.getElementById('apiDocumentation').value,
        status: document.getElementById('apiStatus').value
    };
    
    try {
        const url = apiId ? `${API_BASE}/apis/${apiId}` : `${API_BASE}/apis`;
        const method = apiId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(apiData)
        });
        
        if (response.ok) {
            showNotification(`API/SDK ${apiId ? 'updated' : 'added'} successfully`, 'success');
            closeAPIModal();
            loadAPIs();
        }
    } catch (error) {
        console.error('Error saving API:', error);
        showNotification('Failed to save API/SDK', 'error');
    }
});

// ========================================
// Content Management
// ========================================
function editContent(contentType) {
    const editor = document.getElementById('contentEditor');
    const title = document.getElementById('contentEditorTitle');
    
    fetch(`${API_BASE}/content/${contentType}`)
        .then(res => res.json())
        .then(content => {
            document.getElementById('contentType').value = contentType;
            document.getElementById('contentTitle').value = content.title;
            document.getElementById('contentBody').value = content.body;
            title.textContent = `Edit ${contentType.charAt(0).toUpperCase() + contentType.slice(1)} Content`;
            editor.style.display = 'block';
            editor.scrollIntoView({ behavior: 'smooth' });
        });
}

function closeContentEditor() {
    document.getElementById('contentEditor').style.display = 'none';
    document.getElementById('contentForm').reset();
}

// Content Form Submit
document.getElementById('contentForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const contentType = document.getElementById('contentType').value;
    const contentData = {
        title: document.getElementById('contentTitle').value,
        body: document.getElementById('contentBody').value
    };
    
    try {
        const response = await fetch(`${API_BASE}/content/${contentType}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contentData)
        });
        
        if (response.ok) {
            showNotification('Content updated successfully', 'success');
            closeContentEditor();
        }
    } catch (error) {
        console.error('Error saving content:', error);
        showNotification('Failed to save content', 'error');
    }
});

// ========================================
// Branding Management
// ========================================
async function updateColorScheme() {
    const brandingData = {
        primaryColor: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        accentColor: document.getElementById('accentColor').value
    };
    
    try {
        const response = await fetch(`${API_BASE}/branding`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(brandingData)
        });
        
        if (response.ok) {
            showNotification('Color scheme updated successfully', 'success');
        }
    } catch (error) {
        console.error('Error updating colors:', error);
        showNotification('Failed to update color scheme', 'error');
    }
}

// Logo Form Submit
document.getElementById('logoForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const brandingData = {
        logoType: document.getElementById('logoType').value,
        logoCode: document.getElementById('logoCode').value
    };
    
    try {
        const response = await fetch(`${API_BASE}/branding`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(brandingData)
        });
        
        if (response.ok) {
            showNotification('Logo updated successfully', 'success');
        }
    } catch (error) {
        console.error('Error updating logo:', error);
        showNotification('Failed to update logo', 'error');
    }
});

// ========================================
// Users Management
// ========================================
async function loadUsers(page = 1, search = '') {
    try {
        const response = await fetch(`${API_BASE}/users?page=${page}&limit=10&search=${search}`);
        const data = await response.json();
        
        const tableBody = document.getElementById('usersTableBody');
        tableBody.innerHTML = data.users.map(user => `
            <tr>
                <td><code style="color: var(--neon-green);">${user.id}</code></td>
                <td><strong>${user.name}</strong></td>
                <td>${user.email}</td>
                <td><span style="text-transform: capitalize;">${user.plan}</span></td>
                <td>
                    <span class="status-badge ${user.status}">${user.status}</span>
                </td>
                <td>${formatDate(user.joined)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="editUser('${user.id}')">Edit</button>
                        <button class="action-btn delete" onclick="deleteUser('${user.id}')">Delete</button>
                    </div>
                </td>
            </tr>
        `).join('');
        
        // Update pagination
        renderPagination(data.page, data.totalPages);
    } catch (error) {
        console.error('Error loading users:', error);
        showNotification('Failed to load users', 'error');
    }
}

function renderPagination(currentPage, totalPages) {
    const pagination = document.getElementById('usersPagination');
    let html = '';
    
    if (currentPage > 1) {
        html += `<button onclick="loadUsers(${currentPage - 1})">Previous</button>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        html += `<button class="${activeClass}" onclick="loadUsers(${i})">${i}</button>`;
    }
    
    if (currentPage < totalPages) {
        html += `<button onclick="loadUsers(${currentPage + 1})">Next</button>`;
    }
    
    pagination.innerHTML = html;
}

function openUserModal(userId = null) {
    const modal = document.getElementById('userModal');
    const form = document.getElementById('userForm');
    const title = document.getElementById('userModalTitle');
    
    if (userId) {
        title.textContent = 'Edit User';
        fetch(`${API_BASE}/users`)
            .then(res => res.json())
            .then(data => {
                const user = data.users.find(u => u.id === userId);
                if (user) {
                    document.getElementById('userId').value = user.id;
                    document.getElementById('userName').value = user.name;
                    document.getElementById('userEmail').value = user.email;
                    document.getElementById('userPlan').value = user.plan;
                    document.getElementById('userStatus').value = user.status;
                }
            });
    } else {
        title.textContent = 'Add User';
        form.reset();
    }
    
    modal.classList.add('active');
}

function closeUserModal() {
    const modal = document.getElementById('userModal');
    modal.classList.remove('active');
    document.getElementById('userForm').reset();
}

async function editUser(userId) {
    openUserModal(userId);
}

async function deleteUser(userId) {
    if (!confirm('Are you sure you want to delete this user?')) return;
    
    try {
        const response = await fetch(`${API_BASE}/users/${userId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showNotification('User deleted successfully', 'success');
            loadUsers();
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        showNotification('Failed to delete user', 'error');
    }
}

// User Form Submit
document.getElementById('userForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const userData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        plan: document.getElementById('userPlan').value,
        status: document.getElementById('userStatus').value
    };
    
    try {
        const url = userId ? `${API_BASE}/users/${userId}` : `${API_BASE}/users`;
        const method = userId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        
        if (response.ok) {
            showNotification(`User ${userId ? 'updated' : 'added'} successfully`, 'success');
            closeUserModal();
            loadUsers();
        }
    } catch (error) {
        console.error('Error saving user:', error);
        showNotification('Failed to save user', 'error');
    }
});

// User Search
document.getElementById('userSearch')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    loadUsers(1, searchTerm);
});

// ========================================
// Utility Functions
// ========================================
function formatTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
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
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
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

// ========================================
// Initialize on Page Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    loadOverview();
});
