var fName = document.forms['myForm']['firstnameField'];
var lName = document.forms['myForm']['lastnameField'];
var email = document.forms['myForm']['emailField'];
var creditCardNo = document.forms['myForm']['ccField'];
var phoneNumber = document.forms['myForm']['phoneField'];
var infoRevButton = document.getElementById('infoRevBtn');
var reviewInfoPart = document.getElementById('page2-part-3');
var verifyButton = document.getElementById('verifyButton');
var checkoutButton = document.getElementById('checkoutBtn');
var thirdPage = document.getElementById('page-3');

infoRevButton.addEventListener("click",function(){
    if(fName.value == ''){
        alert("Enter Firstname");
    }else if(lName.value == ''){
        alert("Enter Lastname");
    }else if(email.value == ''){
        alert("Enter Email");
    }else if(creditCardNo.value == ''){
        alert("Enter Credit Card Number");
    }else if(phoneNumber.value == ''){
        alert("Enter Phone Number");
    }else{
        reviewInfoPart.style.display = 'block';
        document.getElementById("fnameDisplay").innerHTML = fName.value;
        document.getElementById("lnameDisplay").innerHTML = lName.value;
        document.getElementById("emailDisplay").innerHTML = email.value;
        document.getElementById("ccDisplay").innerHTML = creditCardNo.value;
        document.getElementById("phoneDisplay").innerHTML = phoneNumber.value;
        localStorage.setItem("Firstname",fName.value);
        localStorage.setItem("Lastname",lName.value);
        localStorage.setItem("Email",email.value);
        localStorage.setItem("CC",creditCardNo.value);
        localStorage.setItem("PhoneNo",phoneNumber.value);
    }
});

verifyButton.addEventListener("click",function(){
    thirdPage.style.display = "grid";
    mainContent.style.display = "none";
    secondPage.style.display = "none";
    mainImg.style.display = "none";
    orderNoDisplay.textContent = Math.floor(Math.random() * 24567896);
    gImageDisplay.src = localStorage.getItem("guitarImage");
    gDescDisplay.textContent = localStorage.getItem("guitarDesc");
    
    //Guitar Shipping
    var gShipping = localStorage.getItem('guitarShipping');
   
    //Guitar Price
    var gPrice = localStorage.getItem("guitarPrice");
    
    //Total Charges
    var totalAmount = Number(gShipping) + Number(gPrice);

    totalAmountDisplay.textContent = "$"+totalAmount;
    

    firstNameDisplay.textContent = localStorage.getItem('Firstname');
    lastNameDisplay.textContent = localStorage.getItem('Lastname');
    myEmailDisplay.textContent = localStorage.getItem('Email');
    ccNoDisplay.textContent = localStorage.getItem('CC');
    phoneNoDisplay.textContent = localStorage.getItem('PhoneNo');
});

function checkout(){
    thirdPage.style.display = "none";
    mainContent.style.display = "none";
    secondPage.style.display = "none";
    mainImg.style.display = "block";
    window.localStorage.clear();
    window.location.href = "";
    location.reload();
    alert("Thank You For the purchase. You will be redirected to the main page");
    return false;
}