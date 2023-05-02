import React from 'react';
import './styles/css/style.css';
import './utilities/gatewayHandler.js';

function Page(props) {
  return (
    <div id="productDiv">

      <div id="titleDiv">
        <h1>Product Cataloger</h1>
        <h2>{props.title}</h2>
      </div>
    
      <h3 id="dataAmount">Quantity in database: loading...</h3>

      <div id="form">
          <label for="fname">Quantity:</label><br></br>
          <input type="text" id="inputVal" name="fname"></input><br></br>
          <button id="submitButton">Submit</button>
      </div>

      <a href="/home" id="homeButton">home</a>
    </div>
  );
}

export default Page;