import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Scene,
    Router,
    Actions
} from 'react-native-router-flux';

import PageA from './PageA.js'
import PageB from './PageB.js'
import PageC from './PageC.js'

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="PageA" initial component={PageA} title="PageA" />
        <Scene key="PageB" component={PageB} title="PageB" />
        <Scene key="PageC" component={PageC} title="PageC" />
    </Scene>
);

class App extends React.Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default App;