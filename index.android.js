/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var InfiniteScrollView = require('react-native-infinite-scroll-view');
var {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  Image
  } = React;


var HelloWorldAndroid = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      countMovies: 0,
      loaded: false
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
    var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
    var PAGE_SIZE = this.state.countMovies + 15;
    var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
    var REQUEST_URL = API_URL + PARAMS;

    return fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          countMovies: PAGE_SIZE,
          totalMovies: responseData.total,
          loaded: true
        });
      });
  },
  onLoadMore: function() {
    return this.fetchData();
  },
  canLoadMore: function() {
    return this.state.totalMovies > this.state.countMovies;
  },
  render: function() {
    var styles = HelloWorldAndroid.styles;
    var movies = this.state.movies;

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        renderScrollComponent={props => <InfiniteScrollView {...props} />}
        onLoadMoreAsync={this.onLoadMore}
        canLoadMore={this.canLoadMore()}
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
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
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
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
