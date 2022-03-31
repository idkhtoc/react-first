/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import nextId from 'react-id-generator';

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
            data: []
        }
    }

    deleteItem = id => {
        this.setState(({data}) => {
            // const index = data.findIndex(el => el.id === id),
            //       before = data.slice(0, index),
            //       after = data.slice(index + 1),
            //       newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            };
        });
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            return {
                data: data.concat({name, salary, increase: false, id: nextId()})
            };
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;