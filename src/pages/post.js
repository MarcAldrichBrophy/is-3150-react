import React from 'react';
import './styles/outlyingcss/style.css';
import {useNavigate} from 'react-router-dom';

// import Papa from "papaparse";


// const csvmaker = function (data) {
//   console.log("Creating CSV...");

//   const csvString = [
//       [
//         "Product ID",
//         "Quantity"
//       ],
//       ...data
//       .filter(item => item.qty > 0)
//       .map(item => [item.productId, item.qty])
//     ]
//      .map(e => e.join(",")) 
//      .join("\n");
  
//   return csvString;
// }

// function syncToSharepoint() {
//   console.log("Syncing to sharepoint.");
//   const siteUrl = "https://redhawks.sharepoint.com/sites/IS3150GP";
//   const listName = "list-test";

//   const productsURL = "https://7ofe4vwhj7.execute-api.us-west-2.amazonaws.com/prod/products";
//   const HTTP = new XMLHttpRequest();
//   HTTP.open("GET", productsURL);
//   HTTP.send();

//   HTTP.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200) {
//       const data = HTTP.responseText;
//       const jsonData = JSON.parse(data);
//       const csvData = csvmaker(jsonData.products);
//       const parsedData = Papa.parse(csvData, { header: true }).data;

//       parsedData.forEach((item) => {
//       const endpointUrl = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
//       const headers = {
//           "Content-Type": "application/json",
//       };
//       const body = JSON.stringify(item);

//       fetch(endpointUrl, {
//           method: "POST",
//           headers: headers,
//           body: body,
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error(error));
//       });
//       console.log("Posted.");
//     }
//   }
  
// }

function PostPage() {
    const navigate = useNavigate();

    // syncToSharepoint();

    return (
      <div className="outlyDiv">
        <div id="container">
            <h1>Item Posted</h1>
            <button id="backButton" onClick={() => navigate(-1)} >Go Back</button>
        </div>
      </div>
    );
}
export default PostPage;