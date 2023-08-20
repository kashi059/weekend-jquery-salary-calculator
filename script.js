$(document).ready(readyNow);
//setup 
function readyNow() {
// $(submitButton).on(click){

// }

// on click were gonna run a function
// save input fields 
// assign them as either .text or .val to the table
//${use these where you can} interpolation
//

//This is the on click section
$ ('#submitButton').on('click', transferEntry)

$('#mainTable').on('click','.remove', removeEntry);


}

let sumOfAnnualSalaryInput = 0


function transferEntry (event){
//this prevents default settings
    event.preventDefault();

    console.log ('transferEntry function is running');
    //target input element by ID
    //get the value of the text input

//DEFINING INPUTS
let firstNameInput =  $('#firstName').val(); 
let lastNameInput = $('#lastName').val();
let idInput = $('#id').val();
let titleInput = $('#title').val();
let annualSalaryInput = $('#annualSalary').val();
//its a number so do we need to do anything with this?^
//same for id (NOPE)

// setting up the things to go in
let addTableRow = `
    <tr id="insertionPoint">
        <td class="firstNameStyle">${firstNameInput}</td>
        <td class="lastNameInputStyle">${lastNameInput}</td>
        <td class="idInputStyle">${idInput}</td>
        <td class="titleInputStyle">${titleInput}</td>
        <td class="annualSalaryInputStyle">$${annualSalaryInput}</td>
        <td>
            <button class = "remove">
                <img class = imgOfRemove src="removeEntryButton.png" alt="Remove this section">
            </button>
        </td>
    </tr>`;
//inserts the delete button



$('#firstName').val('');
$('#lastName').val('');
$('#id').val('');
$('#title').val('');
$('#annualSalary').val('');



//THIS SECTION IS NEEDED BUT BROKE EVERYTHING************************************

//Make annualSalaryInput a string 

// let makeStringOfAnnualSalaryInput = annualSalaryInput.toString();

// //REMOVE COMMAS from 'annualSalaryInput' so the math works
// let sterilizedSalary = makeStringOfAnnualSalaryInput.replace(/,/g, '');

//Make AnnualSalaryInput back into a number with parseInt

//sum up annual salaries
sumOfAnnualSalaryInput += parseInt(annualSalaryInput);



//Here we are adding commas
let SalaryWithCommas = sumOfAnnualSalaryInput.toLocaleString(); 
// let sumOfAnnualSalaryInputWithCommas = sumOfAnnualSalaryInput.toLocaleString();
// var formattedModifiedValue = modifiedValue.toLocaleString();


//THIS above SECTION IS NEEDED BUT BROKE EVERYTHING************************************








// console.log(sumOfAnnualSalaryInputWithCommas);
//now the code (clearing data from the boxes) doesn't run***********************************************************








//actually inserting the row of data
$('#mainTable').append(addTableRow);

//Example Code (formatting "," (remove if they have it then add it back))


    // Remove any existing commas from the input value
    // var sanitizedValue = inputValue.replace(/,/g, '');

    
//Something to note we want to sum them up before we put commas back in
//then add commas to both the annualSalaryInput and sumOfAnnualSalaryInput

    // Add commas back to the modified value
    // var formattedModifiedValue = modifiedValue.toLocaleString();
    
    // Display the result
    // $("#result").text("Result: $" + formattedModifiedValue);
//Example Code (end)

//THE PLAN FOR MANAGING COMMAS

//my attempt at "sanitizing" the inputs that include ','

//adding them up

//then adding them back and displaying the result






//clearing the data from the boxes (WHY DOESN't this run anymore?)
// $('#firsNameInput').val( '' );
// $('#lastNameInput').val( '' );
// $('#idInput').val( '' );
// $('#titleInput').val( '' );
// $('#annualSalaryInput').val( '' );

$('#sumSalaries').text('Total Sum: $' + SalaryWithCommas);


//✅(final part)   If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

if (sumOfAnnualSalaryInput > 20000) {
    $('#sumSalaries').css({
      "background-color": "#E63946",
      "color": "White",
      "border": "none",
      "border-radius": "20px"
    });
  } else {
    $('#sumSalaries').css({
      "background-color": "White",
      "color": "#535353"
    });
  }
  
//START EXAMPLE
// if (condition) {
//     targetElement.css({
//       "background-color": "green",
//       "color": "white"
//     });
//   } else {
//     targetElement.css({
//       "background-color": "red",
//       "color": "black"
//     });
//   }
//END EXAMPLE








//     let firsNameInput = $('#firstName').val();
// console.log( "Welcome " + firsNameInput);
// //empty out input (below)
}






//this is where the remove button function lives
function removeEntry(){
    $(this).parents("tr").remove();
    console.log('SMOKE');
    // $(this).parentsUntil("tbody").remove();
}



//TO DO 
//  ✅ make it clear the fields in the top
//  ✅ make if till in each section instead of putting it all in the first box
//  ✅ make the math work
//  ✅ add $ sign

//  ✅ added removal of commas where necessary so numbers could be processed
//  ❌(YET TO DO) add "," where necessary (WORKING ON THIS)

//lesser TO DO (nice to have)
//    make background on text the only part colored in each table element
//    scale the delete button



//TO DO AS THE ASSIGNMENT PUTS IT
//✅The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

//✅ A 'Submit' button should collect the form information,
//✅store the information to calculate monthly costs
//✅(Fixed it)  append information to the DOM and clear the input fields.
//✅   Using the stored information, calculate monthly costs and append this to the to DOM.
//✅(final part)   If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
//(Not required i guess but it makes sense to have the bellow)
//I want it to update the number at the bottom to lower the total