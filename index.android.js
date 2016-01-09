var React = require('react-native');
var MovieListView = require('./js/components/MovieListView/MovieListView');
var MovieView = require('./js/components/MovieView/MovieView');
var Navigator = React.Navigator;

var MovieAndroid = React.createClass({
  render: function() {
    var initialRoute = {
      location: 'movies',
      data: null
    };

    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this.renderScene}
      />
    );
  },
  renderScene: function(route, navigator) {
    switch (route.location) {
      case 'movie':
        let movie = route.data;

        return (
          <MovieView movie={movie}/>
        );

      default:
        return (
          <MovieListView navigator={navigator}/>
        );
    }
  }
});

React.AppRegistry.registerComponent('HelloWorldAndroid', () => MovieAndroid);
