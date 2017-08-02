import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Header title="Tech Stack"/>
                </View>
            </Provider>
        )
    };
};

export default App;