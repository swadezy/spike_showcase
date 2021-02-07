function Header({clicked}) {
    console.log('in Header');
    return (
        < header className="App-header" >
            <h1 className="App-title">Select a Month</h1>
            <h3>{clicked}</h3>
        </header >
    )
}

export default Header