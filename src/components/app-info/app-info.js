import './app-info.css';

const AppInfo = props => {
    const {allCount, increasedCount} = props;
    
    return (
        <div className="app-info">
            <h1>Employee records in company N</h1>
            <h2>Total number of employees: {allCount}</h2>
            <h2>Will receive a bonus: {increasedCount}</h2>
        </div>
    );
}

export default AppInfo;