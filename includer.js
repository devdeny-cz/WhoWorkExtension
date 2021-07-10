function getAllStates(){
    var statesCell = document.getElementsByClassName('grid-cell-dochazka');
    var states = [

      ];
    for (var i = 0; i < statesCell.length; i++) {
        var state = statesCell[i].innerHTML.trim();   
        if (!states.includes(state))
        {
            states.push(state);
        }
    }
    return states;
    
}

function getThForCombobox(){
    var rows = document.getElementsByClassName('filter inner');
    if (rows.length ==0) return null;

    var row = rows[0];
    return row.children[3];
}

function createStateCombobox(){
    var states = getAllStates();
    var cell = getThForCombobox();
    if (cell === null) return;
    addCombobox(states,cell);
}

function addCombobox(states, parent){
    var cbStates = document.createElement('select');
    cbStates.id = "filter-states";
    cbStates.name = "filter-states";

    var option = document.createElement('option');
    option.innerHTML = "Choose state";
    option.setAttribute("disabled", "disabled");
    cbStates.appendChild(option);
    cbStates.setAttribute("class","form-control");
cbStates.setAttribute("style","margin-top:-19px;")
    appendOption("Všeci","Všeci","state-0",cbStates);
    for (var i = 0; i < states.length; i++) {
        var state = states[i];  
        appendOption(state,state,"state-"+(i+1),cbStates);
    }
    cbStates.addEventListener('change', function () {
        chooseSelected(this.value);
    });
    parent.appendChild(cbStates);
}

function chooseSelected(wantedState)
{
    var tableUsers = document.getElementById("gridSeznam");
    if (tableUsers.children.length < 3) return;
    var tbody = tableUsers.children[2];
    if (tbody === null) return;
    var rows = tbody.children;
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row.children.length < 4) continue;
        var statecolum = row.children[3];
        var state = statecolum.innerHTML.trim();   
        if (state === wantedState || wantedState === "Všeci"){
            row.setAttribute("style","visibility: visible;");
        }
        else {
            row.setAttribute("style","visibility: collapse;");
        }
    } 
}
