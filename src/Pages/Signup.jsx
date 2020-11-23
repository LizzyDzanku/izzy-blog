import React, {useState} from 'react';

 function Signup() {
     const [firstname, setFirstname] = useState("")
     const [lastname, setLastname] = useState("")
     const [password, setPassword] = useState("")
 
     function handleFirstnameOnChange(event) {
         setFirstname(event.target.value)
     }

     function handleLastnameOnChange(event) {
        setLastname(event.target.value)
    }
 
     function handlePasswordOnChange(event) {
         setPassword(event.target.value);
     }
 
     function loginUser(event) {
         event.preventDefault();
         if (firstname === password) {
             alert("Welcome")
         } else {
         }
     }

     const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value ===""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
 
     return (
        <div>
            <div>
                <form onSubmit={loginUser}>
                        <label for="Fname" >Firstname:</label><br />
                        <input type="text" id="Fname" name="Fname" />
                            <br />

                        <label for="Lname" >Lastname:</label><br />
                        <input type="text" id="Lname" name="Lname" />
                            <br />

                        <label for="E/ph"> Email/Phonenumber:</label><br />
                        <input type="text" id="E/Ph" name="E/Ph" />
                        <br />

                            <label for="Pas" > Password:</label><br></br>
                            <input type="password" id="Pas" name="Pas" />
                            <br />

                        <label for="Rpas">Repeat paassword:</label>
                        <input type="password" id="Rpas" name="Rpas" /><br />
                            <br />                            <button type="submit">click me</button>
                        </form>
                </div>
                </div>
                        
     )
 }
             
 export default Signup;