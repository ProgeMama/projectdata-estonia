# ProjectData Estonia / Ökoskoop Landing Page

Modern landing page for an AI-powered public data, sustainability and funding intelligence assistant.

## What this includes

- React + Vite project
- Tailwind CSS styling
- Modern responsive landing page
- CTA buttons that can open your Custom GPT
- Persona sections for different user roles
- Funding intelligence and trusted source sections

## 1. Requirements

Install Node.js first:

- Recommended: Node.js 20.19+ or 22.12+
- Download: https://nodejs.org/

Check installation:

```bash
node -v
npm -v
```

## 2. Install the project locally

Open Terminal / Command Prompt and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd projectdata-estonia
npm install
npm run dev
```

Then open the local link shown in the terminal, usually:

```text
http://localhost:5173
```

## 3. Add your Custom GPT link

Open this file:

```text
src/main.jsx
```

Find this line:

```js
const GPT_LINK = 'https://chatgpt.com/g/YOUR-GPT-LINK-HERE'
```

Replace it with your real GPT link, for example:

```js
const GPT_LINK = 'https://chatgpt.com/g/g-abc123-projectdata-estonia'
```

Save the file. Now the buttons “Try the AI”, “Try the assistant”, and “Open ProjectData Estonia AI” will open your GPT.

## 4. Build for production

```bash
npm run build
```

This creates a `dist` folder.

## 5. Preview production build locally

```bash
npm run preview
```

## 6. Upload to GitHub

If you already created an empty GitHub repository:

```bash
git init
git add .
git commit -m "Initial ProjectData Estonia landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 7. Deploy options

Easy options:

- Vercel: https://vercel.com/
- Netlify: https://www.netlify.com/
- GitHub Pages

For Vercel or Netlify, connect your GitHub repository and use:

```text
Build command: npm run build
Output folder: dist
```

## Notes

This is an MVP landing page. It does not include its own AI backend yet. It links to your Custom GPT.
