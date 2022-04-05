import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Скрипник С.К', salary: 1000, increase: false, rise: false, id: 1 },
                { name: 'Иванов И.В', salary: 700, increase: false, rise: false, id: 2 },
                { name: 'Салагаева А.Е', salary: 700, increase: false, rise: false, id: 3 },
                { name: 'Болдов Н.К', salary: 1000, increase: false, rise: false, id: 4 },
                { name: 'Железняков Д.М.', salary: 800, increase: false, rise: false, id: 5 },
                { name: 'Артемьева Л.И', salary: 1000, increase: false, rise: false, id: 6 }
            ],
            term: '',
            filter: 'all'
        }
        this.newId = 7;
    }

   addItem = (name, salary) => {
       const newItem = {
           name,
           salary,
           increase: false,
           rise: false,
           id: this.newId++
       }
       this.setState(({data}) => {
           const newArray = [...data, newItem];
           return {
               data: newArray
           }
       });
   }

    deleteItem = (id) => {
        this.setState(({ data }) => {

            const newArray = data.filter(elem => elem.id !== id);

            return {
                data: newArray
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    dataFilter = (items, filter) => {
       switch(filter) {
            case 'rise':
               return items.filter(item => item.rise);
            case 'salaryMore1000':
                return items.filter(item => item.salary >= 1000);
            default:
                return items
       }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const rise = this.state.data.filter(item => item.rise).length;
        const visibleData = this.dataFilter(this.searchEmployee(data, term), filter);

        return (
            <div className='app'>
                <AppInfo 
                employees={employees}
                increase={increase}
                rise={rise}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;