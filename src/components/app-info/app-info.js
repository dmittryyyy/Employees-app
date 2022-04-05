import "./app-info.css";

const AppInfo = ({employees, increase}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сторудников: {employees}</h2>
            <h2>Премированные сотрудники: {increase}</h2>
        </div>
    )
}

export default AppInfo;