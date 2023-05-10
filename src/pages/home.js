import React from 'react';
import './styles/maincss/style.css';

import './utilities/downloadHandler.js';
import './utilities/buttonLoader.js';

import imageFile from './imgs/warehouse2.jpg';
import productCount from '../variables';

function HomePage() {

    let buttons = [];
    for(let bNum = 1; bNum <= productCount; bNum++) {

        let productString = "p";
        let numLen = 4 - String(bNum).length;
        for(let i = 0; i < numLen; i++) {
            productString += "0"
        }
        productString += String(bNum);

        buttons.push({
            id: productString
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
                    {button.id}
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