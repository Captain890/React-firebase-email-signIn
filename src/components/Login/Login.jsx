
import Button from "../Button/Button";

const Login = ({ title, setEmail, setPassword, handleAction })=>{

 return(
 <form >
    <div className="form">
        {title} Form
    </div>
    <div className="input-email">
    <label>Email</label>
    <input type="text" 
    name="email" 
    placeholder="Enter your email" 
    autoComplete="off"
    onChange={(e)=>setEmail(e.target.value)}
    />
    </div>
    <div className="input-email">
    <label>Password</label>
    <input type="password" 
    name="password" 
    placeholder="Enter your password"
    autoComplete="off"
    onChange={(e)=>setPassword(e.target.value)}  
    />
    </div>
    <div className="login-button">
     <Button 
      title ={title}
      handleAction={handleAction}
     />
    </div>

  
</form>
 )
}
export default Login;