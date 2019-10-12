$(document).ready(function(){

  let url =  "http://localhost:3000/employee";

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
  let isActive = "Active";
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
  $.ajax({
    type:"POST",
    url: url,
    data: userData,
    success: function(){
      alert('Record Saved')
    }
});
 
})
    
});