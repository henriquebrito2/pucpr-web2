import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import './Cadastro.css'; // Import the CSS file

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // Estado para a mensagem de sucesso

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data in Realtime Database
            await set(ref(db, `users/${user.uid}`), {
                firstName,
                lastName,
                dob,
                email
            });

            setSuccess('Usuário cadastrado com sucesso!'); // Define a mensagem de sucesso
            setError(''); // Limpa qualquer mensagem de erro
            setEmail(''); // Limpa os campos do formulário
            setPassword('');
            setFirstName('');
            setLastName('');
            setDob('');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.message);
            setError(error.message);
            setSuccess(''); // Limpa a mensagem de sucesso em caso de erro
        }
    };

    return (
        <div className="container">
            <h1 className="title">Cadastro</h1>
            {error && <p className="error">{error}</p>}
            {success && (
                <div>
                    <p className="success">{success}</p>
                    <p>
                        <Link to="/principal" className="link">Ir para a página Principal</Link>
                    </p>
                </div>
            )}
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label className="label">E-mail:</label>
                    <input
                        type="email"
                        placeholder="E-mail"
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
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label className="label">Nome:</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label className="label">Sobrenome:</label>
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label className="label">Data de Nascimento:</label>
                    <input
                        type="date"
                        placeholder="Data de Nascimento"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;