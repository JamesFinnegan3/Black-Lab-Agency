# Local Development Setup with Claude Code

This guide will walk you through setting up a complete local development environment so you can:
- Make changes to your website instantly
- Preview changes in real-time without redeploying to Vercel
- Use Claude Code in both VSCode and CLI for AI-assisted development

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setting Up a Local Development Server](#setting-up-a-local-development-server)
3. [Installing Claude Code CLI](#installing-claude-code-cli)
4. [Setting Up Claude Code in VSCode](#setting-up-claude-code-in-vscode)
5. [Using Claude Code for Development](#using-claude-code-for-development)
6. [Workflow Examples](#workflow-examples)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- **Git** installed on your machine
- **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- **VSCode** - [Download here](https://code.visualstudio.com/)
- **Anthropic API Key** - Get one from [https://console.anthropic.com/](https://console.anthropic.com/)

---

## Setting Up a Local Development Server

Since this is a static HTML website, you need a local web server to view it in your browser.

### Option 1: VS Code Live Server Extension (Recommended for VSCode users)

1. **Install Live Server Extension**
   - Open VSCode
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey

2. **Start Live Server**
   - Open the project folder in VSCode
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open at `http://127.0.0.1:5500`
   - **Changes will auto-reload!** Every time you save a file, the browser refreshes

### Option 2: Python HTTP Server (Built-in, works everywhere)

If you have Python installed:

```bash
# Navigate to your project directory
cd /path/to/Black-Lab-Agency

# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Open your browser to `http://localhost:8000`

**Note:** You'll need to manually refresh the browser after changes.

### Option 3: Node.js HTTP Server

```bash
# Install globally
npm install -g http-server

# Navigate to project directory
cd /path/to/Black-Lab-Agency

# Start server
http-server -p 8000

# Or with live reload
npx live-server
```

---

## Installing Claude Code CLI

The Claude Code CLI allows you to use Claude directly from your terminal.

### Installation

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code
```

### Configuration

1. **Set up your API key**
   ```bash
   # Set your Anthropic API key as an environment variable
   export ANTHROPIC_API_KEY='your-api-key-here'
   ```

2. **Add to your shell profile (so it persists)**

   For **bash** (~/.bashrc or ~/.bash_profile):
   ```bash
   echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.bashrc
   source ~/.bashrc
   ```

   For **zsh** (~/.zshrc):
   ```bash
   echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. **Verify installation**
   ```bash
   claude --version
   ```

### First Time Usage

```bash
# Navigate to your project
cd /path/to/Black-Lab-Agency

# Start a Claude Code session
claude
```

You'll see an interactive prompt where you can chat with Claude about your code!

---

## Setting Up Claude Code in VSCode

### Installation

1. **Install the Claude Code Extension**
   - Open VSCode
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "Claude Code"
   - Install the official extension by Anthropic

2. **Configure the Extension**
   - Open VSCode settings (Ctrl+, or Cmd+,)
   - Search for "Claude"
   - Enter your Anthropic API key in the "Claude: API Key" field

   **Or** add to your settings.json:
   ```json
   {
     "claude.apiKey": "your-api-key-here"
   }
   ```

3. **Alternative: Use environment variable**
   - If you already set `ANTHROPIC_API_KEY` in your shell, the extension will use it
   - Restart VSCode after setting the environment variable

### Using Claude Code in VSCode

1. **Open the Claude sidebar**
   - Click the Claude icon in the left sidebar
   - Or press `Ctrl+Shift+P` (Cmd+Shift+P on Mac) and search for "Claude"

2. **Start a conversation**
   - Type your question or request
   - Claude can see your open files and project structure
   - Claude can read, edit, and create files directly

---

## Using Claude Code for Development

### CLI Workflow

The CLI is great for:
- Making bulk changes across multiple files
- Complex refactoring
- Debugging issues
- Terminal-based development

**Example commands:**

```bash
# Start Claude Code in your project
cd Black-Lab-Agency
claude

# Example prompts you can use:
> Update all Calendly links to https://calendly.com/blacklabagency/consultation
> Add a new section to the home page about our services
> Debug why the mobile menu isn't closing properly
> Optimize the CSS for better performance
> Add analytics tracking to all pages
```

### VSCode Workflow

The VSCode extension is great for:
- Quick edits while viewing your code
- Getting explanations about specific code
- Making changes to the file you're currently viewing
- Visual feedback and inline suggestions

**How to use:**

1. **Inline assistance**
   - Highlight code
   - Right-click → "Ask Claude"
   - Claude will analyze and help

2. **Chat sidebar**
   - Ask questions about your codebase
   - Request changes to specific files
   - Get design suggestions

3. **With Live Server running**
   - Make changes with Claude's help
   - Save the file (Ctrl+S)
   - See changes instantly in your browser!

---

## Workflow Examples

### Example 1: Updating Content

**Scenario:** You want to change the hero text on the home page

**Using VSCode + Claude:**
1. Start Live Server (right-click `index.html` → Open with Live Server)
2. Open Claude sidebar in VSCode
3. Ask: "Change the hero headline in index.html to 'Transform Your Business with Data-Driven Advertising'"
4. Claude updates the file
5. Save (Ctrl+S)
6. Browser auto-refreshes with new content!

**Using CLI:**
```bash
# In terminal
cd Black-Lab-Agency
claude

# Then in Claude:
> Change the hero headline in index.html to 'Transform Your Business with Data-Driven Advertising'
```

### Example 2: Adding a New Feature

**Scenario:** Add a contact form to the home page

**Using VSCode + Claude:**
1. Open Claude sidebar
2. Ask: "Add a contact form section before the footer in index.html with fields for name, email, and message. Style it to match the existing design."
3. Claude creates the HTML and updates CSS
4. Review changes in the editor
5. Save and see it live!

### Example 3: Fixing Bugs

**Scenario:** Mobile menu not working

**Using CLI:**
```bash
claude

> The mobile menu isn't closing when I click a link. Can you debug and fix main.js?
```

Claude will:
1. Read the current JavaScript
2. Identify the issue
3. Suggest or implement a fix
4. You can test immediately with your local server running

---

## Recommended Development Workflow

Here's the optimal workflow for local development:

```
1. Start your local server (Live Server in VSCode)
   └─ Browser opens at http://localhost:5500

2. Open project in VSCode
   └─ Claude sidebar ready for questions

3. Make changes using Claude (CLI or VSCode)
   └─ Claude edits files directly

4. Save files (automatic in CLI, manual in VSCode)
   └─ Browser auto-refreshes (with Live Server)

5. Test in browser
   └─ See changes instantly!

6. Commit when satisfied
   └─ git add . && git commit -m "description"

7. Push to GitHub
   └─ git push origin your-branch-name

8. Vercel automatically deploys
   └─ Your live site updates in ~30 seconds
```

**Key Benefits:**
- No waiting for Vercel deployments during development
- Test multiple approaches quickly
- Catch errors immediately
- Use Claude to help with changes and debugging

---

## Pro Tips

### 1. **Keep Local Server Running**
Always have your local server running while developing. With Live Server, you get instant feedback on every change.

### 2. **Use Claude for Repetitive Tasks**
Ask Claude to handle tedious tasks:
- "Update all phone numbers across all HTML files"
- "Add Open Graph meta tags to every page"
- "Optimize all image alt text for SEO"

### 3. **Test in Multiple Browsers**
With local development, you can quickly test in different browsers:
- Chrome: `http://localhost:5500`
- Firefox: `http://localhost:5500`
- Safari: `http://localhost:5500`

### 4. **Use Browser DevTools**
With local development:
- Inspect elements live (F12)
- Debug JavaScript in real-time
- Test mobile responsive design (Ctrl+Shift+M)
- Monitor network requests
- Check console for errors

### 5. **Create Feature Branches**
```bash
# Create a new branch for experiments
git checkout -b feature/new-testimonials

# Make changes with Claude
claude
> Add a testimonials section to the home page

# Test locally
# If you like it, commit and push
# If not, discard and try again!
```

### 6. **Use Claude for Learning**
Ask Claude to explain code:
- "Explain how the smooth scroll animation works in main.js"
- "What does this CSS do?"
- "How can I improve the performance of this page?"

---

## Troubleshooting

### Claude CLI Not Found

```bash
# Reinstall
npm install -g @anthropic-ai/claude-code

# Check PATH
echo $PATH

# Verify installation
which claude
```

### API Key Issues

```bash
# Check if key is set
echo $ANTHROPIC_API_KEY

# Re-set the key
export ANTHROPIC_API_KEY='your-key-here'

# Make it permanent
echo 'export ANTHROPIC_API_KEY="your-key"' >> ~/.bashrc
source ~/.bashrc
```

### Live Server Not Auto-Refreshing

1. Check Live Server is running (bottom right of VSCode)
2. Try stopping and restarting it
3. Clear browser cache (Ctrl+Shift+R)
4. Check file is saved (Ctrl+S)

### Browser Shows Old Version

```bash
# Hard refresh in browser
# Windows/Linux: Ctrl+Shift+R
# Mac: Cmd+Shift+R

# Or clear browser cache
```

### Port Already in Use

```bash
# If port 5500 or 8000 is in use, try different port

# Python:
python3 -m http.server 8001

# http-server:
http-server -p 8001

# Live Server: Configure in VSCode settings
# "liveServer.settings.port": 8001
```

### Changes Not Showing Up

1. Make sure you saved the file (Ctrl+S)
2. Check the right file is open (check file path)
3. Hard refresh browser (Ctrl+Shift+R)
4. Restart local server
5. Check browser console for errors (F12)

---

## Quick Reference

### Starting Local Development

```bash
# 1. Navigate to project
cd /path/to/Black-Lab-Agency

# 2. Start local server (pick one):
# Option A: VSCode Live Server
#   Right-click index.html → Open with Live Server

# Option B: Python
python3 -m http.server 8000

# Option C: Node
npx live-server

# 3. Start Claude CLI (in another terminal)
claude
```

### Common Claude Prompts

```
# Content updates
> Update the hero text on the home page to [new text]
> Add a new case study to the local-services page

# Styling
> Make the call-to-action buttons larger and more prominent
> Adjust the mobile menu styling to be more user-friendly

# Features
> Add a newsletter signup form to the footer
> Create a new page for our blog

# Debugging
> Fix the console error about Calendly
> The mobile menu isn't working on iOS, can you fix it?

# Optimization
> Optimize the CSS for better performance
> Add lazy loading to images
> Improve SEO meta tags across all pages
```

---

## Next Steps

Now that you have local development set up:

1. **Make changes locally first** - Test everything before deploying
2. **Use Claude to iterate quickly** - Try different approaches instantly
3. **Commit when satisfied** - Only push working code
4. **Let Vercel deploy** - Automatic deployment from GitHub

This workflow will save you hours of waiting for deployments and let you experiment freely!

---

## Additional Resources

- [Claude Code Documentation](https://github.com/anthropics/claude-code)
- [VSCode Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Chrome DevTools Guide](https://developer.chrome.com/docs/devtools/)

---

**Questions?** Ask Claude! Both the CLI and VSCode extension can help you troubleshoot and learn.
