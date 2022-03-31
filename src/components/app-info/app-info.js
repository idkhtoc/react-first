import './app-info.css';

const AppInfo = props => {
    const {allCount, increasedCount} = props;
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allCount}</h2>
            <h2>Премию получат: {increasedCount}</h2>
        </div>
    );
}

export default AppInfo;