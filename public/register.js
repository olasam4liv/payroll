$(document).ready(function(){

  let url =  "http://localhost:3000/employee";

  // Form Control

  function errorControl(){    
    $(".error").remove();
    if (surname.length < 1) {
      $('#surname').after('<span class="error">Please input a valid surname</span>');
    
    }
    if (firstName.length < 1) {
      $('#first_name').after('<span class="error">Please input a valid First Name</span>');
      
    }
     
    if (email.length < 1) {
      $('#email').after('<span class="error">Please input a valid email</span>');
      
      }
    if(contactAddress.length < 1){
        $('#contact_address').after('<span class="error">Please input a valid email</span>');
        
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      
    }
    if(confirmPassword !== password){
        $('#confirm_password').after('<span class="error">Password Not Matched</span>');               
    } 
  }


//   $('#register-form').submit(function(e) {
//     e.preventDefault();
//     //alert("Window loaded");
    
//     let surname = $('#surname').val();            
//     let firstName = $('#first_name').val();
//     let otherName = $('#other_name').val();
//     let dob = $('#dob').val();
//     let email = $('#email').val();    
//     let contactAddress =$('#contact_address').val();
//     let phonenumber =$('#phonenumber').val();
//     let password = $('#password').val();
//     let gender = $('#gender').val();
//     let salary = 0;
//     let lastPaymentDate =""; 
//     let lastAmountReceived = 0;      
//     let level = ""
//     let idCardNo ="";
//     let isActive = "Active";
//     let isAdmin = "Yes";
//     let  regDate=  Date().toString();

    

//     const userData = {
//       surname: surname,
//       firstname: firstName,
//       otheranme: otherName,
//       dob: dob,
//       email: email,
//       contact_address: contactAddress,
//       phonenumber: phonenumber,
//       password: password,
//       gender: gender,
//       salary: salary,
//       lastPaymentDate:lastPaymentDate,
//       lastAmountReceived:lastAmountReceived,
//       level: level,
//       idCardNo:idCardNo,
//       isActive:isActive,
//       isAdmin: isAdmin,
//       regDate: regDate
//     } 
//  if (userData.val() > 0){
//   $.post('http://localhost:3000/employee', userData, function(){
//     alert('Successfully Registered')          
//    });
//    window.location.replace('dashboard.html')   
//  }else {
//    errorControl

//  }
          
  

$('#register-form').on('submit', function(e){
  e.preventDefault();
  let surname = $('#surname').val();            
  let firstName = $('#first_name').val();
  let otherName = $('#other_name').val();
  let dob = $('#dob').val();
  let email = $('#email').val();    
  let contactAddress =$('#contact_address').val();
  let phonenumber =$('#phonenumber').val();
  let password = $('#password').val();
  let gender = $('#gender').val();
  let salary = 0;
  let lastPaymentDate =""; 
  let lastAmountReceived = 0;      
  let level = ""
  let idCardNo ="";
  let isActive = "Yes";
  let isAdmin = "No";
  let  regDate=  Date().toString();


  let userData = {
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
 
        
  if (userData.surname.length < 1) {
     $('#surname').after('<span class="error">Please input a valid surname</span>');
   
  }
  if (firstName.length < 1) {
    $('#first_name').after('<span class="error">Please input a valid First Name</span>');
     
  }
   
  if (email.length < 1) {
    $('#email').after('<span class="error">Please input a valid email</span>');
 
    }
  if(contactAddress.length < 1){
      $('#contact_address').after('<span class="error">Please input a valid email</span>');
        
  }
  if (password.length < 8) {
    $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      
  }
  if(confirmPassword !== password){
      $('#confirm_password').after('<span class="error">Password Not Matched</span>');
       
  } 
              $.ajax({
                type:"POST",
                url: url,
                data: userData,
                success: function(){
                  alert('Record Saved')
                  
                }
        
            });
            window.location.replace('dashboard.html'); 
        });
});