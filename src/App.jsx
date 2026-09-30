import React from "react";
import { Routes, Route } from "react-router-dom";

// ============================================================
// COMPONENTS
// ============================================================

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import HomeTrustProjects from "./components/HomeTrustProjects";
import Footer from "./components/Footer";

// ============================================================
// PAGES
// ============================================================

import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// ============================================================
// HOME PAGE
// ============================================================

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero / Home Section */}
      <Home />

      {/* Featured / Trust Projects */}
      <HomeTrustProjects />

      {/* Categories */}
      <Categories />

      {/* Brand Marquee */}
      <Marquee />

      {/* Footer */}
      <Footer />
    </>
  );
};

// ============================================================
// MAIN APP
// ============================================================

const App = () => {
  return (
    <Routes>

      {/* ======================================================
          HOME
      ======================================================= */}

      <Route
        path="/"
        element={<HomePage />}
      />

      {/* ======================================================
          PRODUCTS
      ======================================================= */}

      <Route
        path="/products"
        element={
          <>
            <Navbar />

            <main>
              <Products />
            </main>

            <Footer />
          </>
        }
      />

      {/* ======================================================
          GALLERY
      ======================================================= */}

      <Route
        path="/gallery"
        element={
          <>
            <Navbar />

            <main>
              <Gallery />
            </main>

            <Footer />
          </>
        }
      />

      {/* ======================================================
          CONTACT
      ======================================================= */}

      <Route
        path="/contact"
        element={
          <>
            <Navbar />

            <main>
              <Contact />
            </main>

            <Footer />
          </>
        }
      />

      {/* ======================================================
          FALLBACK
          Agar koi wrong URL open ho to Home par le jayega
      ======================================================= */}

      <Route
        path="*"
        element={<HomePage />}
      />

    </Routes>
  );
};

export default App;