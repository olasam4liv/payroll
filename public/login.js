$(document).ready(function(){
   let url ='http://localhost:3000/employee';
    $('#login-form').on('submit', function(e){
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        
        $.ajax({
            type: 'GET',
            url: url,                     
            success: function(userData){                
                for(let user of userData){
                    if(user.email === email && user.password === password){
                    console.log('Successfull Logged in', user.surname)
                    return;
                    }
                    else{
                        console.log('Login Error')
                    }
               
                }
                
            },

            error: function(){
            console.log('Error')
            }
        });

    
    });
})