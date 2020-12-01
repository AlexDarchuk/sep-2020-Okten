import React, {Component} from 'react';
import AvtoComponent from './components/avto/AvtoComponent';

class App extends Component {

  avto = [
    {production: 'toyota', power: 67, color: 'black', year: 2010, status: true},
    {production: 'mazda', power: 86, color: 'gray', year: 2015, status: true},
    {production: 'opel', power: 90, color: 'red', year: 2013, status: true},
    {production: 'bmw', power: 70, color: 'black', year: 2009, status: true},
    {production: 'citroen', power: 83, color: 'gray', year: 2017, status: true},
    {production: 'renault', power: 97, color: 'red', year: 2019, status: true},
    {production: 'honda', power: 80, color: 'black', year: 2000, status: true},
    {production: 'kia', power: 65, color:'gray', year: 2016, status: true},
    {production: 'audi', power: 91, color: 'red', year: 2004, status: true},
    {production: 'mercedes', power: 100, color: 'black', year: 2017, status: true}
      ];

  render () {
    return (
      <div>
       {
          this.avto.map((value, index) => {
            return (<AvtoComponent value = {value} key={index}/>)
          })
       }
      </div>
    );
  }
}

export default App;