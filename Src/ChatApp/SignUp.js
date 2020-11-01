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
import auth from '@react-native-firebase/auth';
import {RFValue} from 'react-native-responsive-fontsize';

export default class SignUp extends Component {
  state = {
    email: '',
    pass: '',
  };

  signUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.pass)
      .then(() => {
        this.props.navigation.navigate('Login');
        console.log('User account created');
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
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../Assets/backgroundImage1.png')}
          style={{flex: 1}}>
          <View style={{flex: 1, top: 40, marginHorizontal: 20, top: 100}}>
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
              SIGNUP
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
              placeholder="Your Email"
              onChangeText={(email) => {
                this.setState({email: email});
              }}
              value={this.state.email}
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
                alignItems: 'center',
                top: RFValue(10),
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.signUp();
                }}
                style={{
                  backgroundColor: '#C5ECF4',
                  padding: RFValue(5),
                  borderRadius: RFValue(90),
                  borderLeftWidth: RFValue(15),
                  borderLeftColor: '#2F91AE',
                  borderRightWidth: RFValue(15),
                  borderRightColor: '#2F91AE',
                  borderBottomWidth: RFValue(18),
                  borderBottomColor: '#2EB2BF',
                  borderTopWidth: RFValue(15),
                  borderTopColor: '#2EB2BF',
                  paddingRight: RFValue(10),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(20),
                    fontWeight: '600',
                    color: '#777685',
                    flexDirection: 'row',
                    left: RFValue(3),
                  }}>
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
