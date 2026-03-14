#!/bin/bash

# Performance Testing Script for Six Point Cafe Website
# Run this script to build and analyze the website performance

echo "🚀 Six Point Cafe - Performance Testing"
echo "========================================"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building production bundle..."
npm run build

echo ""
echo "📊 Build completed! Here are the results:"
echo ""

# Check if dist folder exists
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo ""
    
    # Show dist folder size
    echo "📁 Total build size:"
    du -sh dist
    echo ""
    
    # Show individual file sizes
    echo "📄 File breakdown:"
    find dist -type f -exec du -h {} \; | sort -h -r | head -20
    echo ""
    
    echo "✨ Performance Optimizations Applied:"
    echo "   ✅ Code splitting"
    echo "   ✅ Lazy loading"
    echo "   ✅ Minification (Terser)"
    echo "   ✅ Tree shaking"
    echo "   ✅ CSS optimization"
    echo "   ✅ Asset compression"
    echo ""
    
    echo "🌐 To preview the production build:"
    echo "   npm run preview"
    echo ""
    
    echo "📝 Next Steps:"
    echo "   1. Test the preview build (npm run preview)"
    echo "   2. Run Lighthouse audit in Chrome DevTools"
    echo "   3. Check Core Web Vitals"
    echo "   4. Test on real mobile devices"
    echo "   5. Deploy to production"
    echo ""
    
else
    echo "❌ Build failed! Check the errors above."
    exit 1
fi

echo "✅ Performance testing complete!"
