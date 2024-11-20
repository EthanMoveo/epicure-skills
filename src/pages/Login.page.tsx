import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loginUser } from '../store/thunks/auth.thunk';
import { useNavigate, Link } from 'react-router-dom';
import styles from './auth.module.scss';
import { resetErrorRegisterMessage } from '../store/slices/register.slice';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { token, error, isLoading } = useSelector((state: RootState) => state.login);
  dispatch(resetErrorRegisterMessage());

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    setIsFormValid(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className={styles['auth-container']}>
      <h1>Welcome back 👋</h1>
      <form onSubmit={handleSubmit} className={styles['auth-form']}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
      {error && <div className={`${styles['feedback']} ${styles['error']}`}>{error}</div>}
        <button type="submit" disabled={!isFormValid || isLoading}>
          Login
        </button>
        <div className={styles.switches}>
        <span>Not a member ? </span>
        <Link to="/register" className={styles['toggle-link']}>
          Join Now
        </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
