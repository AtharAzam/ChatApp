import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Test2 extends Component {
  //   changeName = () => {
  //     this.setState({
  //       name: 'Ghazi',
  //     });
  //   };
  render() {
    const changeName = this.props.navigation.getParam('changeName');
    console.log(JSON.stringify(this.props.navigation));
    return (
      <View>
        {/* <TouchableOpacity onPress={changeName}>
          <Text style={{color: 'black', backgroundColor: 'red'}}>
            change state
          </Text>
          <Test2 PropPass={true} />
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({});
