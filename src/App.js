import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ContactPage from './pages/Contact.js';
import WhatwedoPage from './pages/Whatwedo.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/contact" element={<ContactPage />} />
         
      <Route path="/whatwedo" element={<WhatwedoPage />} />
    </Routes>
  );
}

export default App;
