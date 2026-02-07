# 🎓 SRMIST CGPA Calculator

A modern, responsive CGPA calculator designed specifically for SRMIST students. Built with React and TailwindCSS, featuring real-time calculations and an intuitive user interface.

![SRMIST CGPA Calculator](https://img.shields.io/badge/SRMIST-CGPA%20Calculator-257093?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎯 **Accurate SRMIST Grading System** - Uses official grade points (O=10, A+=9, A=8, B+=7, B=6, C=5.5)
- 🔄 **Dynamic Subject Management** - Add unlimited subjects as needed
- ⚡ **Real-time Calculations** - Instant GPA results with visual progress bar
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful dark theme with gradient accents
- 🔧 **Easy to Edit** - Modify credits and grades after calculation
- 📊 **Visual Feedback** - Animated progress bar showing percentage
- 🔍 **SEO Optimized** - Enhanced meta tags for better discoverability

## 🎨 Grading System

| Grade | Points |
|-------|--------|
| O     | 10.0   |
| A+    | 9.0    |
| A     | 8.0    |
| B+    | 7.0    |
| B     | 6.0    |
| C     | 5.5    |
| W/F/Ab/I/* | 0.0 |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/anuj-rishu/SRM-E-Libarary.git
cd SRM-E-Libarary/CGPA-Calculator/cgpa-cal
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## 📁 Project Structure

```
cgpa-cal/
├── public/
│   └── calculator.svg
├── src/
│   ├── components/
│   │   ├── CGPACalculator.jsx  # Main calculator component
│   │   ├── Header.jsx          # Header with branding
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Custom styles
│   ├── index.css               # Tailwind imports
│   └── main.jsx                # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 💡 Usage

1. **Enter Credits**: Input the credit hours for each subject (0-10)
2. **Select Grade**: Choose the grade received from the dropdown
3. **Add Subjects**: Click "Add More Subjects" to include additional courses
4. **Calculate**: Click "Calculate CGPA" to see your Grade Point Average
5. **Edit & Recalculate**: Modify any values and click "Recalculate CGPA"
6. **Reset**: Start fresh with the "Reset Calculator" button

## 🌐 Live Demo

Visit the live application: [https://cgpa.srminsider.live/](https://cgpa.srminsider.live/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of the SRM E-Library ecosystem, maintained by the SRM Insider Community.

## 👥 Community

**SRM Insider Community**

- 🌐 Website: [elibrary.srminsider.live](https://elibrary.srminsider.live/)
- 💼 LinkedIn: [@srm-insider-community](https://www.linkedin.com/company/srm-insider-community)
- 📸 Instagram: [@srm.insider](https://www.instagram.com/srm.insider/)
- 💬 WhatsApp: [Join Community](https://chat.whatsapp.com/C6dpo6Rdfes4slvta0bN45?mode=wwt)

## 🙏 Acknowledgments

- Designed for SRMIST students
- Powered by SRM Insider Community
- Built with ❤️ for better academic planning

## 📞 Support

For support, join our WhatsApp community or reach out via Instagram/LinkedIn.


