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
                $('#display-user').append(`<tr>
                <th>${userData[index].id}</th>
                <td>${userData[index].surname}</td>
                <td>${userData[index].firstname}</td> 
                <td>${userData[index].gender}</td>
                <td>${userData[index].idCardNo}</td>
                <td> ${userData[index].level}</td>
                <td>
                <a href="edit.html?id=${userData[index].id}" data-toggle="tooltip" title="Update user's records. Please becareful" class="btn btn-warning btn-sm">Edit</a> &nbsp;     
                <a href="adminviewdetails.html?id=${userData[index].id}" data-toggle="tooltip" title="View details" class="btn btn-primary btn-sm">View</a>  &nbsp;
                 
                <a href="paysingle.html?id=${userData[index].id}"  data-toggle="tooltip"    title="Pay Salary" class="btn btn-success btn-sm">Pay</a> &nbsp;
                <button type="button" class="btn btn-danger btn-sm delete" value="${userData[index].id}"  title="Delete Record" >Delete</button>
                </tr>`); 
                $('#amount-modal').append(`<input id="password" type="text" class="form-control" value="${userData[index].surname}">  `)
           
             }
             deleteData();
          
        },

        error: function(){
        console.log('Error')
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
      
    },

    error: function(){
    console.log('Error')
    }
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