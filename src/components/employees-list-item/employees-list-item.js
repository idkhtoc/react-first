import { Component } from 'react';

import classNames from 'classnames';

import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        };
    }
    
    onLike = () => {
        this.setState(({like})=> ({like: !like}));
    }

    onIncrease = () => {
        this.setState(({increase}) => ({increase: !increase}));
    }

    render() {
        const {name, salary} = this.props;
        const {increase, like} = this.state;

        let className = classNames(
            "list-group-item d-flex justify-content-between", 
            {increase: increase, like: like}
        );
    
        return (
            <li className={className}>
                <span 
                    className="list-group-item-label" 
                    onClick={this.onLike}
                >
                    {name}
                </span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + '$'}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmployeesListItem;