import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

import { RootState, AppDispatch } from '../store/store';
import { registerUser } from '../store/thunks/auth.thunk';
import { useNavigate, Link } from 'react-router-dom';
import { resetRegisterMessage } from '../store/slices/register.slice';
import { resetErrorLoginMessage } from '../store/slices/login.slice';

import styles from './auth.module.scss';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoading, registerMessage } = useSelector((state: RootState) => state.register);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  dispatch(resetErrorLoginMessage());

  useEffect(() => {
    if (registerMessage) {
      setIsDialogOpen(true); 
    }
  }, [registerMessage]);


  const handleCloseDialog = () => {
    setIsDialogOpen(false); 
    dispatch(resetRegisterMessage()); 
    navigate('/login'); 
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(registerUser({ username, password }));
  };

  useEffect(() => {
    setIsFormValid(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);



  useEffect(() => {
    if (registerMessage) {
      setUsername('');
      setPassword('');
    }
  }, [registerMessage]);

  return (
    <div className={styles['auth-container']}>
      <h1>Join us now 🙌</h1>
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
      {error && <p className={`${styles['feedback']} ${styles['error']}`}>{error}</p>}
        <button type="submit" disabled={!isFormValid || isLoading}>
          Register
        </button>
        <div className={styles.switches}>
        <span>Already have an account ? </span>
        <Link to="/login" className={styles['toggle-link']}>
           Switch to Login
        </Link>
        </div>
      </form>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <p>You will now be redirect to Login.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Register;
