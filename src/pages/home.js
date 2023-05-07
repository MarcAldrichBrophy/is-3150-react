import React from 'react';
import './styles/maincss/style.css';

import './utilities/downloadHandler.js';
import imageFile from './imgs/warehouse.jpg';
import productCount from '../variables';

function HomePage() {

    let buttons = [];
    for(let bNum = 1; bNum <= productCount; bNum++) {
        buttons.push({
            id: bNum
        })
    }

    return (
      <div className="mainDiv">
        
        <div id="mainHeader">
            <h1>IS-3150 Warehouse</h1>
        </div>

        <div id="itemList">
            {buttons.map((button) => (
                <a className="productButton" href={"./" + button.id} key={button.id}>
                    Product{button.id}
                </a>
            ))}
        </div>

        <button id="downloadButton">Download Database as CSV</button>

        <div id="backgroundImage">
            <img src={imageFile} draggable="false"  alt=""/>
        </div>
      </div>
    );
}
export default HomePage;