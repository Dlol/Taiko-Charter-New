document.getElementById("subLabel").innerHTML = document.getElementById("subdivision").value
function subUpd(val) {
    document.querySelector("#subLabel").innerHTML = val
}
var sliderVal;
setupButtonAmt(document.getElementById("subdivision").value)
function setupButtonAmt(val) {
    drums = []
    sliderVal = val
    let dons = document.getElementById("drums")
    dons.innerHTML = ""
    sizes = []
    for (let x = 0; x < val; x++) {
        dons.innerHTML += `<div class="drum">
                                <input type="checkbox" name="drum${x}" class="chekbok">
                                <label for="drum${x}" onclick="set(${x})" id="drum${x}"><img src="greys.svg" class="drums"></label>
                            </div>`;
    }
}
var drums = []
var sizes = []
var outArr = []
var type = 0
function set(id) {
    switch (type) {
        case 0:
            drums[id] = drums[id] ? drums[id] + 1 : 1
            if (drums[id] > 2) {
                drums[id] = 0
            }
            changeimage(id)
            break

        case 1:
            sizes[id] = sizes[id] ? 0 : 1
            changeimage(id)
            break
        default:
            break;
    }
}

function changeimage(id) {
    if (sizes[id] == 1) {
        switch (drums[id]) {
            case 1:
                document.getElementById(`drum${id}`).children[0].setAttribute("src","don.svg")
                break;
            
            case 2:
                document.getElementById(`drum${id}`).children[0].setAttribute("src","ka.svg")
                break;
        
            default:
                document.getElementById(`drum${id}`).children[0].setAttribute("src","grey.svg")
            
        }
        return 0;
    }
    switch (drums[id]) {
        case 1:
            document.getElementById(`drum${id}`).children[0].setAttribute("src","dons.svg")
            break;
        
        case 2:
            document.getElementById(`drum${id}`).children[0].setAttribute("src","kas.svg")
            break;
    
        default:
            document.getElementById(`drum${id}`).children[0].setAttribute("src","greys.svg")
        
    }
}

function changetype(typee) {
    type = typee
    switch (typee) {
        case 0:
            document.getElementById('typeshow').innerHTML = "TOOL: Drums"
            break;
        
        case 1:
            document.getElementById('typeshow').innerHTML = "TOOL: Size"
            break;

        default:
            document.getElementById('typeshow').innerHTML = "UH OH THERE HAS BEEN AN ERROR THAT SUCKS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            break;
    }
}

function upOut() {
    var out = [];
    for (let x = 0; x < sliderVal; x++) {
        if (!drums) {
            out[x] = 0
        }
        else{
            out[x] = drums[x]
        }
        if (sizes[x] && drums[x]) {
            out[x] += (sizes[x] * 2)
        }
        if (!out[x]) {
            out[x] = 0
        }
    }
    outArr.push(out.join(''))
    document.getElementById("outputList").innerHTML += `<div id="arrDiv${outArr.length}">
    <input type='radio' name='sel' value='${outArr.length}' id='arr${outArr.length}'>
    ${out.join('')},</div>`
}
function deleteSelected() {
    outArr.splice(document.querySelector('input[name="sel"]:checked').value, 1)
    document.getElementById("outputList").innerHTML = ""
    outArr.forEach((element, index) => {
        document.getElementById("outputList").innerHTML += `<div id="arrDiv${index}">
        <input type='radio' name='sel' value='${index}' id='arr${index}'>
        ${element},</div>`
    });
}
function change() {
    var out = [];
    for (let x = 0; x < sliderVal; x++) {
        if (!drums) {
            out[x] = 0
        }
        else{
            out[x] = drums[x]
        }
        if (sizes[x] && drums[x]) {
            out[x] += (sizes[x] * 2)
        }
        if (!out[x]) {
            out[x] = 0
        }
    }
    var id =document.querySelector('input[name="sel"]:checked').value
    document.getElementById(`arrDiv${id}`).innerHTML = `<input type='radio' name='sel' value='${id}' id='arr${id}'>
    ${out.join('')},`
}
function clr() {
    document.getElementById("outputList").innerHTML = "";
    outArr = []
}