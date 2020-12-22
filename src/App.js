import React, {Component} from 'react';
import './App.css';
import Form from './components/Form/Form';
import TableForm from './components/TableForm/TableForm';
import axios from './axios-order';


class App extends Component {
    debugger
    state={
        person:[]
    }
    componentDidMount() {
        axios.post('users')
            .then(response => {
                this.setState({})
            })
    }

    onSubmitHandler= (value)=> {
        this.setState({person: value});
    }
  render(){
    return(
        <div>
          <Form  clicked={this.onSubmitHandler}/>
          <TableForm />
        </div>
    )
  }
}

export default App;