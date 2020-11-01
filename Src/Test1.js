import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Test2 from './Test2';

export default class Test1 extends Component {
  state = {
    name: 'athar',
  };

  changeName = () => {
    this.setState({
      name: 'juuuuuu',
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text>{this.state.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Test2', {
              changeName: this.changeName,
            })
          }>
          <Text style={{color: 'red', backgroundColor: 'black'}}>
            Next Page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
