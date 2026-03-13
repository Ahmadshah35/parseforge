# Dashboard Quick Reference Card

## 🎯 Quick Test Commands

### Check Server Status
```bash
curl http://localhost:3000/api/status
```

### Get Dashboard Stats
```bash
curl http://localhost:3000/api/dashboard/stats
```

### List All API Keys
```bash
curl http://localhost:3000/api/keys
```

### Create New API Key
```bash
curl -X POST http://localhost:3000/api/keys \
  -H "Content-Type: application/json" \
  -d '{"name":"My New Key","type":"test"}'
```

### Get Usage Data (7 days)
```bash
curl http://localhost:3000/api/dashboard/usage?period=7
```

### Get Recent Activity
```bash
curl http://localhost:3000/api/dashboard/activity
```

### Revoke API Key
```bash
curl -X DELETE http://localhost:3000/api/keys/key_1
```

## 🖱️ Dashboard UI Actions

### Create API Key
1. Click **"+ Create New Key"** button
2. Enter key name in prompt
3. Choose production (OK) or test (Cancel)
4. Copy the full key immediately (shown only once!)

### Copy API Key
1. Find key in list
2. Click **"Copy"** button
3. Key copied to clipboard (even masked keys!)

### Revoke API Key
1. Find key in list
2. Click **"Revoke"** button
3. Confirm deletion
4. Key removed with animation

### Change Chart Period
1. Click period dropdown on Usage Chart
2. Select 7, 30, or 90 days
3. Chart updates automatically

## ⏰ Auto-Refresh

Dashboard refreshes every **30 seconds**:
- Statistics update
- Charts reload with latest data
- Activity feed shows new requests
- Console logs "🔄 Dashboard data refreshed"

## 🎨 Color Codes

### HTTP Methods
- 🔵 **GET** - Blue badge
- 🟢 **POST** - Green badge
- 🟠 **PUT** - Orange badge
- 🔴 **DELETE** - Red badge

### Status Indicators
- ✅ **Success** (200-299) - Green icon
- ❌ **Error** (400+) - Red icon

### Chart Colors
- 🟣 **Primary** - #6366f1 (API calls line)
- 🟢 **Success** - #10b981 (2xx responses, response time)
- 🔵 **Info** - #3b82f6 (201 responses)
- 🟠 **Warning** - #f59e0b (404 responses)
- 🔴 **Error** - #ef4444 (500 responses)
- ⚪ **Other** - #94a3b8 (other codes)

## 📊 Chart Types

1. **Usage Chart** - Line chart with gradient fill
2. **Response Time Chart** - Line chart with real-time badge
3. **Status Code Chart** - Doughnut chart with legend
4. **Top Endpoints** - Custom bar chart with progress bars

## 🔑 API Key Format

- **Production**: `pk_live_` + 48 hex characters
- **Test**: `pk_test_` + 48 hex characters
- **Masked**: Shows prefix + last 4 chars (e.g., `pk_live_•••••4f2a`)

## 🚨 Important Notes

⚠️ **API key security:**
- Full key shown ONLY at creation
- Save it immediately!
- Cannot retrieve full key later
- Only masked version shown in UI

⚠️ **Data persistence:**
- All data stored in server memory
- Data resets when server restarts
- For production, add database (MongoDB, PostgreSQL, etc.)

⚠️ **Browser requirements:**
- Modern browser (Chrome, Firefox, Edge, Safari)
- JavaScript enabled
- Chart.js loaded from CDN
- Clipboard API supported

## 🎉 Success Messages

You'll see green notifications for:
- ✅ "API key created successfully"
- ✅ "API key revoked successfully"
- ✅ "Copied!" (on button after copy)

## ❌ Error Messages

You'll see red notifications for:
- ❌ "Failed to load dashboard data"
- ❌ "Failed to create API key"
- ❌ "Failed to revoke API key"
- ❌ "Failed to copy key"

## 💡 Pro Tips

1. **Open browser console** (F12) to see:
   - Data refresh logs
   - API request/response
   - Any errors

2. **Test auto-refresh**:
   - Open dashboard
   - Wait 30 seconds
   - Watch console for "🔄 Dashboard data refreshed"

3. **Test activity tracking**:
   - Open API playground in another tab
   - Make some requests
   - Switch back to dashboard
   - See activity in feed (or wait for auto-refresh)

4. **Period comparison**:
   - Switch between 7/30/90 days
   - Compare usage patterns
   - Identify trends

5. **Monitor performance**:
   - Watch response time chart
   - Look for spikes or degradation
   - Green line = good performance

## 📱 Mobile Support

Dashboard is responsive and works on:
- 📱 Phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🔗 Related Documentation

- [DASHBOARD-GUIDE.md](DASHBOARD-GUIDE.md) - Complete feature documentation
- [README.md](README.md) - Project overview
- [QUICK-START.md](QUICK-START.md) - Getting started guide

---

**Now go explore your fully functional dashboard! 🚀**

Open: `http://localhost:3000/dashboard.html`
