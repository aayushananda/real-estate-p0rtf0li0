# Kumara Real Estate Portfolio

A modern, responsive real estate portfolio website built with React and Tailwind CSS v4. This project showcases luxury properties with an elegant design focused on visual presentation.

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean and elegant interface with luxury-focused aesthetics
- **Interactive Elements**: Hover effects, mobile menu, and scroll animations
- **Performance Optimized**: Fast loading with minimal dependencies

## Project Structure

The website consists of several key components:

- **Header/Navigation**: Fixed header with mobile-responsive menu
- **Hero Section**: Full-width hero image with call-to-action
- **Property Grid**: Showcase of different property categories
- **Featured Property**: Highlight section for premium listings
- **Stats Section**: Numerical achievements and statistics
- **Agent Profile**: About section for the real estate agent/company
- **Footer**: Contact information and additional links

## Getting Started

### Prerequisites

- Node.js 14.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/real-estate-p0rtf0li0.git
cd real-estate-p0rtf0li0
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` to view the website.

## Customization

### Adding Your Own Properties

1. Add property images to the `/public` directory
2. Update the property card components in `App.jsx` with your property details

### Changing Colors

The color scheme is defined in the theme section of `src/index.css`. Modify the color variables to match your brand:

```css
@theme {
  --color-primary: #ffffff;
  --color-secondary: #f4f4f4;
  --color-accent: #c8aa76;
  
  --color-text-dark: #333333;
  --color-text-light: #ffffff;
  --color-text-muted: #777777;
}
```

## Component Details

### Header/Navigation

The navigation bar is fixed at the top and becomes solid after scrolling. It includes a mobile-responsive hamburger menu for smaller screens.

### Property Cards

Property cards feature a hover effect that reveals additional information. The design focuses on highlighting the property images with subtle text overlay.

### Animations

The site includes scroll-triggered animations for sections as they come into view, improving the user experience and drawing attention to important content.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## License

This project is available as open source under the terms of the MIT License.

## Acknowledgements

- Design inspiration from luxury real estate websites
- Font pairings: Playfair Display and Montserrat
