# ParseForge Setup Guide

## Prerequisites

Before running ParseForge, you need to have Node.js installed on your system.

### Install Node.js

#### Option 1: Download from Official Website
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. Verify installation by opening a new terminal and running:
   ```bash
   node --version
   npm --version
   ```

#### Option 2: Using Winget (Windows)
```bash
winget install OpenJS.NodeJS.LTS
```

#### Option 3: Using Chocolatey (Windows)
```bash
choco install nodejs-lts
```

## Installation Steps

Once Node.js is installed:

1. **Open a new terminal** in the project directory:
   ```bash
   cd "C:\Users\hamza\Documents\APIs and SDK project"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   - Landing Page: `http://localhost:3000`
   - Documentation: `http://localhost:3000/docs.html`
   - Dashboard: `http://localhost:3000/dashboard.html`
   - Login: `http://localhost:3000/login.html`

## Project Structure

```
ParseForge/
├── public/              # Frontend files
│   ├── index.html       # Landing page
│   ├── docs.html        # API documentation
│   ├── dashboard.html   # Developer dashboard
│   ├── login.html       # Authentication page
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
├── server.js            # Express server
├── package.json         # Project configuration
└── README.md            # Project documentation
```

## Development

### Starting the Server
```bash
npm start
```

The server will run on port 3000 by default. You can change this by setting the PORT environment variable:

```bash
# Windows PowerShell
$env:PORT=5000
npm start

# Windows CMD
set PORT=5000
npm start
```

### Making Changes

1. Edit files in the `public/` directory for frontend changes
2. Edit `server.js` for backend/API changes
3. Refresh your browser to see changes (no build step required)

## Features

✅ **Landing Page** - Product overview with hero section and features
✅ **Documentation** - Interactive API docs with code examples
✅ **Dashboard** - API key management and analytics
✅ **Authentication** - Login page with social login options
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Code Examples** - Multiple language support (cURL, JavaScript, Python)

## API Endpoints

The server includes sample API endpoints:

- `GET /api/status` - Returns API status
- `GET /api/users/:id` - Get user by ID
- `POST /api/data` - Submit data

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, either:
1. Stop the other application using port 3000
2. Or change the port:
   ```bash
   $env:PORT=3001
   npm start
   ```

### Module Not Found
If you see "module not found" errors, run:
```bash
npm install
```

### Cannot Find 'node' or 'npm'
Make sure Node.js is installed and your terminal is restarted after installation.

## Next Steps

1. **Install Node.js** if not already installed
2. **Run `npm install`** to install dependencies
3. **Run `npm start`** to start the server
4. **Open `http://localhost:3000`** in your browser

## Support

For questions or issues, refer to the README.md file or the inline code comments.
