import React, { useEffect } from 'react';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  Breadcrumbs,
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
      <MainContent className="category-page">
        <SectionContent>
          <Breadcrumbs className="breadcrumbs" />
          <HeaderSection title="T-Shirt" />
          <CardGrouping />
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default CategoryPage;
