import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../../atoms';
import { FooterWrapper } from './styled';

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <FooterWrapper>
        <div className="container-wrapper">
          <div className="body">
            <div className="company">
              <BrandLogo className="logo" />
              <p>Memenuhi kebutuhan hidup Anda dan keluarga</p>
            </div>
            <div className="navigation">
              <ul>
                <li className="nav-title">Tentang kami</li>
                <Link to="#" className="anchor">
                  <li>Lorem lorem</li>
                </Link>
              </ul>
              <ul>
                <li className="nav-title">Melayani</li>
                <Link to="#" className="anchor">
                  <li>Lorem lorem</li>
                </Link>
              </ul>
              <ul>
                <li className="nav-title">Career</li>
                <Link to="#" className="anchor">
                  <li>Lorem lorem</li>
                </Link>
              </ul>
            </div>
          </div>

          <p className="foot">
            Copyright 2021 - All rights reserved - Blanja.com
          </p>
        </div>
      </FooterWrapper>
    );
  }
}

Footer.propTypes = {};

export default Footer;
