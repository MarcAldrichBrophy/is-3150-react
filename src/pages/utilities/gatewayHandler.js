
function loadPage() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const productNumber = page.match(/\d+/)[0];
    
    // Gets data based on page viewed.
    const prodVal = "https://7ofe4vwhj7.execute-api.us-west-2.amazonaws.com/prod/product?productId=" + productNumber;
    const HTTP = new XMLHttpRequest();
    HTTP.open("GET", prodVal);
    HTTP.send();
    
    HTTP.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            const data = HTTP.responseText;
            const jsonData = JSON.parse(data);
            document.getElementById("dataAmount").textContent = "Quantity in database: " + jsonData.qty;
        }
        else if(this.readyState === 4 && this.status !== 200) {
            document.getElementById("dataAmount").textContent = "Quantity in database: None";
        }
    }
    
    function productPost(total) {
        const productStore = "https://7ofe4vwhj7.execute-api.us-west-2.amazonaws.com/prod/product";
        const postProductReq = new XMLHttpRequest();
        postProductReq.open("POST", productStore);
        postProductReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
        postProductReq.send(JSON.stringify(
            {
                "productId": productNumber, 
                "qty": total
            } 
        ));
    
        postProductReq.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                document.location.href = "/post";
            }
            else if(this.readyState === 4 && this.status !== 200) {
                document.location.href = "/postError";
            }
        }
    }
    

    function getResult(total, getProdReq) {
        if(!Number.isInteger(total)) {
            console.log("invalid input.");
            document.location.href = "/postError";
            return;
        }
        if(getProdReq.readyState === 4 && getProdReq.status === 200) {
               
            const data = getProdReq.responseText;
            const jsonData = JSON.parse(data);

            if(parseInt(jsonData.qty) && Number.isInteger(total)) { //  Good input, good data.
                total = total + parseInt(jsonData.qty);
            }
            productPost(total);
        }
        else if(getProdReq.readyState === 4 && getProdReq.status === 404) {
            console.log("Posting 404");
            productPost(total);
        }
    }
    
    // Function grabs product data, then adds to requested amount.
    function submitClick() {
        console.log("attempting to post.");
        // Get request to obtain data of specified product.
        const getProdReq = new XMLHttpRequest();
        getProdReq.open("GET", prodVal);
        getProdReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        getProdReq.send();
    
        // Waits for request to process.
        getProdReq.onreadystatechange = function() {
            let total = Number(document.getElementById("inputVal").value);
            getResult(total, getProdReq);
        }
    }
    document.getElementById("submitButton").onclick = function() {submitClick()};
    
    // Refresh history traversal.
    window.addEventListener( "pageshow", function ( event ) {
        var historyTraversal = event.persisted || 
            ( typeof window.performance != "undefined" && 
                window.performance.navigation.type === 2 );
        if ( historyTraversal ) {
          // Handle page restore.
          window.location.reload();
        }
      });
}

function checkPage() {
    if(document.getElementById("productDiv")) {
        console.log("Div found." + window.location);
        loadPage();
    } else {
        console.log("div not found.");
    }
}

setTimeout(checkPage, 1000);
