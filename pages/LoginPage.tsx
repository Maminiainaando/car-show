import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/#/allCar');
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || 'Invalid email or password.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }

    // Réinitialiser les valeurs des champs email et password
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
