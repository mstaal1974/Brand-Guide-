import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-navy to-[#1a2b50] text-white text-center py-[90px] px-10">
      <h1 className="font-black text-4xl md:text-6xl tracking-tighter bg-gradient-to-r from-electric-blue to-gold bg-clip-text text-transparent m-0">
        app.microcredentials.io
      </h1>
      <p className="text-xl md:text-2xl mt-5 opacity-95 font-semibold">
        The Architect of Potential — Verifiable, Secure, Empowering
      </p>
    </header>
  );
};

export default Header;