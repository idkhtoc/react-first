/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
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
                {name: 'John S.', salary: 700, id: 1},
                {name: 'Alex T.', salary: 3000, id: 2},
                {name: 'Abby G.', salary: 5000, id: 3}
            ]
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
                <EmployeesAddForm/>
            </div>
        );
    }
}

export default App;