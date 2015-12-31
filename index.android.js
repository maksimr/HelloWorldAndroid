/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var MOCKED_MOVIES_DATA = [{
  title: 'Title',
  year: '2015',
  posters: {
    thumbnail: 'http://i.imgur.com/UePbdph.jpg'
  }
}];

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
  } = React;

var HelloWorldAndroid = React.createClass({
  render: function() {
    var styles = HelloWorldAndroid.styles;
    var movie = MOCKED_MOVIES_DATA[0];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{movie.title}</Text>
        <Text style={styles.instructions}>{movie.year}</Text>
        <Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}}/>
      </View>
    );
  }
});

HelloWorldAndroid.styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});

AppRegistry.registerComponent('HelloWorldAndroid', () => HelloWorldAndroid);
