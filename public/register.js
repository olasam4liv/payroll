$(document).ready(function(){
localStorage.clear()
  let url =  "http://localhost:3000/employee";
  $('#register-form').submit(function(e) {
    e.preventDefault();
    //alert("Window loaded");
    
    let surname = $('#surname').val();            
    let firstName = $('#first_name').val();
    let otherName = $('#other_name').val();
    let dob = $('#dob').val();
    let email = $('#email').val();    
    let contactAddress =$('#contact_address').val();
    let phonenumber =$('#phonenumber').val();
    let password = $('#password').val();
    let confirmPassword = $('#confirm_password').val();
    let gender = $('#gender').val();
    let salary = 0;
    let lastPaymentDate =""; 
    let lastAmountReceived = 0;      
    let level = ""
    let idCardNo ="";
    let isActive = "Yes";
    let isAdmin = "No";
    let  regDate=  Date().toString();

    

    const userData = {
      surname: surname,
      firstname: firstName,
      otheranme: otherName,
      dob: dob,
      email: email,
      contact_address: contactAddress,
      phonenumber: phonenumber,
      password: password,
      gender: gender,
      salary: salary,
      lastPaymentDate:lastPaymentDate,
      lastAmountReceived:lastAmountReceived,
      level: level,
      idCardNo:idCardNo,
      isActive:isActive,
      isAdmin: isAdmin,
      regDate: regDate
    } 
    $(".error").remove();
    if (surname.length < 3) {
      $('#surname').after('<span class="error">Please input a valid surname</span>');
    return;
    }
    if (firstName.length < 3) {
      $('#first_name').after('<span class="error">Please input a valid First Name</span>');
      return;
    }
     
    if (email.length < 8) {
      $('#email').after('<span class="error">Please input a valid email</span>');
      return;
      }
    if(contactAddress.length < 4){
        $('#contact_address').after('<span class="error">Please input a valid email</span>');
        return;        
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      return;
    }
    if(confirmPassword !== password){
        $('#confirm_password').after('<span class="error">Password Not Matched</span>');  
        return;             
    } 
    

  $.post(url, userData, function(){    
    alert('Successfully Registered')          
   });
   window.location.replace('login.html')   
   
})

});