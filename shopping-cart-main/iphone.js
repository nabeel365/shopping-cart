console.log('js file added')



const subTotal = document.getElementById('sub-total')


// plus btn -- increasing quantity value ...


/** 

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previouCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})

*/



// minus btn -- decreasing quantity value ...

/** 
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previouCaseNumber - 1;
    caseNumberField.value = newCaseNumber;


    if(newCaseNumber < 0){
        alert('select a valid quantity');
               
    }   
    
})
*/


// using a fucntion ... for case ..

function updateData(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
 
    if(isIncrease){
        newCaseNumber = previouCaseNumber + 1;
    }
    else{
        newCaseNumber = previouCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateData(true);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateData(false);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
})

/** SAME FUNCTION ACNT BE USED FOR DIIFERENT CASES(GIVING DIFF OUTPUTS) EVEN IF THEIR CONDITIONS ARE SAME */


// using a fucntion ... for iphone ..

function updatePhoneData(ifIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
  

    let newPhoneNumber;

    
    if(ifIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

}



// lec 5 

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneData(true);

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
    
    
    // lec- 5
    // caculate total price ..

    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const SubTotalElement = document.getElementById('sub-total');
    SubTotalElement.innerText = currentSubTotal;


    
})


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneData(false);

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
})




