// This file contains placeholder images for the portfolio website
// In a real project, you would replace these with actual image imports

// Generate colored rectangles with text as SVG data URLs
const createSVGPlaceholder = (width, height, bgColor, text) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
};

// Profile image placeholder
export const profileImage = createSVGPlaceholder(300, 300, '#2c3e50', 'Zahide Torun');

// Project image placeholders
export const project1 = createSVGPlaceholder(600, 400, '#3498db', 'Proje 1');
export const project2 = createSVGPlaceholder(600, 400, '#e74c3c', 'Proje 2');
export const project3 = createSVGPlaceholder(600, 400, '#2ecc71', 'Proje 3');
export const project4 = createSVGPlaceholder(600, 400, '#f39c12', 'Proje 4');

// Client image placeholders
export const client1 = createSVGPlaceholder(150, 150, '#9b59b6', 'Müşteri 1');
export const client2 = createSVGPlaceholder(150, 150, '#1abc9c', 'Müşteri 2'); 