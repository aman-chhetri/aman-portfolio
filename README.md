# Portfolio Website

This is a personal portfolio website built with **Next.js** and **TypeScript**. It showcases projects, blog posts, and resume information, and is styled using **Tailwind CSS**. The site is designed to be fast, modern, and easily extensible.

## Features

- **Next.js 14** app directory structure
- **TypeScript** for type safety
- **Tailwind CSS** for rapid UI development
- **MDX**-powered blog/content system
- Responsive and accessible design
- Dark/light mode toggle
- Modular, reusable components

## Project Structure

```
├── content/         # Blog posts and content in MDX format
├── public/          # Static assets (e.g., profile picture)
├── src/
│   ├── app/         # Main app, routing, and pages
│   │   └── blog/    # Blog listing and dynamic blog post routes
│   ├── components/  # UI components (cards, navbar, etc.)
│   ├── data/        # Resume and blog data
│   └── lib/         # Utility functions
├── package.json     # Project metadata and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- pnpm, npm, or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:
```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```sh
pnpm build
# or
npm run build
# or
yarn build
```

### Linting

```sh
pnpm lint
# or
npm run lint
# or
yarn lint
```

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Content Management

- Blog posts and content are written in `.mdx` files inside the `content/` directory.
- Resume and project data are managed in the `src/data/` directory.

## License

This project is for personal use. Feel free to fork and adapt for your own portfolio! 