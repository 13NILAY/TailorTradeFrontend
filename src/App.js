import './App.css';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import fontcolorTheme from './fontcolorTheme';
import Dashboard from './Dashboard';
import Reviews from './Reviews';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={fontcolorTheme}>
        <Router> {/* Use BrowserRouter as Router */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
