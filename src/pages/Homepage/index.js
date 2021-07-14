import React, { useEffect } from 'react';
import { Carousel, Navbar } from '../../components/molecules';
import { MainContent } from '../../components/Layouts';

const Homepage = () => {
  useEffect(() => {
    document.title = 'Blanja | Homepage';
  });
  return (
    <>
      <Navbar />
      <MainContent>
        <Carousel className="carousel" />
      </MainContent>
    </>
  );
};

export default Homepage;
