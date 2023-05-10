import $ from 'jquery';

const fadeDelay = 100
window.onload = function() {
    if(document.getElementById("itemList")) {
        console.log("Found list.");
        var items = $('#itemList a');
        var index = 0;
        
        function showNextItem() {
            $(items[index]).fadeIn(fadeDelay);
            $(items[index]).css('text-align', 'center');
            index++;
            if (index < items.length) {
                setTimeout(showNextItem, fadeDelay);
            }
        }
        
        showNextItem();
    }
}