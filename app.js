const inputBtn = document.querySelector('#btn');
const virtualKeybrd = document.querySelector('.keyboard');
const alpha = document.querySelectorAll('#letter');
let input = document.querySelector('#inputBar')
const backSpace = document.querySelector('#backspace');
const capsLock = document.querySelector('#capslock');
const shift = document.querySelector('#shift');
const shift_2 = document.querySelector('#shift_2');
const control = document.querySelector('#control');
const control_2 = document.querySelector('#control_2');
const num_Symb = document.querySelectorAll('#num-sym');
const spaceBar = document.querySelector('#spaceBar');
const clearAll = document.querySelector('#clear');


// btn for virtual keyboard
inputBtn.addEventListener('click', e => {
    if (virtualKeybrd.style.display === 'block') {
        virtualKeybrd.style.display = 'none'
        inputBtn.textContent = 'Keyboard'
    }
    else {
        virtualKeybrd.style.display = 'block';
        inputBtn.textContent = 'cancel'
    }
})

// for copy & paste value..
input.addEventListener('mouseup', e => {
    window.copy = window.getSelection().toString();
})

// for capslock btn
capsLock.addEventListener('click', e => {
    if (capsLock.innerHTML === '<span>' + 'caps lock On' + '</span>') {
        capsLock.style.background = '#093002'
        capsLock.innerHTML = '<span>' + 'caps lock' + '</span>'
    }
    else {
        capsLock.style.background = '#208922'
        capsLock.innerHTML = '<span>' + 'caps lock On' + '</span>'
    }
})

// for backSpace btn
backSpace.addEventListener('click', e => {
    let values = input.value;
    input.value = '';
    for (let i = 0; i < values.length - 1; i++) {
        input.value += values[i]
    }
})

// for shift btns
shift.addEventListener('click', event => {
    if (shift.innerHTML === '<span>' + 'Shift On' + '</span>') {
        shift_2.style.background = '#093002'
        shift_2.innerHTML = '<span>' + 'Shift' + '</span>'
        shift.style.background = '#093002'
        shift.innerHTML = '<span>' + 'Shift' + '</span>'
    }
    else {
        shift_2.style.background = '#208922'
        shift_2.innerHTML = '<span>' + 'Shift On' + '</span>'
        shift.style.background = '#208922'
        shift.innerHTML = '<span>' + 'Shift On' + '</span>'
    }
})
shift_2.addEventListener('click', event => {
    if (shift_2.innerHTML === '<span>' + 'Shift On' + '</span>') {
        shift.style.background = '#093002'
        shift.innerHTML = '<span>' + 'Shift' + '</span>'
        shift_2.style.background = '#093002'
        shift_2.innerHTML = '<span>' + 'Shift' + '</span>'
    }
    else {
        shift.style.background = '#208922'
        shift.innerHTML = '<span>' + 'Shift On' + '</span>'
        shift_2.style.background = '#208922'
        shift_2.innerHTML = '<span>' + 'Shift On' + '</span>'

    }
})

// for number & symbols btns
for (let i = 0; i < num_Symb.length; i++) {
    num_Symb[i].addEventListener('click', e => {
        if (shift.innerHTML === '<span>' + 'Shift On' + '</span>' || shift_2.innerHTML === '<span>' + 'Shift On' + '</span>') {
            let symbol = num_Symb[i].firstElementChild.textContent;
            input.value += symbol;
        }
        else {
            let symbol = num_Symb[i].children[1].textContent;
            input.value += symbol;
        }
    })
}

// for spaceBar btn
spaceBar.addEventListener('click', e => {
    input.value += " ";
})

// for shift btns
control.addEventListener('click', event => {
    if (control.innerHTML === '<span>' + 'Control On' + '</span>') {
        control_2.style.background = '#093002'
        control_2.innerHTML = '<span>' + 'Control' + '</span>'
        control.style.background = '#093002'
        control.innerHTML = '<span>' + 'Control' + '</span>'
    }
    else {
        control_2.style.background = '#208922'
        control_2.innerHTML = '<span>' + 'Control On' + '</span>'
        control.style.background = '#208922'
        control.innerHTML = '<span>' + 'Control On' + '</span>'
    }
})
control_2.addEventListener('click', event => {
    if (control_2.innerHTML === '<span>' + 'Control On' + '</span>') {
        control.style.background = '#093002'
        control.innerHTML = '<span>' + 'Control' + '</span>'
        control_2.style.background = '#093002'
        control_2.innerHTML = '<span>' + 'Control' + '</span>'
    }
    else {
        control.style.background = '#208922'
        control.innerHTML = '<span>' + 'Control On' + '</span>'
        control_2.style.background = '#208922'
        control_2.innerHTML = '<span>' + 'Control On' + '</span>'
    }
})

// for alphabet btn
for (let i = 0; i < alpha.length; i++) {
    alpha[i].addEventListener('click', e => {

        //  capslock command
        if (capsLock.innerHTML === '<span>' + 'caps lock On' + '</span>') {
            input.value += alpha[i].textContent;
        }

        //  Ctrl command
        else if (control.innerHTML === '<span>' + 'Control On' + '</span>' || control_2.innerHTML === '<span>' + 'Control On' + '</span>') {
            
            if (alpha[i].textContent === 'C') {
                window.copied = copy;
                const alert = document.createElement('div')
                alert.className = "alert alert-warning"
                // div.style.backgroundColor="red"
                alert.style.margin = "3vh 25vw"
                alert.appendChild(document.createTextNode('"' + copy + '"' + '  is copied'))
                const keybrd_row = document.querySelector('.keyboard__row')
                virtualKeybrd.insertBefore(alert, keybrd_row)
                setTimeout(() => {
                    alert.remove();
                }, 1700);
            }
            else if (alpha[i].textContent === 'V') {
                input.value += copied
            }
        }

        // nrml keypress
        else {
            let letter = alpha[i].textContent.toLowerCase();
            input.value += letter;
        }
    })
}
// for clearing Input-field
clearAll.addEventListener('click', e => {
    input.value = '';
})

// media-queries
let keybrd_row=document.querySelector('.keyboard__row')
let media=window.matchMedia('(max-width:776px)')
media.addEventListener('change',e=>{
   keybrd_row.firstElementChild.style.display='inline-block'

})
let media2=window.matchMedia('(min-width:775px)')
media2.addEventListener('change',e=>{
   keybrd_row.firstElementChild.style.display='none';
})
