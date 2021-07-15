import React from 'react';
import { Breadcrumbs, Navbar } from '../../components/molecules';
import { MainContent, SectionContent } from '../../components/Layouts';
import { DetailProduct, HeaderProductPage } from './styled';

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <SectionContent>
          <Breadcrumbs />
          <HeaderProductPage />
          <DetailProduct />
        </SectionContent>
      </MainContent>
    </>
  );
};

export default ProductDetail;
