import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FooterWrapper } from './styled';
import { BrandLogo } from '../../atoms';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <FooterWrapper>
        <div className="body container">
          <div className="company">
            <BrandLogo className="logo" />
            <p>We kaboom your beauty holiday instalty and memorable.</p>
          </div>
          <div className="navigation">
            <ul>
              <li className="nav-title">New Account</li>
              <Link to="#" className="anchor">
                <li>New Account</li>
              </Link>
              <Link to="#" className="anchor">
                <li>New Account</li>
              </Link>
            </ul>
            <ul>
              <li className="nav-title">New Account</li>
              <Link to="#" className="anchor">
                <li>New Account</li>
              </Link>
              <Link to="#" className="anchor">
                <li>New Account</li>
              </Link>
            </ul>
            <ul>
              <li className="nav-title">New Account</li>
              <Link to="#" className="anchor">
                <li>New Account</li>
              </Link>
              <Link to="#" className="anchor">
                <li>New Account</li>
              </Link>
            </ul>
          </div>
        </div>

        <p className="foot">
          Copyright 2021 - All rights reserved - Blanja.com
        </p>
      </FooterWrapper>
    );
  }
}

Footer.propTypes = {};

export default Footer;
