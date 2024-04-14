const form = document.querySelector("form");
ejava = form.querySelector(".grossIncome"),
eInput = ejava.querySelector("input"),
pjava = form.querySelector(".extraincome"),
pInput = pjava.querySelector("input")
hjava = form.querySelector(".deductions"),
hInput = pjava.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  
  (eInput.value == "") ? ejava.classList.add("error") : checkgrossIncome();
  (pInput.value == "") ? pjava.classList.add("error") : checkextraincome();
  (hInput.value == "") ? hjava.classList.add("error") : checkdeductions();
  
  eInput.onkeyup = ()=>{checkgrossIncome();} 
  pInput.onkeyup = ()=>{checkextraincome();} 
  hInput.onkeyup = ()=>{checkdeductions();}

  function checkgrossIncome(){ 
    let pattern = ""; 
    if(!eInput.value.match(pattern)){ 
      ejava.classList.add("error");
      ejava.classList.remove("valid");
      let errorTxt = ejava.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "Plese enter a number" : errorTxt.innerText = "Gross annual income is your total salary in a year before any deductions";
    }else{ 
      ejava.classList.remove("error");
      ejava.classList.add("valid");
    }
  }



  function checkextraincome(){ 
    if(pInput.value == ""){ 
      pjava.classList.add("error");
      pjava.classList.remove("valid");
    }else{ 
      pjava.classList.remove("error");
      pjava.classList.add("valid");
    }
  }


  function checkdeductions(){ 
    if(pInput.value == ""){ 
      pjava.classList.add("error");
      pjava.classList.remove("valid");
    }else{ 
      pjava.classList.remove("error");
      pjava.classList.add("valid");
    }
  }




  
  if(!ejava.classList.contains("error") && !pjava.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }





}

function sub() {

function calculateTax(age, income, deductions) {
  
  let overallIncome = income - deductions;

 
  let taxRate;
  if (age < 40) {
      taxRate = 0.3;
  } else if (age >= 40 && age < 60) {
      taxRate = 0.4;
  } else {
      taxRate = 0.1;
  }

  
  let tax = 0;
  if (overallIncome > 800000) {
      tax = taxRate * (overallIncome - 800000);
  }

  return tax;
}


function getUserInput() {
  let age = parseInt(document.getElementById('age').value);
  let grossAnnualIncome = parseInt(document.getElementById('grossIncome').value);
  let deductions = parseInt(document.getElementById('deductions').value);

  return { age, grossAnnualIncome, deductions };
  console.log(age)
console.log(grossAnnualIncome )
console.log(deductions)
}


function formatTaxAmount(tax) {
  return tax.toFixed(2); 
}

let userInput = getUserInput();

let tax = calculateTax(userInput.age, userInput.grossAnnualIncome, userInput.deductions);



document.getElementById('rel').innerHTML=formatTaxAmount(tax);

let border3= document.querySelector('.border3');

document.querySelector('#submit').onclick=()=>
{
  border3.classList.toggle('active');
}
document.querySelector('#button').onclick=()=>
{
  border3.classList.remove('active');
}

}




