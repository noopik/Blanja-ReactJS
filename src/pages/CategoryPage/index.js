import React, { useEffect } from 'react';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  CardGrouping,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';

const CategoryPage = () => {
  useEffect(() => {
    document.title = 'Blanja | T-Shirt';
  });

  return (
    <>
      <Navbar session="user" />
      <MainContent>
        <SectionContent>
          <HeaderSection title="T-Shirt" />
          <CardGrouping />
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default CategoryPage;
