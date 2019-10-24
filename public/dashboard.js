$(document).ready(function(){
   // localStorage.clear(userId)
    let url ='http://localhost:3000/employee/';
    let id = JSON.parse(localStorage.getItem('userID'));
    console.log(id)

    $.ajax({
        type: 'GET',
        url: url + id,                     
        success: function(userData){ 
            $('#userID').append(`Welcome:  <span >${userData.surname}</span>`)               
       console.log(userData)
            
        },

        error: function(){
        //console.log('Error')
        }
    });
})