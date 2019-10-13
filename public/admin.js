$(document).ready(function(){

    let url ='http://localhost:3000/employee';
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
                <a href="viewdetails.html?id=${userData[index].id}" data-toggle="tooltip" title="View details" class="btn btn-primary btn-sm">View</a>  &nbsp;
                 
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