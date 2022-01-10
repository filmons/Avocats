import React from 'react'
import './login.css';
export const Login = () => {
    return (
        <>
        <div className="main">
          {/* <header className="App-header"> */}
          
            <section  className="glass">
                <div className="form-container">
                    <div className="form-links">
                       
                        <a className="active" href="#">Connectez-vous</a>
                    </div>
                     <form name="form1" >
                         <label for="email">Email</label>
                         <input type="text" name="email-input" id="email" required />
                        
                         <label for="password">Password  </label>
                         <input type="password" name="password-input" id="password" required />
                        
                         <input type="submit" value="Sign up"/>
                     </form>
                        <a className="rederigesignup" href="/signup"> Si vous n'avez pas un compt Inscrivez-vous en clickant ICI</a>
                 </div>
         
                 <div className="errors-container">
         
                 </div>
               
            </section>
    
        
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
          {/* </header> */}
    
    </>
    )
}
