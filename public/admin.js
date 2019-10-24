$(document).ready(function(){

    //global variable
    const getUrl = window.location.href
    let urlId = getUrl.split('id=');
    let id = parseInt(urlId[1])
    let url ='http://localhost:3000/employee/';

//fetch all data
    $.ajax({
        type: 'GET',
        url: url,                     
        success: function(userData){                
            for (let index = 0; index < userData.length; index++) { 
              //display user from db to grant role
             
              if(userData[index].isAdmin !== 'Yes'){
                 $('#grantrole').append(`
              <option value='${userData[index].id}'>${userData[index].email}</option>
              `);
              
              }
             

                $('#display-user').append(`<tr>
                <th>${userData[index].id}</th>
                <td>${userData[index].surname}</td>
                <td>${userData[index].firstname}</td> 
                <td>${userData[index].gender}</td>
                <td>${userData[index].idCardNo}</td>
                <td> ${userData[index].level}</td>
                <td>
                <a href="adminedituser.html?id=${userData[index].id}" data-toggle="tooltip" title="Update user's records. Please becareful" class="btn btn-warning btn-sm">Edit</a> &nbsp;     
                <a href="adminviewdetails.html?id=${userData[index].id}" data-toggle="tooltip" title="View details" class="btn btn-primary btn-sm">View</a>  &nbsp;
                 
                <a href="paysalary.html?id=${userData[index].id}"  data-toggle="tooltip"    title="Pay Salary" class="btn btn-success btn-sm">Pay</a> &nbsp;
                <button type="button" class="btn btn-danger btn-sm delete" value="${userData[index].id}"  title="Delete Record" >Delete</button>
                </tr>`); 
                $('#amount-modal').append(`<input id="password" type="text" class="form-control" value="${userData[index].surname}">  `)
           
             }
             deleteData();
          
        },

        error: function(){
        alert('Error')
        }
    });

// fetch single data
$.ajax({
    type: 'GET',
    url: url + id,                     
    success: function(data){                
        $('#view-details').append(` <tbody>
        <tr>
          <th scope="row">Staff ID No:</th>
          <td colspan="3">${data.idCardNo}</td>
        </tr>
        <tr>
          <th scope="row">Suname:</th>
          <td colspan="3">${data.surname}</td>
        </tr>
        <tr>
          <th scope="row">First Name</th>
          <td colspan="3">${data.firstname}</td>
        </tr>
        <tr>
          <th scope="row">Other Name</th>
          <td colspan="3">${data.otheranme}</td>                             
        </tr>
          <tr>
              <th scope="row">Date of Birth:</th>
              <td colspan="3">${data.dob}</td>
          </tr>
          <tr>
              <th scope="row">Email</th>
              <td colspan="3">${data.email}</td>
            </tr>
            <tr>
              <th scope="row">Contact Number</th>
              <td colspan="3">${data.phonenumber}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td colspan="3">${data.contact_address}</td>
            </tr>
            <tr>
              <th scope="row">Gender</th>
              <td colspan="3">${data.gender}</td>                             
            </tr>
            <tr>
                  <th scope="row">Level:</th>
                  <td colspan="3">${data.level}</td>
             </tr>
            <tr>
                  <th scope="row">Salary Amount:</th>
                  <td colspan="3">&#8358 ${data.salary}</td>
             </tr>
             <tr>
                  <th scope="row">Last Amount Received</th>
                  <td colspan="3">&#8358 ${data.lastAmountReceived}</td>
                <tr>
                tr>
                  <th scope="row">Regisration Date </th>
                  <td colspan="3">${data.regDate}</td>
                </tr>
                <tr>
                  <th scope="row">Last Payment Date</th>
                  <td colspan="3">${data.lastPaymentDate}</td>
                </tr>
   
                <tr>
                  <th scope="row">Account Status</th>
                  <td colspan="3">${data.isActive}</td>
                </tr> 
            </tbody>`);


      //edit        
      $('#edit-form').append(`
     <div class="form-group">
     <label for="staff-idno">Staff ID Number</label>
     <input type="text"  class="form-control" id="staff-idno"   value="${data.idCardNo}">
 </div>    
 <div class="form-group">
                <label for="level">Level</label>
                <input type="text"  class="form-control" id="level"
                    value="${data.level}">
            </div> 
     <div class="form-group">
                <label for="surname" >Surname</label>
                <input type="text" class="form-control" id="surname" disabled value="${data.surname}">
      </div>

            <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" class="form-control" id="first_name" disabled value="${data.firstname}">
            </div>

            <div class="form-group">
                <label for="othername">Other Name</label>
                <input type="text" class="form-control" id="other_name" disabled value="${data.otheranme}">
            </div>

            <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="email"  class="form-control" id="dob" disabled value="${data.dob}">
          </div>

          <div class="form-group">

            <label for="email">Email</label>
                <input type="email"  class="form-control" id="email" disabled value="${data.email}">
                </div>

          <div class="form-group">
            <label for="dob">Contact Address</label>
                <input type="text" disabled class="form-control" id="contact_address"
                    value="${data.contact_address}">
              </div>
             
            <input type="password" hidden class="form-control" id="password" disabled value="${data.password}">
           
          <input type="gender" hidden class="form-control" id="email" disabled value="${data.gender}">
          
            
             
          <div class="form-group">
          <label for="acount status">Acount Status</label>
          <input type="text" disabled class="form-control" id="acountactive"
              value="${data.isActive}">
        </div>
         
        <input type="text" hidden class="form-control" id="gender"
            value="${data.gender}">

            <input type="text" hidden class="form-control" id="phonenumber"
            value="${data.phonenumber}">

        <input type="text" hidden class="form-control" id="isadmin"
            value="${data.isAdmin}">             
       
            <div class="form-group">
            <label for="lastAmountReceived">Registered Date </label>
            <input type="text" id="lastamountreceived" disabled class="form-control" 
                value=" ${data.regDate}">
          </div>
      
    
          <div class="form-group">
          <label for="lastAmountReceived">Last Amount Received &#8358 </label>
          <input type="text" id="lastamountreceived" disabled class="form-control" 
              value=" ${data.lastAmountReceived}">
        </div>
   
        <div class="form-group">
            <label for="salary">Salary &#8358</label>
            <input type="text"  class="form-control" id="salary"
                value=" ${Number(data.salary)}">
          </div>       

            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            `);
            
            //pay single
   $('#pay-single-salary').append(` 
   <div class="form-group">
   <label for="staff-idno">Staff ID Number</label>
   <input type="text" disabled class="form-control" id="staff-idno"   value="${data.idCardNo}">
</div>     
   <div class="form-group">
              <label for="surname" >Surname</label>
              <input type="text" class="form-control" id="surname" disabled value="${data.surname}">
    </div>

          <div class="form-group">
              <label for="firstname">First Name</label>
              <input type="text" class="form-control" id="first_name" disabled value="${data.firstname}">
          </div>

          <div class="form-group">
              <label for="othername">Other Name</label>
              <input type="text" class="form-control" id="other_name" disabled value="${data.otheranme}">
          </div>

          <input type="email" hidden class="form-control" id="dob" disabled value="${data.dob}">
        
       
              <input type="email" hidden class="form-control" id="email" disabled value="${data.email}">
           
              <input type="text" hidden class="form-control" id="contact_address"
                  value="${data.contact_address}">
           
          <input type="password" hidden class="form-control" id="password" disabled value="${data.password}">
         
        <input type="gender" hidden class="form-control" id="email" disabled value="${data.gender}">
        
          <div class="form-group">
              <label for="level">Level</label>
              <input type="text" disabled class="form-control" id="level"
                  value="${data.level}">
          </div>
           
        <div class="form-group">
        <label for="acount status">Acount Status</label>
        <input type="text" disabled class="form-control" id="acountactive"
            value="${data.isActive}">
      </div>
       
      <input type="text" hidden class="form-control" id="gender"
          value="${data.gender}">

          <input type="text" hidden class="form-control" id="phonenumber"
          value="${data.phonenumber}">

      <input type="text" hidden class="form-control" id="isadmin"
          value="${data.isAdmin}">
     
          <input type="text" hidden class="form-control" id="regdate"
          value="${data.reDate}">
     
    <input type="text" hidden class="form-control" id="acountactive"
        value="${data.regDate}">
  
        <div class="form-group">
        <label for="lastpaymentdate">Last Payment Date</label>
        <input type="text" disabled class="form-control" 
            value=" ${data.lastPaymentDate}">
      </div>
 
      <div class="form-group">
          <label for="salary">Salary &#8358</label>
          <input type="text" disabled class="form-control" id="salary"
              value=" ${Number(data.salary)}">
        </div>
 
      <div class="form-group">
      <label for="salary">Last Salary Received &#8358</label>
      <input type="text" disabled class="form-control" id="lastsalary"
          value=" ${Number(data.lastAmountReceived)}">
    </div>
 
    <div class="form-group">
        <label for="salary">Amount &#8358</label>
        <input type="text" class="form-control" id="newsalary"
            >
      </div>

          </div>
          <button type="submit" class="btn btn-primary">Pay</button>
 
  
`);

    $('list-group').append(`
    <a class="list-group-item list-group-item-action active" id="home"  
    href="dashboard.html" role="tab" aria-controls="home">Home</a>
    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
    href="dashboard.html" role="tab" aria-controls="profile">Profile</a>
    <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
    href="" role="tab" aria-controls="messages">Update</a>
    <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
    href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    `);

      
    },

    error: function(){
    //alert('Error')
    }
});

//pay single user
$('#pay-single-salary').submit(function(e) {
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
        let salary = $('#salary').val();
        let lastPaymentDate = Date().toString(); 
        let lastAmountReceived = $('#newsalary').val();        
        let level = $('#level').val();;
        let idCardNo =$('#staff-idno').val();
        let isActive = 'Yes';
        let isAdmin = $('#isadmin').val();
        let  regDate=  $('#regdate').val();
  
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
          lastAmountReceived,
          level: level,
          idCardNo:idCardNo,
          isActive:isActive,
          isAdmin: isAdmin,
          regDate: regDate
        }   
              
        $(".error").remove();
        if (lastAmountReceived < 50000) {
          $('#newsalary').after('<span class="error">Please you can not pay below 50000</span>');
        } else{
                  if (lastAmountReceived === "") {
                    $('#newsalary').after('<span class="error">Please input payment amount</span>');
                  } else{
                    $.ajax({
                      url:url + id,
                      data:userData,
                      type:'PUT',
                      success: function(){
                        alert("Payment Successful" )
                        
                      }
                       
                    });
                  }
                    window.location.replace('adminview.html')
                  }
  });

// Edit
$('#edit-form').submit(function(e) {
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
              let salary = $('#salary').val();
              let lastPaymentDate = Date().toString(); 
              let lastAmountReceived = $('#lastamountreceived').val();        
              let level = $('#level').val();;
              let idCardNo =$('#staff-idno').val();
              let isActive = 'Yes';
              let isAdmin = "Yes";
              let  regDate=  $('#regdate').val();
  
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
              
  $.ajax({
    url:url + id,
    data:userData,
    type:'PUT',
    success: function(){
      alert('Record  Updated')      
    }
     
  });
  window.location.replace('adminview.html')
  });


  // Grant Role
$('#grantrole-form').submit( function(e) {
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
            let salary = $('#salary').val();
            let lastPaymentDate = Date().toString(); 
            let lastAmountReceived = $('#lastamountreceived').val();        
            let level = $('#level').val();;
            let idCardNo =$('#staff-idno').val();
            let isActive = 'Yes';
            let isAdmin = "Yes";
            let  regDate=  $('#regdate').val();

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
            
$.ajax({
  url:url + id,
  data:userData,
  type:'PUT',
  success: function(){
    alert('Record  Updated')      
  }
   
});
window.location.replace('grantrole.html')
});

     //delete
 function deleteData(){
    $("button.delete").click( function(e) {
     e.preventDefault()
     const id = $(this).val();  
     $.ajax({
       url: `http://localhost:3000/employee/${id}`,
       method: 'DELETE',
       success: function(e) {
        let ask = window.confirm(message);    
         alert("Successfully Deleted");
         location.reload();
       },
       error: function(e) {
         alert(e);
         
       }
     })
   })
   }

})