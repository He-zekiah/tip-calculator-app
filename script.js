const info = document.getElementById('info');
const btns = document.querySelectorAll('.click');
const option = document.getElementById('change');
const info2 = document.getElementById('info2');
const refresh = document.getElementById('reset');
let amount = document.getElementById("amount");
let total = document.getElementById("total");
let billAmt = document.getElementById('billAmt');
let people = document.getElementById('numPple');
let bill;
let numOfPeople;

// check for minimum and maximum character
// const isBetween = (length, max) => length < max ? false : true;

info.addEventListener("change", function (e) {
    bill = e.target.value.trim();
});

info2.addEventListener("change", function (e) {
    numOfPeople = e.target.value.trim();
});

const calculateTip = (num) => {
    const tipPerPerson = parseFloat((num / 100) * parseInt(bill));
    const totalPerPerson = (num / 100) * (parseInt(bill) * parseInt(numOfPeople));
    amount.innerText = isNaN(tipPerPerson) ? `$0.00` : `$${(tipPerPerson).toFixed(2)}`;
    total.innerText = isNaN(totalPerPerson) ? `$0.00` : `$${(totalPerPerson).toFixed(2)}`;
}

const checkError = () => {
    if (info.value.trim() === '') {
        billAmt.innerText = "Can't be blank";
        info.classList.add('error');
    } else {
        billAmt.innerText = '';
        info.classList.remove('error');
    };
    if (info2.value.trim() === '') {
        people.innerText = "Can't be blank";
        info2.classList.add('error');
    } else {
        people.innerText = '';
        info2.classList.remove('error');
    };
};

btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        checkError();
        const num = parseInt(btn.innerText.replace(/%/g, ""));
        calculateTip(num);

    })
});

option.addEventListener('input', (e) => {
    checkError();
    let num = e.target.value.trim();
    calculateTip(num);
});

refresh.addEventListener('click', () => {
    amount.innerText = `$0.00`;
    total.innerText = `$0.00`;
    info.value = '';
    info2.value = '';
    info.classList.remove('error');
    info2.classList.remove('error');
    billAmt.innerText = '';
    people.innerText = '';
    option.value = '';
});

