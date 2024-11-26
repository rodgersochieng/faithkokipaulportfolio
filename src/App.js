import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactMe from './components/ContactMe';
import CustomerReviews from "./components/CustomerReviews";

function App() {
  return (
    <div className="bg-emeraldEssence min-h-screen text-white font-sans">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <Introduction />
        <Skills />
        <CustomerReviews />
        <Education />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

