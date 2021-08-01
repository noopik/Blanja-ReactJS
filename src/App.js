import React, { Component } from 'react';
import { Routes } from './config';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { ScreenLoading } from './components/atoms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <ScreenLoading />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    );
  }
}
