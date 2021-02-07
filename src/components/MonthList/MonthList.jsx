import MonthItem from '../MonthItem/MonthItem.jsx'

function MonthList({monthItems, setClicked}) {
    console.log('in MonthList with', monthItems);
    return (
        <ul>
            {monthItems.map((month) => (
                <MonthItem
                    key={month.id}
                    month={month.name}
                    setClicked={setClicked}
                />
            ))}
        </ul>
    )
}


export default MonthList