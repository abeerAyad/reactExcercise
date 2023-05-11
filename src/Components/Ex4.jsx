import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showUserData, setShowUserData] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Fill All Fields");
      return;
    }
    if (password !== confirmPassword) {
        setError("Passwords must be a match");
      return;
    }

    setError("");
    setShowUserData(true);
  };

  const handleDelete = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setShowUserData(false);
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleInput}>Sign Up</button>

      {error && <div>{error}</div>}
      {showUserData && (
        <div>
          <h2>{email}</h2>
          <h3>{password}</h3>
          <button onSubmit={handleDelete}>Delete</button>
        </div>
      )}
    </form>
  );
};

export default SignUp;