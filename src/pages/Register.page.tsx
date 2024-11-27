import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

import { RootState, AppDispatch } from '../store/store';
import { registerUser } from '../store/thunks/register.thunk'; // Assurez-vous du bon chemin
import { useNavigate, Link } from 'react-router-dom';
import { resetState, resetErrorRegisterMessage } from '../store/slices/register.slice'; // Importez les actions nécessaires

import styles from './auth.module.scss';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, error, isLoading } = useSelector((state: RootState) => state.register);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (user.username) {
      setIsDialogOpen(true); // Ouvre le dialogue en cas de succès
    }
  }, [user]);

  const handleCloseDialog = () => {
    setIsDialogOpen(false); 
    dispatch(resetState()); // Réinitialisation de l'état complet après succès
    navigate('/login'); // Redirection après succès
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(registerUser({ username, password }));
  };

  useEffect(() => {
    setIsFormValid(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const handleErrorDismiss = () => {
    dispatch(resetErrorRegisterMessage()); 
  };

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
        {error && (
          <p
            className={`${styles['feedback']} ${styles['error']}`}
            onClick={handleErrorDismiss} // Réinitialise l'erreur lorsqu'on clique dessus
          >
            {error}
          </p>
        )}
        <button type="submit" disabled={!isFormValid || isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        <div className={styles.switches}>
          <span>Already have an account?</span>
          <Link to="/login" className={styles['toggle-link']}>
            Switch to Login
          </Link>
        </div>
      </form>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <p>You will now be redirected to Login.</p>
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
