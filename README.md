# Sixpoint Cafe Website

A modern, responsive website for Sixpoint Cafe - an Egyptian coffee shop that serves exceptional coffee with warm hospitality.

## 🌟 Features

- **Real Assets Integration**: 
  - ✅ Uses actual cafe images from `assets/Images/`
  - ✅ Features promotional videos from `assets/Videios/`
  - ✅ Interactive PDF menu viewer with download option
  
- **Modern Design**: Clean, coffee-themed aesthetic with smooth animations
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Components**: 
  - Animated navigation bar with smooth scrolling
  - Dynamic hero section with background image
  - About section with image showcase
  - **PDF Menu Viewer**: View, download, or open menu in new tab
  - Video gallery with cafe promotional content
  - Photo gallery with 4 real cafe images
  - Contact form with Egyptian styling
  - Social media integration (Instagram & Facebook)
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds

## 🎨 Key Sections

1. **Hero Section**: 
   - Background image from cafe photos
   - Animated coffee icon
   - Call-to-action buttons
   
2. **About Section**: 
   - Cafe description with real interior image
   - Three feature cards highlighting values
   - Hover effects on image
   
3. **Menu Section**:
   - 📋 **Custom-Designed Menu** displaying 200+ items:
     - Beautiful category grid with 14+ categories
     - Icon-based category navigation
     - All menu items from PDF in responsive cards
     - Featured items with special badges (⭐)
     - Bilingual support (Arabic + English)
     - Smooth transitions between categories
     - PDF download option available
   - Categories: Breakfast, Appetizers, Salads, Soup, Sandwiches, Burgers, Pasta, Pizza, Chicken, Beef, Fajita, Hot Drinks, Coffee, Iced Coffee, Juices, Milkshakes, Desserts, Waffles
   - Special highlight on Kinder products 🍫
   
4. **Gallery Section**:
   - 4 real cafe photos with hover effects
   - 2 promotional videos:
     - Cafe ambiance video
     - Hot Chocolate Kinder showcase
   - Direct social media links

5. **Contact Section**: 
   - Contact information
   - Message form
   
6. **Footer**: 
   - Quick links
   - Opening hours
   - Social media icons

## 📁 Assets Structure

The website uses real assets from the cafe:

```
src/assets/
├── Images/
│   ├── 518381234_122114740262924632_906631706180280234_n.jpg
│   ├── 577306488_122140533086924632_284076888965708487_n.jpg  [About section]
│   ├── 619464270_17869074192537493_6440135439401881340_n.jpg  [Hero background]
│   └── 621996498_122155263104924632_5754797658795535941_n.jpg
├── Videios/
│   ├── Every corner at Six Point Cafe feels like your favorite spot...mp4
│   └── The perfect drink for winter days (Hot Chocolate Kinder)...mp4
└── Menu/
    └── 6 Point Menu (1) (1)_compressed.pdf  [Interactive PDF viewer]
```

## 🎥 Video Features

The website showcases two promotional videos in the Gallery section:
1. **Cafe Ambiance**: "Every corner at Six Point Cafe feels like your favorite spot ✨"
2. **Signature Drink**: "The perfect drink for winter days 🍫" - Hot Chocolate Kinder

## 📋 Menu Integration

The menu section includes:
- **Interactive PDF Viewer**: Users can view the full menu directly on the website
- **Download Option**: PDF can be downloaded for offline viewing
- **Open in New Tab**: View menu in full browser window
- **Menu Highlights**: Quick overview of popular items organized by category

## Tech Stack

- **React 18**: Modern UI library
- **Vite**: Next-generation frontend tooling
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon system
- **CSS3**: Custom styling with modern features
- **Native PDF Viewer**: iframe-based PDF display

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd sixPiontWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
sixPiontWebsite/
├── src/
│   ├── assets/
│   │   ├── Images/          # Real cafe photos (4 images)
│   │   ├── Videios/         # Promotional videos (2 videos)
│   │   └── Menu/            # PDF menu file
│   ├── components/
│   │   ├── Navbar.jsx/css     # Navigation bar with smooth scroll
│   │   ├── Hero.jsx/css       # Hero with background image
│   │   ├── About.jsx/css      # About with interior image
│   │   ├── Menu.jsx/css       # Interactive PDF menu viewer
│   │   ├── Gallery.jsx/css    # Photos + videos showcase
│   │   ├── Contact.jsx/css    # Contact form
│   │   └── Footer.jsx/css     # Footer with social links
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global app styles
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles & CSS variables
├── index.html                 # HTML template
├── package.json               # Dependencies
└── vite.config.js            # Vite configuration
```

## 🎨 Sections

1. **Hero**: Eye-catching landing with real cafe photo background
2. **About**: Information with interior image showcase
3. **Menu**: Interactive PDF viewer + menu highlights
4. **Gallery**: 4 photos + 2 promotional videos
5. **Contact**: Contact information and message form
6. **Footer**: Quick links, hours, and social media

## Customization

### Colors

The color scheme is defined in `src/index.css` with CSS variables:
- `--primary-brown`: #6F4E37
- `--secondary-brown`: #8B6F47
- `--cream`: #F5E6D3
- `--dark-brown`: #3E2723
- `--accent-gold`: #D4AF37

### Adding More Images

To add more images to the gallery:
1. Place images in `src/assets/Images/`
2. Import them in `Gallery.jsx`
3. Add to the `images` array

### Adding More Videos

To add more videos:
1. Place videos in `src/assets/Videios/`
2. Import them in `Gallery.jsx`
3. Add to the `videos` array

### Updating Menu

The PDF menu can be replaced by:
1. Adding new PDF to `src/assets/Menu/`
2. Updating the import in `Menu.jsx`

Menu highlights can be edited in the `menuHighlights` object in `Menu.jsx`.

## Social Media

- Instagram: [@sixpoint.eg](https://www.instagram.com/sixpoint.eg/)
- Facebook: [sixpoint.eg](https://www.facebook.com/sixpoint.eg/)

## License

© 2026 Sixpoint Cafe. All rights reserved.

---

**Built with ❤️ and ☕**