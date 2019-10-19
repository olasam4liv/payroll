$(document).ready(function(){
   let url ='http://localhost:3000/employee';
    $('#login-form').on('submit', function(e){
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val(); 

    $.get(url, function(userData){
      
      for (let object of userData) {        
        if (object.email === email && object.password === password && object.isAdmin ==="Yes" && object.isActive ==="Active") {          
          let id = object.id;
          id = parseInt(id);
          localStorage.setItem('userID', id);
           window.location.replace('admindashboard.html');
          $('#userID').append(`Welcome:  <span >${userID}</span>`)
          //return;
        } if(object.email === email && object.password === password && object.isAdmin ==="No" && object.isActive === "Active"){  
          // let id = object.id;
          // id = parseInt(id);

          // localStorage.setItem('userID', id);
           window.location.replace('dashboard.html');
           return;
        }
      }
      //  return false
      alert('Invalid email or password')
  
      });        
        

    
    });
})