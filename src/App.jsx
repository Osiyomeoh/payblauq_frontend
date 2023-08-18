import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroSection, BrandSection, ThirdSection } from './components/index.js';
import Home from './components/pages/Home';
import { ContactSales, Developers, Pricing, Resources, Solutions, Products } from './components/pages/index.js';

const App = () => {
  return (
    <div className="h-screen">
      <Router>
        {/* <Navbar /> */}
        <HeroSection />
        <BrandSection />
        <ThirdSection />

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="./pages/developers" component={Developers} />
          <Route path="/product" component={Products} />
          <Route path="/resources" component={Resources} />
          <Route path="/contactsale" component={ContactSales} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/solutions" component={Solutions} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
