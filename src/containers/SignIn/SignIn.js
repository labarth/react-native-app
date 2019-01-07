import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {NavigationActions} from 'react-navigation'

class SignIn extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  // isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   this.setState({ isLoginScreenPresented: !isSignedIn });
  // };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await this.setState({ userInfo }, () => {
        this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'NotesList' }));
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
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
