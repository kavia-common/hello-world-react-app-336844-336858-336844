import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import MoviesShowsPage from './pages/MoviesShowsPage/MoviesShowsPage';
import ShowsPage from './pages/ShowsPage/ShowsPage';
import './App.css';

/**
 * App Component
 *
 * Root application component for StreamVibe OTT application.
 * Sets up React Router with routes for:
 *  - / : Home Page
 *  - /movies-shows : Movies & Shows Page
 *  - /shows/:id : Show Detail / Open Page
 *  - /support : Support (redirects to home)
 *  - /subscriptions : Subscriptions (redirects to home)
 *
 * Renders a fixed Navbar at top and Footer at bottom on all pages.
 *
 * @component
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app-root">
        {/* Fixed Navbar - present on all pages */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies-shows" element={<MoviesShowsPage />} />
          <Route path="/shows/:id" element={<ShowsPage />} />
          {/* Placeholder routes */}
          <Route path="/support" element={<HomePage />} />
          <Route path="/subscriptions" element={<HomePage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>

        {/* Footer - present on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
