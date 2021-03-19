import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'
import ImageGallery from './components/ImageGallery.jsx'
function App() {
  return (
    <div className="App">
      <Header />
      <ImageGallery />
    </div>
  );
}

export default App;
