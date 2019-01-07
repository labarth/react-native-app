import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { GoogleSigninButton } from 'react-native-google-signin';
import { signInGoogle } from '../../redux/auth/actions';

const mapDispatchToProps = (dispatch) => ({
  signInGoogleAction: (navigation) => dispatch(signInGoogle(navigation)),
})

@connect(null, mapDispatchToProps)
class SignIn extends PureComponent {

  signIn = () => {
    this.props.signInGoogleAction(this.props.navigation);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f3fd' }}>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
      </View>
    );
  }
}

export { SignIn };
