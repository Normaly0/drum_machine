import React from 'react';

import styles from './drum_machine.scss';

class Drum_Machine extends React.Component {
    render() {
        return (
            <div className = 'drum-panel'>
                <div className = 'upper-panel'>
                    <div className = 'display' />
                    <div className = 'volume-panel'>
                        <button type = 'button' className = 'volume-button'></button>
                    </div>
                </div>
                <div className = 'lower-panel'>
                    <div className = 'drum-pad'>
                        <button type = 'button' value = 'Q'>Q</button>
                        <button type = 'button' value = 'W'>W</button>
                        <button type = 'button' value = 'E'>E</button>
                        <button type = 'button' value = 'A'>A</button>
                        <button type = 'button' value = 'S'>S</button>
                        <button type = 'button' value = 'D'>D</button>
                        <button type = 'button' value = 'Z'>Z</button>
                        <button type = 'button' value = 'X'>X</button>
                        <button type = 'button' value = 'C'>C</button>
                    </div>
                    <div className = 'switch-panel'>
                        <button type = 'button'>Switch</button>
                        <button type = 'button'>Switch</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Drum_Machine;