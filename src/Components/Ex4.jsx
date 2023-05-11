import { useState } from "react"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleInput = () => {
        (email === '' || password === '')
        ? setError("Email and password can't be empty")
        : (password !== confirmPass) 
        ? setError("Passwords don't match")
        : setError('')
          setText({ email, password })
        
    }

    const handleDelete = () => {
        setText('');
    }

    return (
        <div>
            <input
                type='email'
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPass(e.target.value)}
                required
            />

            <button type='button' onClick={handleInput}>Sign Up</button>

            {error && <div>{error}</div>}
            {!error && text.email && (
                <div>
                    <h2>{text.email}</h2>
                    <h3>{text.password}</h3>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default SignUp;
