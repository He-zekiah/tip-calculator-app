const info = document.getElementById('info');
const btns = document.querySelectorAll('.click');
const option = document.getElementById('change');
const info2 = document.getElementById('info2');
const refresh = document.getElementById('reset');
let amount = document.getElementById("amount");
let total = document.getElementById("total");
let bill;
let numOfPeople;

info.addEventListener("change", function (e) {
  bill =  e.target.value.trim();
});
console.log(bill);

info2.addEventListener("change", function(e) {
    numOfPeople = e.target.value.trim();
});



const calculateTip = (num) => {
    const tipPerPerson = parseFloat((num / 100) * parseInt(bill));
    const totalPerPerson = (num / 100) * (parseInt(bill) * parseInt(numOfPeople));
    console.log(tipPerPerson, totalPerPerson, num);
    amount.innerText = `${tipPerPerson}.00` || `$0.00`;
    total.innerText = `${totalPerPerson}.00` || `$0.00`;
}

btns.forEach((btn) => {
btn.addEventListener("click", function () {
    const num = parseInt(btn.innerText.replace(/%/g, ""));
    calculateTip(num);

})
});

