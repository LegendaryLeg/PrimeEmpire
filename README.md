# Prime Empire - E-commerce Website

A responsive e-commerce website for Prime Empire, built with React and Tailwind CSS. This project showcases premium tea and spices with a modern, mobile-first design.

## Features

- 🏠 **Home Page** - Hero section, featured products, "Why Choose Us" section, and testimonials
- 📦 **Products Listing** - Category filters and responsive product grid
- 🔍 **Product Detail** - Image gallery, detailed information, and purchase options
- ℹ️ **About Us** - Company story, values, and heritage
- 📞 **Contact** - Contact form, contact information, and map placeholder

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Sitemap and Search Indexing

This project auto-generates `public/sitemap.xml` and `public/robots.txt` before each build.

If your production domain is different, set `SITE_URL` before building:

```bash
$env:SITE_URL="https://your-domain.com"; npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Products.jsx
├── data/               # Data files
│   └── products.js
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Responsive Design

The website is built with a mobile-first approach and includes breakpoints for:
- **Mobile**: Default (up to 639px)
- **Tablet**: 640px and above
- **Desktop**: 1024px and above

## Components

### Button
Reusable button component with multiple variants (primary, secondary, outline, whatsapp) and sizes.

### ProductCard
Displays product information in a card format with image, name, price, and action button.

### Navbar
Responsive navigation bar with mobile hamburger menu and active route highlighting.

### Footer
Footer with company information, quick links, contact details, and social media icons.

## Customization

### Colors
Primary colors can be customized in `tailwind.config.js`. The default primary color is blue.

### Products
Product data is stored in `src/data/products.js`. You can modify this file to add, remove, or update products.

### WhatsApp Integration
Update the WhatsApp phone number in:
- `src/pages/Home.jsx` (line with `wa.me/1234567890`)
- `src/pages/ProductDetail.jsx` (line with `wa.me/1234567890`)
- `src/pages/Contact.jsx` (line with `wa.me/1234567890`)

## Accessibility

- Semantic HTML elements (header, main, section, footer, article)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
