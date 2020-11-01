import React, {Component, userState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import firebase from '../../firebase.config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {RFValue} from 'react-native-responsive-fontsize';

import auth from '@react-native-firebase/auth';

export default class Login extends Component {
  state = {
    name: '',
    pass: '',
  };

  continue = () => {};
  signIn = () => {
    // console.log(this.state.name, this.state.pass);
    auth()
      .signInWithEmailAndPassword(this.state.name, this.state.pass)
      .then((objectName) => {
        // console.log(objectName.user.uid);
        // console.log('User account created & signed in!');
        this.props.navigation.navigate('ChatScreen', {
          uid: objectName.user.uid,
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  render() {
    return (
      <ImageBackground
        source={require('../../Assets/backgroundImage.png')}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{flex: 1, top: RFValue(50), marginHorizontal: RFValue(20)}}>
            <Text
              style={{
                color: '#C8C8D0',
                fontWeight: 'bold',
                fontSize: RFValue(35),
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: RFValue(40),
                letterSpacing: RFValue(10),
              }}>
              LOGIN
            </Text>
            <Text
              style={{
                fontWeight: '800',
                fontSize: RFValue(20),
                flexDirection: 'row',
                marginHorizontal: RFValue(10),
                color: '#C8C8D0',
              }}>
              USER NAME
            </Text>
            <TextInput
              style={{
                height: RFValue(50),
                marginVertical: RFValue(5),
                fontSize: RFValue(20),
                backgroundColor: '#C5ECF4',
                borderRadius: RFValue(10),
                marginBottom: RFValue(20),
                marginHorizontal: RFValue(10),
                paddingLeft: RFValue(10),
              }}
              placeholder="Your Name"
              onChangeText={(name) => {
                this.setState({name: name});
              }}
              value={this.state.name}
            />
            <Text
              style={{
                fontWeight: '800',
                fontSize: RFValue(20),
                flexDirection: 'row',
                marginHorizontal: RFValue(10),
                color: '#C8C8D0',
              }}>
              PASSWORD
            </Text>
            <TextInput
              style={{
                height: RFValue(50),
                fontSize: RFValue(20),
                backgroundColor: '#C5ECF4',
                borderRadius: RFValue(10),
                marginVertical: RFValue(5),
                marginHorizontal: RFValue(10),
                paddingLeft: RFValue(10),
              }}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(pass) => {
                this.setState({pass: pass});
              }}
              value={this.state.pass}
            />

            <View
              style={{
                alignItems: 'flex-end',
                right: RFValue(30),
                top: RFValue(10),
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.signIn();
                }}
                style={{
                  backgroundColor: '#C5ECF4',
                  padding: RFValue(5),
                  borderTopRightRadius: RFValue(190),
                  borderBottomRightRadius: RFValue(190),
                  borderRightWidth: RFValue(20),
                  borderRightColor: '#2EB2BF',
                  borderBottomWidth: RFValue(15),
                  borderBottomColor: '#2F91AE',
                  borderTopWidth: RFValue(10),
                  borderTopColor: '#2EB2BF',
                  paddingRight: RFValue(50),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(20),
                    fontWeight: '600',
                    color: '#747385',
                    left: RFValue(10),
                  }}>
                  START
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                top: RFValue(60),
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text
                  style={{
                    color: '#C8C8D0',
                    letterSpacing: RFValue(8),
                    fontSize: RFValue(14),
                  }}>
                  CREATE ACCOUNT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({});
