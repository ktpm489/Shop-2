/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View
		} from 'react-native';

class Mine extends Component {

	  render() {
			return (
					<View><Text>Mine</Text></View>
			);
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			flexDirection:'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
	  },

});
module.exports=Mine