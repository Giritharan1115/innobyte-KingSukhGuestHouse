import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapContainer from "./components/MapContainer";

function App() {
  return (
    <div className="font-sans antialiased bg-gray-100 scroll-smooth">
      <Header />
      <MapContainer />
      <Footer />
    </div>
  );
}

export default App;
