var React = require('react-native');
var MovieListView = require('./js/components/MovieListView/MovieListView');

var MovieAndroid = React.createClass({
  render: function() {
    return (
      <MovieListView/>
    );
  }
});

React.AppRegistry.registerComponent('HelloWorldAndroid', () => MovieAndroid);
