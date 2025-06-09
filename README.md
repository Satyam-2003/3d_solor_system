# 🌌 Interactive 3D Solar System

A stunning, interactive 3D simulation of our solar system built with Three.js. Explore the cosmos with realistic planetary orbits, customizable speeds, and immersive visual effects.

![Solar System Demo]() ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🪐 Core Simulation

- **Complete Solar System**: All 8 planets (Mercury to Neptune) with the Sun at center
- **Realistic Proportions**: Accurate relative sizes and orbital distances
- **Orbital Mechanics**: Planets orbit at scientifically proportional speeds
- **3D Rendering**: Smooth WebGL rendering with Three.js

### 🎮 Interactive Controls

- **Individual Speed Control**: Real-time sliders for each planet's orbital speed (0-10x)
- **Pause/Resume**: Stop and start all planetary motion
- **Camera Controls**: Mouse drag to orbit, scroll to zoom
- **Planet Focus**: Click any planet to smoothly focus the camera
- **Responsive Design**: Works seamlessly on desktop and mobile

### 🎨 Visual Experience

- **Dynamic Lighting**: Realistic sun-based lighting with shadows
- **Starfield Background**: 2000+ procedurally placed stars
- **Orbit Visualization**: Subtle orbital path indicators
- **Planet Tooltips**: Hover information with distance and speed data
- **Theme Toggle**: Switch between dark space and light themes
- **Modern UI**: Glassmorphism design with backdrop blur effects

## 🚀 Quick Start

### Option 1: Direct Download

1. Download the `index.html` file
2. Open it in any modern web browser
3. Start exploring the solar system!

### Option 2: Clone Repository

```bash
git clone https://github.com/yourusername/solar-system-3d.git
cd solar-system-3d
```

### Option 3: Live Server (Recommended for Development)

```bash
# Using Node.js live-server
npm install -g live-server
live-server

# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000
```

## 🛠️ Setup & Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required - runs entirely in the browser!

### Dependencies

The project uses CDN-hosted libraries, so no local installation is needed:

- **Three.js r128**: 3D graphics and WebGL rendering
- **Pure HTML/CSS/JavaScript**: No build process required

### File Structure

```
solar-system-3d/
├── solar_system_3d.html          # Main application file
├── README.md          # This file
├── LICENSE            # MIT License
└── assets/           # Optional: screenshots, demos
    └── screenshots/
```

## 🎯 Usage Guide

### Basic Navigation

- **🖱️ Mouse Drag**: Rotate camera around the solar system
- **🖱️ Scroll Wheel**: Zoom in and out
- **🖱️ Click Planet**: Focus camera on specific planet
- **⌨️ Hover**: Display planet information tooltip

### Control Panel Features

- **Speed Sliders**: Adjust orbital speed for each planet individually
- **⏸️ Pause/Resume**: Stop or start all planetary animations
- **🌙 Theme Toggle**: Switch between dark and light themes

### Planet Information

Each planet displays:

- Name and relative size
- Orbital distance (in AU)
- Current speed multiplier
- Realistic colors and textures

## 🔧 Customization

### Modifying Planet Properties

Edit the `planetData` array in the JavaScript section:

```javascript
const planetData = [
  {
    name: "Mercury",
    size: 0.8, // Relative size
    distance: 15, // Orbital distance
    speed: 4.7, // Orbital speed
    color: 0x8c7853, // Hex color
  },
];
```

### Adding New Features

The code is modular and well-commented. Key functions:

- `createPlanets()`: Planet generation and properties
- `animate()`: Main animation loop
- `setupLighting()`: Lighting configuration
- `createControlsUI()`: Control panel generation

### Styling Customization

Modify the CSS section for:

- Control panel appearance
- Color schemes
- Responsive breakpoints
- Animation transitions

## 📱 Browser Compatibility

| Browser       | Version | Support         |
| ------------- | ------- | --------------- |
| Chrome        | 80+     | ✅ Full Support |
| Firefox       | 75+     | ✅ Full Support |
| Safari        | 14+     | ✅ Full Support |
| Edge          | 80+     | ✅ Full Support |
| Mobile Safari | iOS 14+ | ✅ Full Support |
| Chrome Mobile | 80+     | ✅ Full Support |

### Requirements

- WebGL support
- ES6 JavaScript support
- CSS3 support (for styling)

## 🎪 Demo & Screenshots

### Live Demo

[🌍 View Live Demo](https://yourusername.github.io/solar-system-3d)

### Features Showcase

- Real-time orbital mechanics
- Smooth camera transitions
- Interactive speed controls
- Responsive design across devices
- Dark/light theme switching

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues

1. Check existing issues first
2. Create detailed bug reports with:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Feature Requests

- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Include mockups or examples if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes with clear, commented code
4. Test across multiple browsers
5. Submit a pull request with detailed description

### Development Guidelines

- Follow existing code style and structure
- Add comments for complex functionality
- Test responsiveness and performance
- Ensure cross-browser compatibility

## 📈 Performance Notes

### Optimization Features

- Efficient Three.js rendering pipeline
- LOD (Level of Detail) for distant objects
- Optimized star field generation
- Smooth 60fps animations
- Memory-efficient object management

### Performance Tips

- Close other browser tabs for best performance
- Use hardware acceleration if available
- For older devices, reduce star count in `createStars()`

## 🐛 Troubleshooting

### Common Issues

**Black screen or no planets visible:**

- Ensure WebGL is enabled in your browser
- Try refreshing the page
- Check browser console for errors

**Slow performance:**

- Close other browser tabs
- Try reducing star count in the code
- Check if hardware acceleration is enabled

**Controls not responding:**

- Ensure JavaScript is enabled
- Try a different browser
- Check for browser extensions that might interfere

**Mobile touch issues:**

- Use two-finger gestures for zooming
- Single tap to focus on planets
- Ensure responsive mode is active

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Solar System 3D

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- **Three.js Team**: For the amazing 3D graphics library
- **WebGL Contributors**: For enabling hardware-accelerated graphics in browsers
- **NASA**: For planetary data and inspiration
- **Open Source Community**: For continuous inspiration and support

## 🔗 Links

- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Solar System Facts](https://solarsystem.nasa.gov/)
- [MIT License](https://opensource.org/licenses/MIT)

## 📊 Project Stats

- **Lines of Code**: ~600
- **File Size**: ~25KB
- **Load Time**: <2 seconds
- **Supported Devices**: Desktop, Tablet, Mobile
- **Dependencies**: Three.js (CDN)

---

**⭐ Star this repository if you found it helpful!**

**🐛 Found a bug? [Report it here](https://github.com/yourusername/solar-system-3d/issues)**

**💡 Have an idea? [Share it with us](https://github.com/yourusername/solar-system-3d/discussions)**
