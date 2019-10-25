$(document).ready(function(){
  localStorage.clear();
   let url ='http://localhost:3000/employee';
    $('#login-form').on('submit', function(e){
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val(); 
    $.get(url, function(userData){ 
      for (let object of userData) {        
        if (object.email === email && object.password === password && object.isAdmin ==="Yes" && object.isActive ==="Yes") {          
          let id = object.id;
          id = parseInt(id);
          console.log(object.surname)
           localStorage.setItem('userID', id);
           window.location.replace('admindashboard.html');        
          return;
        }  if(object.email === email && object.password === password && object.isAdmin ==="No" && object.isActive === "Yes"){  
          let id = object.id;
          id = parseInt(id);
          console.log(object.id)
          localStorage.setItem('userID', id);
           window.location.replace('dashboard.html');
          return;
        } 
      }
       
     alert('Invalid email or password')
  
      });   
    });
})