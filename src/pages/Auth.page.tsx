import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loginUser, registerUser } from '../store/thunks/auth.thunk';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.scss';

function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { token, error, isLoading, registerMessage } = useSelector((state: RootState) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isRegistering) {
      dispatch(registerUser({ username, password }));
    } else {
      dispatch(loginUser({ username, password }));
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/'); 
    }
  }, [token, navigate]);

  useEffect(() => {
    if (registerMessage) {
      setIsRegistering(false);
      setUsername('');
      setPassword('');
    }
  }, [registerMessage]);


  return (
    <div className={styles['auth-container']}>
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <form onSubmit={handleSubmit} className={styles['auth-form']}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
      <button onClick={() => setIsRegistering(!isRegistering)} className={styles['toggle-button']}>
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </button>
      </form>
      {error && <p className={`${styles['feedback']} ${styles['error']}`}>{error}</p>}
      {registerMessage && (
        <p className={`${styles['feedback']} ${styles['success']}`}>{registerMessage}</p>
      )}
    </div>
  );
}

export default AuthPage;
