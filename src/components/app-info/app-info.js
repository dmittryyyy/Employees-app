import "./app-info.css";

const AppInfo = ({employees, increase, rise}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сторудников: {employees}</h2>
            <h2>Премированные сотрудники: {increase}</h2>
            <h2>Сотрудники идущие на повышение: {rise}</h2><span className="subTitle">(для повышения кликните на имя сотрудника)</span>
        </div>
    )
}

export default AppInfo;