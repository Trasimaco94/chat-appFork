import { mapNodes } from '../declarations';
import '../css/style.css';
export function componentFormLogin() {
  return `
    
      <input type="text" id=${mapNodes.inputEmail} class= "inputLoginClass" placeholder="email" />
   
   
      <input type="password" id=${mapNodes.inputPassword} class = "inputLoginClass" placeholder="password" />
    
   
      <button id=${mapNodes.buttonSignIn} class = "btnLogin" >SignIn</button>
    
  `;
}
