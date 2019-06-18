import React, {Component} from 'react';
import logo from './zyttable_logo.png'

class Loading extends Component {
    render() {
        return (
            <div style={{height: '100vh', width: '100vw', backgroundColor: 'white', top: '50%', left: '50%'}}>
                <img style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }} src={logo}/>
            </div>
        );
    }
}

Loading.propTypes = {};

export default Loading;
