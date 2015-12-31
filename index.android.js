/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
  } = React;


var HelloWorldAndroid = React.createClass({
  getInitialState: function() {
    return {
      movies: null
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies
        });
      });
  },
  render: function() {
    var movies = this.state.movies;

    if (!movies) {
      return this.renderLoadingView();
    }

    return this.renderMovie(movies[0]);
  },
  renderLoadingView: function() {
    var styles = HelloWorldAndroid.styles;

    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },
  renderMovie: function(movie) {
    var styles = HelloWorldAndroid.styles;

    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}}/>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
});


HelloWorldAndroid.styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});

AppRegistry.registerComponent('HelloWorldAndroid', () => HelloWorldAndroid);
