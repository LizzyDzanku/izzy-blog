import React, {useState} from 'react';

 function Login() {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")
 
     function handleUsernameOnChange(event) {
         setUsername(event.target.value)
     }
 
     function handlePasswordOnChange(event) {
         setPassword(event.target.value);
     }
 
     function loginUser(event) {
         event.preventDefault();
         if (username === password) {
             alert("Welcome")
         } else {
             alert("Invalid credentials")
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
                <img className="wave" src="img/wave.png" alt="" />
                <div className="container">
                    <div className="img">
                    <img src="img/bg.svg" alt="" />
                    </div>
                    <div className="login-content">
                    <form action="index.html" className={"auth login"} onSubmit={loginUser} >
                        <img src="img/avatar.svg" alt="" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user" />
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input type="text" className="input" onChange={handleUsernameOnChange} value={username} />
                        </div>
                        </div>
                        <div className="input-div pass">
                        <div className="i"> 
                            <i className="fas fa-lock" />
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input type="password" className="input"  onChange={handlePasswordOnChange} value={password} />
                        </div>
                        </div>
                        <a href="/">Forgot Password?</a>
                        <input type="submit" className="btn" defaultValue="Login" />
                    </form>
                    </div>
                </div>
            </div>
     )
 }
             
 export default Login;