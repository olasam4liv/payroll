$(document).ready(function(){
    let url ='http://localhost:3000/employee/';
    localStorage.clear(userId)

    $.ajax({
        type: 'GET',
        url: url + id,                     
        success: function(userData){                
       console.log(userData)
            
        },

        error: function(){
        //console.log('Error')
        }
    });
})