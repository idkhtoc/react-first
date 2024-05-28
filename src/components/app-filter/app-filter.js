import './app-filter.css'

const AppFilter = (props) => {    
    const buttonsData = [
        {name: 'all', text: 'All employees'},
        {name: 'liked', text: 'On promotion'},
        {name: 'moreThan1000', text: 'Salary over $1000'}
    ];

    const buttons = buttonsData.map(({name, text}) => {
        const className = props.filter === name ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button 
                type="button"
                className={'btn ' + className}
                key={name}
                onClick={() => props.onFilterUpdate(name)}
            >
                {text}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;