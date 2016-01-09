var React = require('react-native');
var {
  Text,
  View,
  Image
  } = React;


var MovieView = React.createClass({
  render: function() {
    let movie = this.props.movie;

    return (
      <View>
        <Image source={{uri: movie.posters.thumbnail}}/>

        <View>
          <Text>
            {movie.title}
          </Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
    );
  }
});

module.exports = MovieView;
