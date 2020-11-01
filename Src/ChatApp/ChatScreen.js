import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

export default class ChatScreen extends Component {
  state = {
    uid: this.props.navigation.getParam('uid') || '',
    messages: [],
  };
  componentDidMount() {
    this.loadMessage();
  }

  loadMessage = () => {
    firestore()
      .collection('messages')
      // .orderBy('time')
      .onSnapshot((doc) => {
        let arr = [];
        doc.docs.forEach((snap) => {
          console.log(snap._data);
          arr.push({
            text: snap._data.text,
            _id: this.randomMessageIdGenerator(),
            createdAt: new Date(snap._data.time),
            user: {
              _id: snap._data.user,
            },
          });

          // console.log(arr);
          this.setState({
            messages: arr.reverse(),
          });
        });
      });
  };

  saveTOFireStore = (message) => {
    firestore()
      .collection('messages')
      .add({
        text: message,
        time: new Date().toString(),
        user: this.state.uid,
      })
      .then(() => {
        console.log('message added to firebase');
      });
  };

  onSend = (message = []) => {
    this.saveTOFireStore(message[0].text);
    // this.setState((previousState) => ({
    //   messages: GiftedChat.append(previousState.messages, message),
    // }));
  };

  randomMessageIdGenerator = () => {
    let length = 6;
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  render() {
    return (
      <View style={{flex: 1}} key={this.state.messages}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: this.state.uid,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
