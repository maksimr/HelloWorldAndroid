/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  View,
  Text
  } = React;


var HelloWorldAndroid = React.createClass({
  render: function() {
    let initialRoute = {
      name: 'First Page',
      index: 0
    };

    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this.renderScene}
      />
    );
  },
  renderScene: function(route, navigator) {
    return (
      <View style={{flexDirection: 'row', padding: 20}}>
        {this.renderBackButton(route, navigator)}

        <Text style={{flex: 1, textAlign: 'center'}}>
          {route.name} - {route.index}
        </Text>

        {this.renderForwardButton(route, navigator)}
      </View>
    );
  },
  renderBackButton: function(route, navigator) {
    let onBack = function() {
      if (route.index > 0) {
        navigator.pop();
      }
    };

    if (!route.index) {
      return (
        <Text>
        </Text>
      );
    }

    return (
      <Text onPress={onBack}
            style={{backgroundColor: 'blue', color: 'white'}}>
        Back
      </Text>
    );
  },
  renderForwardButton: function(route, navigator) {
    let nextIndex = route.index + 1;
    let onForward = function() {
      navigator.push({
        name: 'Page ' + nextIndex,
        index: nextIndex
      });
    };

    return (
      <Text onPress={onForward}
            style={{backgroundColor: 'green', color: 'white'}}>
        Next
      </Text>
    );
  }
});

AppRegistry.registerComponent('HelloWorldAndroid', () => HelloWorldAndroid);
