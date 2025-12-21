import styles from '../styles/Login.module.css';
import { useTheme } from "../context/ThemeContext";

function Login (){
    const { theme } = useTheme();

    const containerStyle = {
        backgroundColor: theme === "light" ? "#E6ECFB" : "#18235D",
        color: theme === "light" ? "black" : "#18235D"

    };
    const buttonStyle = {
        color: theme === "light" ? "black" : "#18235D"
    };
    return(
        <div className={styles.pageAlign}  style={containerStyle} >
            <div className={styles.login}>
                <h2> Log In to Your Account </h2>
                <input type="email" className={styles.formControl}  placeholder='Username'/><br/>
                <input type="password" className={styles.formControl} placeholder='Password'/>
                <p> Forgot Password? </p>
                <button type="submit" className={styles.loginButton} style={buttonStyle}>Log In</button>
            </div>
            <div className={styles.create} >
            <h2> Create An Account  </h2>
                <input type="email" className={styles.formControl}  placeholder='Username'/><br/>
                <input type="password" className={styles.formControl} placeholder='Password'/>
                <div className={styles.formCheck}>
                    <input className={styles.formCheckInput} type="radio" name="userType"  value="reader" />
                    <label className={styles.formCheckLabel}>
                    Agree to Privacy Policy and Terms of Service*
                    </label>
                <button type="submit" className={styles.loginButton} style={buttonStyle}>Sign Up</button>
            </div>
            </div>
            </div>
        
    );
}
export default Login;