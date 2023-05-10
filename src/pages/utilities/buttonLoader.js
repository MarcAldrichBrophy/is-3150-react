import $ from 'jquery';

$(document).ready(function() {
    if(document.getElementById("itemList")) {
        console.log("Found list.");
        var items = $('#itemList a');
        var index = 0;
        
        function showNextItem() {
            // console.log(index);
            $(items[index]).fadeIn(100);
            $(items[index]).css('text-align', 'center');
            index++;
            if (index < items.length) {
                setTimeout(showNextItem, 100); // change delay time as needed
            }
        }
        
        showNextItem();
    }
});