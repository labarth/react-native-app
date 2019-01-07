import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { NavigationActions } from 'react-navigation';

console.disableYellowBox = true;

class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    auth: {
      loading: true,
      user: null,
    }
  }

  componentWillMount() {
     GoogleSignin.hasPlayServices({
      autoResolve: true,
      showPlayServicesUpdateDialog: true,
    });
     GoogleSignin.configure({
      webClientId: '7857104875-h1bfv8be1raf9c9ahi3rt3u5c93vejjc.apps.googleusercontent.com',
    });
    this.getCurrentUserInfo();
  }

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({
        auth: {
          user: userInfo,
          loading: false
        }
      }, () => {
        this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'NotesList' }));
      });
    } catch (error) {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'SignIn' }));
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#e0f3fd'}}>
        {this.state.auth.loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      </View>
    );
  }
}

export { App };
