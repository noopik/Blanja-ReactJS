import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../../atoms/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Axios } from '../../../config';
import Modal from '../Modal';
import { Button, Toast } from '../../atoms';
import { useDispatch } from 'react-redux';
import { showLoading } from '../../../redux/actions';
import { useHistory, useLocation } from 'react-router-dom';

const ProductTables = ({ dataSeller }) => {
  const history = useHistory();
  const location = useLocation();
  const [sortPrice, setSortPrice] = useState(false);
  const [sortStock, setSortStcok] = useState(false);
  const [showData, setShowData] = useState([]);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [refreshPage, setRefresh] = useState(false);
  const [deleteSelected, setDeleteSelected] = useState();
  const [editSelected, setEditSelected] = useState();

  const sortPriceAction = () => {
    sortPrice ? setSortPrice(false) : setSortPrice(true);
  };
  const sortStockAction = () => {
    sortStock ? setSortStcok(false) : setSortStcok(true);
  };
  // console.log(dataSeller);

  useEffect(() => {
    Axios.get(`/products/seller/${dataSeller.idUser}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        dispatch(showLoading(false));
        const data = res.data.data;
        console.log(data);
        setShowData(data);
      })
      .catch((err) => {
        dispatch(showLoading(false));
        console.log(err.response);
        dispatch(showLoading(true));
      });
  }, [refreshPage]);
  // console.log(showData);

  // DELETE PRODUCT HANDLING
  const validateDelete = (id) => {
    // console.log('validate delete', id);
    setShowDeleteModal(true);
    setDeleteSelected(id);
  };

  const actionDeleteProduct = () => {
    // console.log('action delete', deleteSelected);

    Axios.delete(`products/${deleteSelected}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
        setShowDeleteModal(false);
        Toast('Product deleted', 'success');
        setRefresh(true);
      })
      .catch((err) => {
        console.log(err.response);
        Toast('Error deleted', 'error');
      });
    setRefresh(false);
  };

  // EDIT PRODUCT HANDLING
  const validateEdit = (id) => {
    setShowEditModal(true);
    setEditSelected(id);
  };
  const actionEditProduct = () => {
    // console.log(editSelected);
    history.push('/admin/seller/selling', { id: editSelected });
  };

  return (
    <StyleProductTables>
      <Heading as={2} font="regular">
        Seller Stroe
      </Heading>
      <div className="body header">
        <div className="custom-row">
          <div className="col-name">
            <p className="title-column bold">Product Name</p>
          </div>
          <div className="col-desc" onClick={sortPriceAction}>
            <FilterListIcon
              className={`icon-sort ${sortPrice ? 'sort' : ''}`}
            />
            <p className="title-column bold">Price</p>
          </div>
          <div className="col-desc" onClick={sortStockAction}>
            <FilterListIcon
              className={`icon-sort ${sortStock ? 'sort' : ''}`}
            />
            <p className="title-column bold">Stock</p>
          </div>
          <div className="col-desc btn-wrapper">
            <div className="action-btn hidden">
              <EditIcon />
            </div>
            <div className="action-btn hidden">
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        {showData.length > 0 &&
          showData.map((product) => (
            <div className="custom-row">
              <div className="col-name">
                <p className="title-column">{product.nameProduct}</p>
              </div>
              <div className="col-desc">
                <p className="title-column">{product.price}</p>
              </div>
              <div className="col-desc">
                <p className="title-column">{product.stock}</p>
              </div>
              <div className="col-desc btn-wrapper">
                <div
                  className="action-btn"
                  onClick={() => validateEdit(product.id)}
                >
                  <EditIcon />
                </div>
                <div
                  className="action-btn"
                  onClick={() => validateDelete(product.id)}
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal
        showModal={showEditModal}
        closeModal={() => setShowEditModal(false)}
        title="Yakin mau dirubah?"
      >
        <ModalEdit>
          <Button onClick={() => setShowEditModal(false)}>Tidak</Button>
          <Button primary onClick={() => actionEditProduct()}>
            Ya
          </Button>
        </ModalEdit>
      </Modal>
      <Modal
        showModal={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
        title="Yakin mau dihapus"
      >
        <ModalDelete>
          <Button onClick={() => setShowDeleteModal(false)}>Tidak</Button>
          <Button primary onClick={() => actionDeleteProduct(deleteSelected)}>
            Ya
          </Button>
        </ModalDelete>
      </Modal>
      <div className="footer"></div>
    </StyleProductTables>
  );
};

export default ProductTables;

const StyleProductTables = styled.div`
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }

  .body {
    .action-btn {
      width: max-content;
      margin-right: 1rem;
    }
  }

  .custom-row {
    display: flex;
    margin-bottom: 1rem;
  }

  .col-name {
    width: 45%;
  }
  .col-desc {
    width: 25%;
    display: flex;
    &:hover {
      cursor: pointer;
    }
  }
  .btn-wrapper {
    width: 100px;
    height: 100%;
    width: max-content;
  }

  .hidden {
    visibility: hidden;
  }
  .icon-sort {
    margin-left: -2.3rem;
    margin-right: 10px;
  }
  .sort {
    transform: rotate(180deg);
  }
  .bold {
    font-weight: 600;
  }
`;

const ModalEdit = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;
const ModalDelete = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;
