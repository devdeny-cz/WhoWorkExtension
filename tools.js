
function cbToDefault(selectbox) {
    selectbox.selectedIndex = 0;
}

function appendOption(showText, value, optionName, parent) {
    var option = document.createElement('option');
    option.id = optionName;
    option.name = optionName;
    option.value = value;
    option.innerHTML = showText;
    parent.appendChild(option);
}


