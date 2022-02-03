import React from 'react';

import styles from './drum_machine.scss';


class Drum_Machine extends React.Component {
    render() {

        const sounds = [
            {
                value: 'Q',
                key: 'KeyQ',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                name: 'Heater-1'
            },
            {
                value: 'W',
                key: 'KeyW',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                name: 'Heater-2'
            },
            {
                value: 'E',
                key: 'KeyE',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                name: 'Heater-3'
            },
            {
                value: 'A',
                key: 'KeyA',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                name: 'Heater-4'
            },
            {
                value: 'S',
                key: 'KeyS',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                name: 'Clap'
            },
            {
                value: 'D',
                key: 'KeyD',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                name: 'Open-HH'
            },
            {
                value: 'Z',
                key: 'KeyZ',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                name: 'Kick-n\'-Hat'
            },
            {
                value: 'X',
                key: 'KeyX',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                name: 'Kick'
            },
            {
                value: 'C',
                key: 'KeyC',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
                name: 'Closed-HH'
            }
        ]

        document.addEventListener('keypress', checkKey);


        function checkKey(e) {
            let currentKey = e.code

            if (sounds.some(element => element.key === currentKey)) {
                let obj = sounds.find(obj => obj.key === currentKey);
                let sound = new Audio(obj.src);
                sound.play();
            }
            
        }


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
                        <button type = 'button' className = 'KeyQ'>Q</button>
                        <button type = 'button' id = 'KeyW'>W</button>
                        <button type = 'button' id = 'KeyE'>E</button>
                        <button type = 'button' id = 'KeyA'>A</button>
                        <button type = 'button' id = 'KeyS'>S</button>
                        <button type = 'button' id = 'KeyD'>D</button>
                        <button type = 'button' id = 'KeyZ'>Z</button>
                        <button type = 'button' id = 'KeyX'>X</button>
                        <button type = 'button' id = 'KeyC'>C</button>
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

