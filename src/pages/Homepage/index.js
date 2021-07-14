import React, { useEffect } from 'react';
import {
  CardGrouping,
  Carousel,
  CarouselCategory,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { MainContent, SectionContent } from '../../components/Layouts';

const Homepage = () => {
  useEffect(() => {
    document.title = 'Blanja | Homepage';
  });
  return (
    <>
      <Navbar />
      <MainContent>
        <Carousel className="carousel" />
        <SectionContent className="section">
          <HeaderSection
            title="Category"
            subTitle="What are you currently looking for"
          />
          <CarouselCategory className="carousel" />
        </SectionContent>
        <SectionContent className="section">
          <HeaderSection title="New" subTitle="You’ve never seen it before!" />
          <CardGrouping />
        </SectionContent>
      </MainContent>
    </>
  );
};

export default Homepage;
