import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { getCurrentUser } from './redux/auth/actions';

console.disableYellowBox = true;

const mapDispatchToProps = (dispatch) => ({
  getCurrentUserAction: (navigation) => dispatch(getCurrentUser(navigation)),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends PureComponent {
  componentWillMount() {
     GoogleSignin.hasPlayServices({
      autoResolve: true,
      showPlayServicesUpdateDialog: true,
    });
     GoogleSignin.configure({
      webClientId: '7857104875-h1bfv8be1raf9c9ahi3rt3u5c93vejjc.apps.googleusercontent.com',
    });

    this.props.getCurrentUserAction(this.props.navigation);
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#e0f3fd'}}>
        {this.props.auth.get('loading') ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      </View>
    );
  }
}

export { App };
