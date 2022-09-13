import React from 'react';
import './App.css';

function Guitar(props) {
    
    console.log(props);

    return <div>
        
        <h1>{props.name}</h1><br></br>
        <span><img src={props.foto}></img></span>

        <br></br>
        <br></br>
        
        Цена: <span>{props.cena}</span> рублей<br></br>

    </div>;
}



export default Guitar;