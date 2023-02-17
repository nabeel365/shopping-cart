

const subTotalId = document.getElementById('sub-total');
const finalTotal = document.getElementById('final-total');
const texAmout = document.getElementById('tax-amount');
const phoneTotalElement = document.getElementById('phone-price');
const caseTotalElement = document.getElementById('case-price');

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

function updateData(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previouCaseNumber + 1;
    }
    else {
        newCaseNumber = previouCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateData(true);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
    subTotalNumber();
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateData(false);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
    subTotalNumber();
})

/** SAME FUNCTION ACNT BE USED FOR DIIFERENT CASES(GIVING DIFF OUTPUTS) EVEN IF THEIR CONDITIONS ARE SAME */


// using a fucntion ... for iphone ..

function updatePhoneData(ifIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);


    let newPhoneNumber;


    if (ifIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

}



// lec 5 

function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneData(true);

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;


    subTotalNumber();
    // lec- 5
    // caculate total price ..

    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const SubTotalElement = document.getElementById('sub-total');
    SubTotalElement.innerText = currentSubTotal;


})


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneData(false);

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
    subTotalNumber();
})


//  get total item calculate 
function subTotalNumber(index) {
    let subTotal;
    if (index === 1) {
        subTotal = parseFloat(subTotalId.innerText) - parseFloat(phoneTotalElement.innerText);
    }
    else if (index === 2) {
        subTotal = parseFloat(subTotalId.innerText) - parseFloat(caseTotalElement.innerText);
    }
    else {
        subTotal = parseFloat(phoneTotalElement.innerText) + parseFloat(caseTotalElement.innerText);
    }

    subTotalId.innerText = subTotal < 0 ? 0 : subTotal;
    finalTotal.innerText = (subTotal + parseFloat(texAmout.innerText)) < 0 ? 0 : (subTotal + parseFloat(texAmout.innerText));
}



// remove Items 

function rmoveItem(index) {
    subTotalNumber(index)
    document.getElementById(`removeItem${index}`).style.display = "none";
}

// check out btn 
function checkOut() {
    
    if(parseFloat(finalTotal.innerText) > 0 ){
        alert('✅ আপনি ' + finalTotal.innerText + ' টাকার প্রডাক্ট অডার করেছেন')
    }
    else{
        alert('❌ দুর মিয়া, আগে প্রডাকট এড করেন । আপনার কার্ডে কোনো প্রডাক্ট নাই 😅')
    }
}