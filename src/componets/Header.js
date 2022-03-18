

function Header(props) {
  
  if (props.name === '') {
    return (
      <header className="App-header">
          <h1>Open Cal</h1>
      </header>
    );
  } else if (props.name === 'motor') {
    return (
      <header className="App-header">
          <h3>Open Cal</h3>
          <h1>Motors</h1>
      </header>
    );
  } else if (props.name === 'projector') {
    return (
      <header className="App-header">
          <h3>Open Cal</h3>
          <h1>Projector</h1>
      </header>
    );
  }
    
}

export default Header