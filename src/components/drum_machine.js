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
            sound: '',
            volume: 0.5
        };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.checkKey = this.checkKey.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.revertBackground = this.revertBackground.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
    };

    handleSwitch(e) {
        if(e.target.checked === true) {
            document.addEventListener('keypress', this.checkKey);
            document.addEventListener('keydown', this.changeBackground);
            document.addEventListener('keyup', this.revertBackground);
        } else {
            document.removeEventListener('keypress', this.checkKey);
            document.removeEventListener('keydown', this.changeBackground);
            document.removeEventListener('keyup', this.revertBackground);
        }
    }

    checkKey(e) {
        let currentKey = e.code

        if (sounds.some(element => element.key === currentKey)) {
            let obj = sounds.find(obj => obj.key === currentKey);
            this.setState({
                sound: new Audio(obj.src)
            })
            this.state.sound.volume = this.state.volume;
            this.state.sound.play();
            document.getElementById('display-text').innerHTML = obj.name
        } 
    }

    handleClick(e) {
        if (document.getElementById('switch').checked === true) {
            let obj = sounds.find(obj => obj.key === e.target.id);
            this.setState({
                sound: new Audio(obj.src)
            }, this.handleClickPlay)

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

    handleClickPlay() {
        this.state.sound.volume = this.state.volume;
        this.state.sound.play();
    }

    changeBackground(e) {
        if (document.getElementById(e.code) === null) {
            return
        } else {
            document.getElementById(e.code).style.backgroundColor = 'rgb(126, 103, 29)';
        }
    }

    revertBackground(e){
        if (document.getElementById(e.code) === null) {
            return
        }   else {
            document.getElementById(e.code).style.backgroundColor = 'rgb(206, 168, 45)';
        }
    }

    changeVolume(e) {
        this.setState({
            volume: e.target.value
        })
    }

    render(){
        return (
            <div className = 'drum-panel'>
                <div className = 'upper-panel'>
                    <div className = 'display' id = 'display'>
                        <div className = 'display-text' id = 'display-text' />
                    </div>
                    <div className = 'volume-panel'>
                        <input 
                            onChange={this.changeVolume}
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
                        <button type = 'button' id = 'KeyQ' onClick = {this.handleClick}>Q</button>
                        <button type = 'button' id = 'KeyW' onClick = {this.handleClick}>W</button>
                        <button type = 'button' id = 'KeyE' onClick = {this.handleClick}>E</button>
                        <button type = 'button' id = 'KeyA' onClick = {this.handleClick}>A</button>
                        <button type = 'button' id = 'KeyS' onClick = {this.handleClick}>S</button>
                        <button type = 'button' id = 'KeyD' onClick = {this.handleClick}>D</button>
                        <button type = 'button' id = 'KeyZ' onClick = {this.handleClick}>Z</button>
                        <button type = 'button' id = 'KeyX' onClick = {this.handleClick}>X</button>
                        <button type = 'button' id = 'KeyC' onClick = {this.handleClick}>C</button>
                    </div>
                    <div className = 'switch-panel'>
                        <p>Power</p>
                        <div className = 'switch-box'>
                            <input 
                                className = 'switch' 
                                id = 'switch'
                                type = 'checkbox'
                                onClick = {this.handleSwitch}
                                />
                            <label
                                htmlFor = 'switch'
                                className = 'toggle'/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Drum_Machine;