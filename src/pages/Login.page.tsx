import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loginUser } from '../store/thunks/login.thunk';
import { resetLoginState } from '../store/slices/login.slice';
import { useNavigate, Link} from 'react-router-dom';

import styles from './auth.module.scss';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { token, error, isLoading } = useSelector((state: RootState) => state.login);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    dispatch(resetLoginState());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      navigate('/'); 
    }
  }, [token, navigate]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    setIsFormValid(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const handleResetError = () => {
    dispatch(resetLoginState()); 
  };

  return (
    <div className={styles['auth-container']}>
      <h1>Welcome Back! 👋</h1>
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
        {error && (
          <p
            className={`${styles['feedback']} ${styles['error']}`}
            onClick={handleResetError}
          >
            {error}
          </p>
        )}
        <button type="submit" disabled={!isFormValid || isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
         <div className={styles.switches}>
          <span>Don't have an account ?</span>
          <Link to="/register" className={styles['toggle-link']}>
            Join us
          </Link>
          </div>
      </form>
    </div>
  );
};

export default Login;
