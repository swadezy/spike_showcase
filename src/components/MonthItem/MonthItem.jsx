function MonthItem({month, setClicked}) {
    console.log('in MonthItem', month);

    const handleClick = () => {
        setClicked(month)
    }

    return(
        <li onClick={handleClick}>{month}</li>
    )
}

export default MonthItem