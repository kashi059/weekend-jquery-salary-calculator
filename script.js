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
$('#mainTable').on('click','#remove', removeEntry);


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
//same for id

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
//insert the delete button

//sum up annual salaries
sumOfAnnualSalaryInput += parseInt(annualSalaryInput);

console.log(sumOfAnnualSalaryInput);
//now the code on 66 to 71 doesn't run (clearing data from the boxes)***********************************************************

//actually inserting the row of data
$('#mainTable').append(addTableRow);


//clearing the data from the boxes (WHY DOESN't this run anymore?)
$('#firsNameInput').val( '' );
$('#lastNameInput').val( '' );
$('#idInput').val( '' );
$('#titleInput').val( '' );
$('#annualSalaryInput').val( '' );

$('#sumSalaries').text('Total Sum: $' + sumOfAnnualSalaryInput)

//     let firsNameInput = $('#firstName').val();
// console.log( "Welcome " + firsNameInput);
// //empty out input (below)
}







function removeEntry(){
    $(this).parents("tr").remove();
}



//TO DO 
//  ✅ make it clear the fields in the top
//  ✅ make if till in each section instead of putting it all in the first box
//  ✅ make the math work
//  ✅ add $ sign
//  ❌(YET TO DO) add "," where necessary

//lesser TO DO
//    make background on text the only part colored in each table element
//    scale the delete button



//TO DO AS THE ASSIGNMENT PUTS IT
//✅The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

//✅ A 'Submit' button should collect the form information,
//✅store the information to calculate monthly costs
//❌(broke it)  append information to the DOM and clear the input fields.
//✅   Using the stored information, calculate monthly costs and append this to the to DOM.
//❌(finalpart)   If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
//(Not required i guess but it makes sense to have the bellow)
//I want it to update the number at the bottom to lower the total