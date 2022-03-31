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
            data: [
                {name: 'Jack D.', salary: 1200, increase: false, like: false, id: nextId()},
                {name: 'Abby S.', salary: 800, increase: false, like: false, id: nextId()},
                {name: 'Ger F.', salary: 1800, increase: false, like: false, id: nextId()}
            ],
            term: '',
            filter: ''
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
                data: data.concat({name, salary, increase: false, like: false, id: nextId()})
            };
        });
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(el => el.id === id),
        //           oldItem = data[index],
        //           newItem = {...oldItem, [prop]: !oldItem[prop]},
        //           newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newData
        //     };
        // });

        this.setState(({data}) => ({
            data: data.map(item => {
                return item.id === id ? {...item, [prop]: !item[prop]} : item;
            })
        }));
    }

    searchedEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    filteredEmployees = (items, filter) => {
        switch (filter) {
            case 'liked':
                return items.filter(item => item.like);

            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);

            default:
                return items;
        }
    }

    onSearchUpdate = term => {
        this.setState({term});
    }

    onFilterUpdate = filter => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state,
              allCount = this.state.data.length,
              increasedCount = this.state.data.filter(item => item.increase).length,
              visibleData = this.filteredEmployees((this.searchedEmployees(data, term)), filter);

        return (
            <div className="app">
                <AppInfo
                    allCount={allCount}
                    increasedCount={increasedCount}
                />

                <div className="search-panel">
                    <SearchPanel
                        onSearchUpdate={this.onSearchUpdate}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterUpdate={this.onFilterUpdate}
                    />
                </div>

                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;