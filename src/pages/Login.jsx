import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push('/'); // Redirecionar para a página principal após login bem-sucedido
        } catch (err) {
            setError('Usuário não cadastrado ou credenciais inválidas.');
        }
    };

    return (
        <div className="container">
            <h2 className="title">Login</h2>
            <form onSubmit={handleLogin}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label className="label">E-mail:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label className="label">Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <button type="submit" className="button">
                    Entrar
                </button>
            </form>
            <Link to="/signup" className="link">
                Não possui uma conta? Cadastre-se
            </Link>
        </div>
    );
};

export default Login;