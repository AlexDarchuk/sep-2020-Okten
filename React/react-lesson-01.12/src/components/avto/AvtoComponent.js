import React, {Component} from 'react';
import './Avto.css';

class AvtoComponent extends Component {
    render () {
        let {value} = this.props;
        return (
            <div className = {'car'}>
                {<h3>{value.production}-{value.power}-{value.color}-{value.year}-{value.status.toString()}</h3>}        
            </div>
        )
    }
}

export default AvtoComponent;