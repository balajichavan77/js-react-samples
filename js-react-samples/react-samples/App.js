import './App.css';

function formatName(user){
    return user.firstName +" " +user.lastName
}
function App() {
    const name = 'Mahesh';
    const age = 21;

    const user = {
        firstName:'Mahesh',
        lastName:'CHAVAN'
    };
    return ( 
    <div>
        <h2>Welcome to React Js</h2> 
        <h1>Welcome {name}</h1>
        <h2>{name} is {age} years old</h2>
        <h2>Hello {formatName(user)}</h2>
        </div> 
    );
}

export default App;