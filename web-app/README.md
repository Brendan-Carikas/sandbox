# Web Components Viewer

A modern React application for viewing and showcasing web components and design patterns. Built with Material-UI and following WCAG 2.1 AA accessibility guidelines.

## Features

- 🎨 Modern, responsive design using Material-UI
- ♿ WCAG 2.1 AA compliant components
- 📱 Mobile-first approach
- 🎯 Component showcase with live examples
- 🎭 Customizable theming
- 🚀 React Router for navigation

## Project Structure

```
/web-app/
│── /public/                     # Static assets
│── /src/
│   ├── /components/            # Reusable UI components
│   │   ├── /ui/               # Core UI components
│   │   ├── /layout/           # Layout components
│   │   ├── /forms/            # Form components
│   ├── /pages/                # Page components
│   ├── /templates/            # Page templates
│   ├── /theme/                # MUI theme configuration
│   ├── /hooks/                # Custom React hooks
│   ├── /context/              # React context providers
│   ├── /utils/                # Utility functions
│   ├── /assets/              # Images, icons, etc.
│   ├── /routes/              # Route definitions
│   ├── /animations/          # Animation configurations
│   ├── App.js                # Root component
│   └── index.js              # Entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Design System

### Color Palette

The application uses a carefully selected color palette that meets WCAG 2.1 AA contrast requirements:

- Primary: #1976d2
- Secondary: #9c27b0
- Error: #d32f2f
- Warning: #ed6c02
- Info: #0288d1
- Success: #2e7d32

### Typography

- Font Family: Inter, system fonts
- Heading Sizes: h1 (2.5rem) to h6 (1rem)
- Body Text: 1rem (body1) and 0.875rem (body2)

### Components

The application includes the following core components:

- Buttons (contained, outlined, text)
- Text Fields
- Cards
- Tables
- Layout components (AppBar, Drawer)

### Responsive Breakpoints

- xs: 0px
- sm: 600px
- md: 960px
- lg: 1280px
- xl: 1920px

## Accessibility

This application follows WCAG 2.1 AA guidelines, ensuring:

- Proper color contrast
- Keyboard navigation
- Screen reader compatibility
- Proper ARIA labels
- Focus management
- Responsive text sizing

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
