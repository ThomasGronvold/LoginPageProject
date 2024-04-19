import "./loginFormPage.css";
import { LoginProps } from "../helpers/types";

const Login: React.FC<LoginProps> = ({ onUsernameChange, onPasswordChange, onSubmit }) => {
  return (
    <div className="login-container">
      <h1>Login</h1>

      <form action="submit" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input id="username" type="text" onChange={onUsernameChange} placeholder="Type Your Username" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" onChange={onPasswordChange} placeholder="Type Your Password" />
        </div>

        <div className="rememberForgetDiv">
          <label htmlFor="rememberLogin">Remember me</label>
          <input id="rememberLogin" type="checkbox" />

          <a href="/">Forgot Password?</a>
        </div>

        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
