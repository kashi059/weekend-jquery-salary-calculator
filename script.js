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
        <td class="annualSalaryInputStyle">${annualSalaryInput}</td>
        <td>
            <button id="remove">
                <img src="removeEntryButton.png" alt="Remove this section">
            </button>
        </td>
    </tr>`;
//insert the delete button

//actually inserting the row of data
     $('#mainTable').append(addTableRow);


//clearing the data from the boxes
$('#firsNameInput').val( '' );
$('#lastNameInput').val( '' );
$('#idInput').val( '' );
$('#titleInput').val( '' );
$('#annualSalaryInput').val( '' );

//     let firsNameInput = $('#firstName').val();
// console.log( "Welcome " + firsNameInput);
// //empty out input (below)



}

function removeEntry(){
    $(this).parents("tr").remove();
}



//TO DO 
//make it clear the fields in the top
//scale the delete button
//make if till in each section instead of putting it all in the first box
