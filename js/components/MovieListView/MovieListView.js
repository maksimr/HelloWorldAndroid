var React = require('react-native');
var MovieListStyle = require('./MovieListView.style');
var MovieStore = require('../../stores/MovieStore');
var {
  ListView,
  Text,
  View,
  Image
  } = React;


var MovieListView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    return MovieStore.getAll().then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        loaded: true
      });
    });
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={MovieListStyle.listView}
      />
    );
  },
  renderLoadingView: function() {
    return (
      <View style={MovieListStyle.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },
  renderMovie: function(movie) {
    return (
      <View style={MovieListStyle.container}>
        <Image style={MovieListStyle.thumbnail} source={{uri: movie.posters.thumbnail}}/>

        <View style={MovieListStyle.rightContainer}>
          <Text style={MovieListStyle.title}>{movie.title}</Text>
          <Text style={MovieListStyle.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
});

module.exports = MovieListView;
