import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainContent, SectionContent } from '../../components/Layouts';
import { Breadcrumbs, Navbar } from '../../components/molecules';
import { Axios } from '../../config';
import { DetailProduct, HeaderProductPage } from './styled';

const ProductDetail = () => {
  let { id } = useParams();
  const [dataProduct, setDataProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  useEffect(() => {
    setIsLoading(true);
    Axios.get(`/products/${id}`)
      .then((result) => {
        const resdata = result.data.data;
        console.log(2525, resdata);
        setDataProduct(resdata[0]);
        document.title = resdata[0].nameProduct;
        setIsLoading(false);
      })
      .catch((err) => err);
    setIsLoading(false);
  }, [id]);

  console.log(1111, dataProduct);

  return (
    <>
      <Navbar />
      <MainContent>
        <SectionContent>
          <Breadcrumbs data={dataProduct} title={dataProduct.id_category} />
          <HeaderProductPage data={dataProduct} />
          <DetailProduct data={dataProduct} />
        </SectionContent>
      </MainContent>
    </>
  );
};

export default ProductDetail;
