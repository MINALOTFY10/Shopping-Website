
  function valid(){
    let name= document.getElementById("username").value ;
   let pass=  document.getElementById("password").value ;
    localStorage.setItem("username",name);
    localStorage.setItem("password",pass);
     if(name =="admin"){
         if(pass=="admin"){
         window.location.href="file:///D:/Programing/Visual%20Studio%20Code/home/admin.html"; 
     }
     }
     else{
    window.location.href="file:///D:/Programing/Visual%20Studio%20Code/home/index.html";
 }


  }