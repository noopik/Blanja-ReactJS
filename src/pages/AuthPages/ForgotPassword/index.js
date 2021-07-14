import React, { Component } from 'react';
import { BrandLogo, Button, FormInput } from '../../../components/atoms';
import { Heading, Text } from '../../../components/atoms/Typography';
import { AuthContainer } from '../../../components/Layouts';
import {
  AuthFooter,
  AuthForgotPassword,
  FormGroup,
} from '../../../components/molecules';

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
    const { verifiedPassword } = this.state;

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
