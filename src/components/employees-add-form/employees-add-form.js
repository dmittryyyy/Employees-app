import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name: '',
           salary: '' 
        }
    }

    onValueChanges = (e) => {
        this.setState({
           [e.target.name] : e.target.value //скобки для записи составного св-ва в объект
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length < 3 || !this.state.salary) {
            return
        } else {

        } 
        
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Введите имя сотрудника"
                        name='name'
                        value={name}
                        onChange={this.onValueChanges}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChanges}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;