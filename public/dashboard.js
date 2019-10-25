$(document).ready(function(){
   // localStorage.clear(userId)
    let url ='http://localhost:3000/employee/';
    let loggedInUserId = JSON.parse(localStorage.getItem('userID'));
    console.log(loggedInUserId)

    $.ajax({
        type: 'GET',
        url: url + loggedInUserId,                     
        success: function(userData){ 
            $('#userID').append(`Welcome:  <span >${userData.surname}</span>`)               
       console.log(userData)

       if(userData.id === loggedInUserId){

       
       $('#view-details').append(` <tbody>
       <tr>
         <th scope="row">Staff ID No:</th>
         <td colspan="3">${userData.idCardNo}</td>
       </tr>
       <tr>
         <th scope="row">Suname:</th>
         <td colspan="3">${userData.surname}</td>
       </tr>
       <tr>
         <th scope="row">First Name</th>
         <td colspan="3">${userData.firstname}</td>
       </tr>
       <tr>
         <th scope="row">Other Name</th>
         <td colspan="3">${userData.otheranme}</td>                             
       </tr>
         <tr>
             <th scope="row">Date of Birth:</th>
             <td colspan="3">${userData.dob}</td>
         </tr>
         <tr>
             <th scope="row">Email</th>
             <td colspan="3">${userData.email}</td>
           </tr>
           <tr>
             <th scope="row">Contact Number</th>
             <td colspan="3">${userData.phonenumber}</td>
           </tr>
           <tr>
             <th scope="row">Address</th>
             <td colspan="3">${userData.contact_address}</td>
           </tr>
           <tr>
             <th scope="row">Gender</th>
             <td colspan="3">${userData.gender}</td>                             
           </tr>
           <tr>
                 <th scope="row">Level:</th>
                 <td colspan="3">${userData.level}</td>
            </tr>
           <tr>
                 <th scope="row">Salary Amount:</th>
                 <td colspan="3">&#8358 ${userData.salary}</td>
            </tr>
            <tr>
                 <th scope="row">Last Amount Received</th>
                 <td colspan="3">&#8358 ${userData.lastAmountReceived}</td>
               <tr>
               tr>
                 <th scope="row">Regisration Date </th>
                 <td colspan="3">${userData.regDate}</td>
               </tr>
               <tr>
                 <th scope="row">Last Payment Date</th>
                 <td colspan="3">${userData.lastPaymentDate}</td>
               </tr>
  
               <tr>
                 <th scope="row">Account Status</th>
                 <td colspan="3">${userData.isActive}</td>
               </tr> 
           </tbody>`);


        //    edit
        $('#edit-form').append(`
     <div class="form-group">
     
     <input type="text"  class="form-control" hidden id="staff-idno"   value="${userData.idCardNo}">
 </div>    
 <div class="form-group">
                 
                <input type="text" hidden class="form-control" id="level"
                    value="${userData.level}">
            </div> 
     <div class="form-group">
                <label for="surname" >Surname</label>
                <input type="text" class="form-control" id="surname"  value="${userData.surname}">
      </div>

            <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" class="form-control" id="first_name"  value="${userData.firstname}">
            </div>

            <div class="form-group">
                <label for="othername">Other Name</label>
                <input type="text" class="form-control" id="other_name"  value="${userData.otheranme}">
            </div>

            <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="text"  class="form-control" id="dob"  value="${userData.dob}">
          </div>

          <div class="form-group">

            <label for="email">Email</label>
                <input type="email"  class="form-control" id="email"  value="${userData.email}">
                </div>

          <div class="form-group">
            <label for="dob">Contact Address</label>
                <input type="text"  class="form-control" id="contact_address"
                    value="${userData.contact_address}">
              </div>
             
            <input type="password" hidden class="form-control" id="password" disabled value="${userData.password}">
           
                         
          <div class="form-group">
          
          <input type="text" hidden class="form-control" id="acountactive"
              value="${userData.isActive}">
        </div>
         
        <input type="text" hidden class="form-control" id="gender"
            value="${userData.gender}">

            <input type="text"  class="form-control" id="phonenumber"
            value="${userData.phonenumber}">

        <input type="text" hidden class="form-control" id="isadmin"
            value="${userData.isAdmin}">             
       
            <div class="form-group">
         
            <input type="text" hidden id="regdate" disabled class="form-control" 
                value=" ${userData.regDate}">
          </div>
      
    
          <div class="form-group">
           
          <input type="text" hidden id="lastamountreceived" disabled class="form-control" 
              value=" ${userData.lastAmountReceived}">
        </div>
   
        <div class="form-group">
        
            <input type="text" hidden class="form-control" id="salary"
                value=" ${Number(userData.salary)}">
          </div>       

            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            `);
            
           
       }

        },

        error: function(){
        //console.log('Error')
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
              let isActive = $('#acountactive').val(); 
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
  window.location.replace('dashboard.html')
  });
})