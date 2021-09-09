import React from 'react';
import { useSelector } from 'react-redux';
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
import { DetailProduct, HeaderProductPage } from './styled';

const ProductDetail = () => {
  // const dispatch = useDispatch();

  // let { id } = useParams();

  const { exist, data } = useSelector((state) => state.productItemReducer);
  const token = localStorage.getItem('token');
  const allProductsState = useSelector((state) => state.allProductReducer);

  // console.log('itemProductState', data);

  // useEffect(() => {
  //   dispatch(getItemProduct(id));
  // }, [id]);
  // console.log(id);
  return (
    <>
      <Navbar session={token ? 'user' : 'public'} />
      <MainContent>
        {exist && (
          <>
            <SectionContent>
              <Breadcrumbs data={data} title={data.id_category} />
              <HeaderProductPage data={data} />
              <DetailProduct data={data} />
            </SectionContent>
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
