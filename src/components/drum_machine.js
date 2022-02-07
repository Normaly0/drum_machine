import React from 'react';

import styles from './drum_machine.scss';

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


class Drum_Machine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange() {

    }

    render() {

        
        let sound = ''
        let volume = 0.5       

        function handleSwitch(e) {
            if(e.target.checked === true) {
                document.addEventListener('keypress', checkKey);
                document.addEventListener('keydown', changeBackground);
                document.addEventListener('keyup', revertBackground);
            } else {
                document.removeEventListener('keypress', checkKey);
                document.removeEventListener('keydown', changeBackground);
                document.removeEventListener('keyup', revertBackground);
            }
        }


        function checkKey(e) {
            let currentKey = e.code

            if (sounds.some(element => element.key === currentKey)) {
                let obj = sounds.find(obj => obj.key === currentKey);
                sound = new Audio(obj.src);
                sound.volume = volume;
                sound.play();
                document.getElementById('display-text').innerHTML = obj.name
            } 
        }

        function handleClick(e) {
            if (document.getElementById('switch').checked === true) {
                let obj = sounds.find(obj => obj.key === e.target.id);
                sound = new Audio(obj.src);
                sound.volume = volume;
                sound.play();
                document.getElementById('display-text').innerHTML = obj.name;
                function hightLight(obj) {
                    let el = document.getElementById(obj.key)
                    let original = el.style.backgroundColor;
                    el.style.backgroundColor = 'rgb(126, 103, 29)';
                    setTimeout(function() {
                        el.style.backgroundColor = original;
                    }, 50)
                }
                hightLight(obj)
            }
        }

        function changeVolume(e) {
            volume = e.target.value
        }

        function changeBackground(e) {
            if (document.getElementById(e.code) === null) {
                return
            } else {
                document.getElementById(e.code).style.backgroundColor = 'rgb(126, 103, 29)';
            }
        }

        function revertBackground(e){
            if (document.getElementById(e.code) === null) {
                return
            }   else {
                document.getElementById(e.code).style.backgroundColor = 'rgb(206, 168, 45)';
            }
        }

        return (
            <div className = 'drum-panel'>
                <div className = 'upper-panel'>
                    <div className = 'display' id = 'display'>
                        <div className = 'display-text' id = 'display-text' />
                    </div>
                    <div className = 'volume-panel'>
                        <input 
                            onChange={changeVolume}
                            max = '1'
                            min = '0'
                            step = '0.01'
                            type = 'range'
                            className = 'volume-slider'
                            id = 'volume-slider'/>
                    </div>
                </div>
                <div className = 'lower-panel'>
                    <div className = 'drum-pad' id = 'drum-pad'>
                        <button type = 'button' id = 'KeyQ' onClick = {handleClick}>Q</button>
                        <button type = 'button' id = 'KeyW' onClick = {handleClick}>W</button>
                        <button type = 'button' id = 'KeyE' onClick = {handleClick}>E</button>
                        <button type = 'button' id = 'KeyA' onClick = {handleClick}>A</button>
                        <button type = 'button' id = 'KeyS' onClick = {handleClick}>S</button>
                        <button type = 'button' id = 'KeyD' onClick = {handleClick}>D</button>
                        <button type = 'button' id = 'KeyZ' onClick = {handleClick}>Z</button>
                        <button type = 'button' id = 'KeyX' onClick = {handleClick}>X</button>
                        <button type = 'button' id = 'KeyC' onClick = {handleClick}>C</button>
                    </div>
                    <div className = 'switch-panel'>
                        <p>Power</p>
                        <div className = 'switch-box'>
                            <input 
                                className = 'switch' 
                                id = 'switch'
                                type = 'checkbox'
                                onClick = {handleSwitch}
                                />
                            <label
                                for = 'switch'
                                className = 'toggle'/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Drum_Machine;