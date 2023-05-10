
const download = function (data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
 
    a.setAttribute('href', url)
    a.setAttribute('download', 'productAmounts.csv');

    a.click()
}

const csvmaker = function (data) {
    console.log("Creating CSV...");

    const csvString = [
        [
          "Product ID",
          "Quantity"
        ],
        ...data
        .filter(item => item.qty > 0)
        .map(item => [item.productId, item.qty])
      ]
       .map(e => e.join(",")) 
       .join("\n");
    
    return csvString;
}

function downloadCSV() {
    const productsURL = "https://7ofe4vwhj7.execute-api.us-west-2.amazonaws.com/prod/products";
    const HTTP = new XMLHttpRequest();
    HTTP.open("GET", productsURL);
    HTTP.send();

    HTTP.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            const data = HTTP.responseText;
            const jsonData = JSON.parse(data);
            const csvdata = csvmaker(jsonData.products);
            download(csvdata);
        }
    }
}

window.onload = function() {
    if(document.getElementById("downloadButton")) {
        document.getElementById("downloadButton").onclick = function() {downloadCSV()};
    }
}