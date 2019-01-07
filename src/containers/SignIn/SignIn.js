import React, { PureComponent } from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

class SignIn extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    isSigninInProgress: null,
  }

  componentWillMount() {
    GoogleSignin.hasPlayServices({
      autoResolve: true,
      showPlayServicesUpdateDialog: true,
    });
    GoogleSignin.configure({
      webClientId: '7857104875-h1bfv8be1raf9c9ahi3rt3u5c93vejjc.apps.googleusercontent.com',
    });
  }

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'userInfo');
      this.setState({ userInfo });
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

  handlePress = () => {
    console.log(this.state);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#e0f3fd' }}>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

export { SignIn };
