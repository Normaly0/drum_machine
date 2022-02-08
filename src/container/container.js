import React from 'react';
import Drum_Machine from '../components/drum_machine';

import styles from './container.scss';

class Container extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <div className = 'container-box'>
                    <div className = 'title'>
                        <h1>Drum Machine</h1>
                    </div>
                    <div className = 'machine'>
                        <Drum_Machine />
                    </div>
                    <p className = 'container-box-credit'>Coded by Normaly</p>
                </div>
            </div>
        )
    }
}

export default Container;