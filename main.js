run = setInterval(runAll, 1000);
var setAll = false;
function runAll() {

    if (!setAll) {
        setAll = true;
        createStateCombobox();
    }

}




// var css = 
// 'select#cbProjectLabels, select#cbTaskTo, select#cbState {'
// +'padding: 3px 4px 3px 5px;'
// +'background-color: #fff;'
// +'color: #2e2e2e;'
// +'font-size: 14px;'
// +'text-align: left;'
// +'border: 1px solid #5e5e5e;'
// +'border-radius: 3px;'
// +'white-space: nowrap;'
// +'}'
// +'\n.qa-noteable-note-item{background:rgb(245,245,245);}'
// ;


// head = document.head || document.getElementsByTagName('head')[0],
//     style = document.createElement('style');

// style.type = 'text/css';
// if (style.styleSheet) {
//     // This is required for IE8 and below.
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

// head.appendChild(style);






