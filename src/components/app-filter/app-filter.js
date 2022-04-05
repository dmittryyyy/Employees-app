import "./app-filter.css";

const AppFilter = (props) => {
    const btnData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salaryMore1000', label: 'З/П больше 1000$'}
    ];

    const btn = btnData.map(({ name, label }) => {
        const active = props.filter === name;

        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type='button'
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {btn}
        </div>
    );
}

export default AppFilter;