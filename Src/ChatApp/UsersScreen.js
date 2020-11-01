import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from '../../firebase.config';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class UsersScreen extends Component {
  state = {
    items: [],
  };
  componentWillMount() {
    const {uid} = auth().currentUser.uid;
    var usersRef = database().ref('/users/' + uid);
    usersRef.once('value').then((snapshot) => {
      items = snapshot.val();
    });
  }
  render() {
    const {items} = this.state;
    return (
      <View>
        <Text style={styles.name}>{items.nombre}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
