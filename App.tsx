import React from 'react';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="max-w-[1150px] mx-auto bg-white shadow-2xl min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </div>
  );
};

export default App;