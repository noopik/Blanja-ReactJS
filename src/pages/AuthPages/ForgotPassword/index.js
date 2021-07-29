import React, { Component } from 'react';
import { BrandLogo } from '../../../components/atoms';
import { Heading } from '../../../components/atoms/Typography';
import { AuthContainer } from '../../../components/Layouts';

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      verifiedPassword: false,
    };
  }
  componentDidMount() {
    document.title = 'Reset Password';
  }

  changePassword() {
    this.setState({
      verifiedPassword: true,
    });
  }

  render() {
    // const { verifiedPassword } = this.state;

    return (
      <AuthContainer>
        <BrandLogo />
        <Heading as={3} mt={40} mb={50}>
          Reset Password
        </Heading>
      </AuthContainer>
    );
  }
}

export default ForgotPassword;
