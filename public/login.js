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
                    let id = user.id
                    
                    //id = parseInt(id);
                    if(user.email === email && user.password === password && user.isAdmin ==="No" && user.isActive === 'Active'){
                       console.log(user) 
                    localStorage.setItem('userId', JSON.stringify(user.id))
                    window.location.replace('dashboard.html')                   
                    }
                    if(user.email === email && user.password === password && user.isAdmin ==="Yes" && user.isActive === 'Active'){
                        console.log(user) 
                     localStorage.setItem('userId', JSON.stringify(user.id))
                     window.location.replace('admindashboard.html')                   
                     }
                    // else{
                    //     alert('Login Error')
                    //     return false;
                    // }
               
                }
                
            },

            error: function(){
            console.log('Error')
            }
        });

    
    });
})