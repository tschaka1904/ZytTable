import React, {Component} from 'react';
import logo from './zyttable_logo.png';
import PropTypes from 'prop-types';

class Loading extends Component {
    render() {
        return (
            <div style={{height: '100vh', width: '100vw', backgroundColor: 'white'}}>
                <img src={logo} alt='ZytTable'
                     style={{top: '50%', left: '50%', position: 'fixed', transform: 'translate(-50%, -50%)'}}/>
            </div>
        );
    }
}

Loading.propTypes = {};

export default Loading;