import React from 'react'
import './signup.css';

export const Signup = () => {
    return (
        <>
        <div className="main">
          {/* <header className="App-header"> */}
          
            <section  className="glass">
                <div className="form-container">
                    <div className="form-links">
                        <a className="active" href="#">Inscrivez-vous</a>
                       
                    </div>
                     <form name="form1" >
                         <label for="email">Email</label>
                         <input type="text" name="email-input" id="email" required />
                        
                         <label for="password">Password  </label>
                         <input type="password" name="password-input" id="password" required />
                         <label for="password">Password  </label>
                         <input type="password" name="password-input" id="password" required />
                         <label for="password">Password  </label>
                         <input type="password" name="password-input" id="password" required />
                        
                         <input type="submit" value="Sign up"/>
                     </form>
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
