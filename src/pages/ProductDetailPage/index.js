import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardProduct, Loader } from '../../components/atoms';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  Breadcrumbs,
  CardGrouping,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { getItemProduct } from '../../redux/actions';
import { typeRedux } from '../../utils';
import { DetailProduct, HeaderProductPage } from './styled';

const ProductDetail = () => {
  let { id } = useParams();
  const { exist, data } = useSelector((state) => state.productItemReducer);
  const token = localStorage.getItem('token');
  const allProductsState = useSelector((state) => state.allProductReducer);

  const dispatch = useDispatch();
  // console.log('itemProductState', data);

  useEffect(() => {
    // dispatch(getItemProduct(id));
    // dispatch({
    //   type: typeRedux.setChooseProductId,
    //   value: id,
    // });
  }, []);

  return (
    <>
      <Navbar session={token ? 'user' : 'public'} />
      <MainContent>
        {exist && (
          <SectionContent>
            <Breadcrumbs data={data} title={data.id_category} />
            <HeaderProductPage data={data} />
            <DetailProduct data={data} />
          </SectionContent>
        )}
        {!exist && (
          <>
            <Loader line />
          </>
        )}
        <SectionContent className="section">
          <HeaderSection title="New" subTitle="You’ve never seen it before!" />
          <CardGrouping>
            {allProductsState.exist &&
              allProductsState?.data.map((item) => (
                <Item key={item.id}>
                  <CardProduct
                    title={item.nameProduct}
                    image={item.imageProduct}
                    price={item.price}
                    store="Zalora"
                    idProduct={item.id}
                  />
                </Item>
              ))}
            {!allProductsState.exist && <Loader line />}
          </CardGrouping>
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default ProductDetail;
