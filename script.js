const form = document.querySelector("form");
ejava = form.querySelector(".grossIncome"),
eInput = ejava.querySelector("input"),
pjava = form.querySelector(".extraincome"),
pInput = pjava.querySelector("input")
hjava = form.querySelector(".deductions"),
hInput = pjava.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if grossIncome and extraincome is blank then add shake class in it else call specified function
  (eInput.value == "") ? ejava.classList.add("error") : checkgrossIncome();
  (pInput.value == "") ? pjava.classList.add("error") : checkextraincome();
  (hInput.value == "") ? hjava.classList.add("error") : checkdeductions();
  
  eInput.onkeyup = ()=>{checkgrossIncome();} //calling checkgrossIncome function on grossIncome input keyup
  pInput.onkeyup = ()=>{checkextraincome();} //calling checkextraincome function on pass input keyup
  hInput.onkeyup = ()=>{checkdeductions();}

  function checkgrossIncome(){ //checkgrossIncome function
    let pattern = "/^[0-9]+$/"; //pattern for validate grossIncome
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      ejava.classList.add("error");
      ejava.classList.remove("valid");
      let errorTxt = ejava.querySelector(".error-txt");
      //if grossIncome value is not empty then show please enter valid grossIncome else show grossIncome can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Plese enter a number" : errorTxt.innerText = "Gross annual income is your total salary in a year before any deductions";
    }else{ //if pattern matched then remove error and add valid class
      ejava.classList.remove("error");
      ejava.classList.add("valid");
    }
  }



  function checkextraincome(){ //checkPass function
    if(pInput.value == "/^[0-9]+$/"){ //if pass is empty then add error and remove valid class
      pjava.classList.add("error");
      pjava.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pjava.classList.remove("error");
      pjava.classList.add("valid");
    }
  }


  function checkdeductions(){ //checkPass function
    if(pInput.value == "/^[0-9]+$/"){ //if pass is empty then add error and remove valid class
      pjava.classList.add("error");
      pjava.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pjava.classList.remove("error");
      pjava.classList.add("valid");
    }
  }




  //if ejava and pjava doesn't contains error class that mean user filled details properly
  if(!ejava.classList.contains("error") && !pjava.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }





}

function sub() {

function calculateTax(age, income, deductions) {
  // Calculate overall income after deductions
  let overallIncome = income - deductions;

  // Determine tax rate based on age
  let taxRate;
  if (age < 40) {
      taxRate = 0.3;
  } else if (age >= 40 && age < 60) {
      taxRate = 0.4;
  } else {
      taxRate = 0.1;
  }

  // Calculate tax
  let tax = 0;
  if (overallIncome > 800000) {
      tax = taxRate * (overallIncome - 800000);
  }

  return tax;
}

// Function to prompt user for input
function getUserInput() {
  let age = parseInt(document.getElementById('age').value);
  let grossAnnualIncome = parseInt(document.getElementById('grossIncome').value);
  let deductions = parseInt(document.getElementById('deductions').value);

  return { age, grossAnnualIncome, deductions };
  console.log(age)
console.log(grossAnnualIncome )
console.log(deductions)
}

// Function to format tax amount
function formatTaxAmount(tax) {
  return tax.toFixed(2); // Format tax to two decimal places
}

// Get user input
let userInput = getUserInput();

// Calculate tax
let tax = calculateTax(userInput.age, userInput.grossAnnualIncome, userInput.deductions);

// Display tax amount

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




// let border3= document.querySelector('.border3');

// document.querySelector('#submit').onclick=()=>
// {
//   border3.classList.toggle('active');
// }



