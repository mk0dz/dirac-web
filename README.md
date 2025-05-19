# Dirac Web

A modern web application built with [Astro](https://astro.build), featuring a clean and efficient architecture.

## 🚀 Features

- Built with Astro 5.x
- MDX support for content
- Sitemap generation
- Server-side rendering with Node.js
- Expressive code highlighting
- Search functionality with Pagefind
- Icon support with Iconify
- TypeScript support
- Biome for code formatting and linting

## 📦 Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm 9.15.0 or later

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd dirac-web
```

2. Install dependencies:
```bash
pnpm install
```

## 🏃‍♂️ Development

To start the development server:

```bash
pnpm dev
```

The development server will start at `http://localhost:4321` by default.

## 🏗️ Building

To build the project for production:

```bash
pnpm build
```

This will:
1. Build the Astro project
2. Generate a sitemap
3. Create a search index with Pagefind

## 🚀 Production

To start the production server:

```bash
pnpm start
```

## 📁 Project Structure

```
dirac-web/
├── src/
│   ├── assets/      # Static assets
│   ├── components/  # Reusable components
│   ├── content/     # MDX content
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   ├── scripts/     # Utility scripts
│   └── styles/      # Global styles
├── public/          # Public assets
├── dist/           # Build output
└── package/        # Package files
```

## 🛠️ Technology Stack

- **Framework**: Astro 5.x
- **Content**: MDX
- **Styling**: CSS
- **Icons**: Iconify (Lucide & Simple Icons)
- **Code Formatting**: Biome
- **Search**: Pagefind
- **Package Manager**: pnpm

## 📝 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]