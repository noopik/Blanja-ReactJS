/* eslint-disable react-hooks/exhaustive-deps */
import * as moment from 'moment';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { moneyFormatter } from '../../../utils';
// import { Button } from '../../atoms';
import { customMedia } from '../../Layouts';
import Modal from '../Modal';

const OrderTables = ({ data }) => {
  const [sortPrice, setSortPrice] = useState(false);
  const [sortStock, setSortStcok] = useState(false);
  // const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [deleteSelected, setDeleteSelected] = useState();

  const sortPriceAction = () => {
    sortPrice ? setSortPrice(false) : setSortPrice(true);
  };
  const sortStockAction = () => {
    sortStock ? setSortStcok(false) : setSortStcok(true);
  };
  // DELETE PRODUCT HANDLING
  // const validateDelete = (id) => {
  //   // console.log('validate delete', id);
  //   setShowDeleteModal(true);
  //   setDeleteSelected(id);
  // };

  // const actionDeleteProduct = () => {
  //   // Axios.delete(`products/${deleteSelected}`, {
  //   //   headers: { Authorization: `Bearer ${token}` },
  //   // })
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //     setShowDeleteModal(false);
  //   //     Toast('Product deleted', 'success');
  //   //     setRefresh(true);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err.response);
  //   //     Toast('Error deleted', 'error');
  //   //   });
  //   // setRefresh(false);
  // };

  // EDIT PRODUCT HANDLING
  // const validateEdit = (id) => {
  // setShowEditModal(true);
  // setEditSelected(id);
  // };
  // const actionEditProduct = () => {
  //   // // console.log(editSelected);
  //   // history.push(`/admin/seller/selling/${editSelected}`);
  // };

  return (
    <StyleOrderTables>
      <div className="body header">
        <div className="custom-row">
          <div className="col-name">
            <p className="title-column bold">Product Name</p>
          </div>
          <div className="col-desc" onClick={sortPriceAction}>
            {/* <FilterListIcon
              className={`icon-sort ${sortPrice ? 'sort' : ''}`}
            /> */}
            <p className="title-column bold">Total Price</p>
          </div>
          <div className="col-desc" onClick={sortStockAction}>
            {/* <FilterListIcon
              className={`icon-sort ${sortStock ? 'sort' : ''}`}
            /> */}
            <p className="title-column bold">Quantity</p>
          </div>
          <div className="col-desc" onClick={sortStockAction}>
            {/* <FilterListIcon
              className={`icon-sort ${sortStock ? 'sort' : ''}`}
            /> */}
            <p className="title-column bold">Date Checkout</p>
          </div>
          <div className="col-desc" onClick={sortStockAction}>
            {/* <FilterListIcon
              className={`icon-sort ${sortStock ? 'sort' : ''}`}
            /> */}
            <p className="title-column bold">Status</p>
          </div>
        </div>
      </div>
      <div className="body">
        {data.length > 0 &&
          data.map((item) => (
            <div className="custom-row">
              <div className="col-name">
                <p className="title-column">{item.nameProduct}</p>
              </div>
              <div className="col-desc">
                <p className="title-column">
                  Rp. {moneyFormatter.format(item.price)}
                </p>
              </div>
              {/* <div className="col-desc">
                <p className="title-column">{item.stock}</p>
              </div> */}
              <div className="col-desc">
                <p className="title-column">{item.quantity}</p>
              </div>
              <div className="col-desc">
                <p className="title-column">
                  {moment(item.orderDate).format('DD/MM/YYYY')}
                </p>
              </div>
              <div className="col-desc">
                <p className="title-column">{item.statusOrder}</p>
              </div>
            </div>
          ))}
      </div>
      {/* <Modal
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
      </Modal> */}
      <Modal
        showModal={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
        title="Yakin mau dihapus"
      >
        {/* <ModalDelete>
          <Button onClick={() => setShowDeleteModal(false)}>Tidak</Button>
          <Button primary onClick={() => actionDeleteProduct(deleteSelected)}>
            Ya
          </Button>
        </ModalDelete> */}
      </Modal>
      <div className="footer"></div>
    </StyleOrderTables>
  );
};

export default OrderTables;

const StyleOrderTables = styled.div`
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  ${customMedia.lessThan('737px')`
    overflow: scroll;
  `}
  .body {
    min-width: 600px;
    ${customMedia.lessThan('737px')`
      overflow-x: scroll;
    `}
    .custom-row {
      display: flex;
      margin-bottom: 1rem;
      .col-name {
        width: 225px;
      }
      .col-desc {
        flex: auto;
        display: flex;
        p {
          width: 100%;
          text-align: center;
        }
        &:hover {
          cursor: pointer;
        }
        .icon-sort {
          margin-left: -2.3rem;
          margin-right: 10px;
          &.sort {
            transform: rotate(180deg);
          }
        }
      }
    }
    &.header {
      .col-desc {
        .title-column {
        }
      }
    }
  }
  .bold {
    font-weight: 600;
  }
`;

// const ModalEdit = styled.div`
//   padding: 1rem;
//   display: flex;
//   gap: 1rem;
// `;
// const ModalDelete = styled.div`
//   padding: 1rem;
//   display: flex;
//   gap: 1rem;
// `;
