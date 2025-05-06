import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { ref, get } from 'firebase/database';
import './Principal.css'; // Import the CSS file

const Principal = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userRef = ref(db, `users/${user.uid}`);
                    const snapshot = await get(userRef);

                    if (snapshot.exists()) {
                        setUserData(snapshot.val());
                    } else {
                        setError('Dados do usuário não encontrados.');
                    }
                } else {
                    setError('Nenhum usuário está logado.');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return (
            <div className="container">
                <p className="info">{error}</p>
                <p><Link to="/login" className="link">Ir para a página de Login</Link></p>
            </div>
        );
    }

    if (!userData) {
        return <p className="info">Carregando...</p>;
    }

    return (
        <div className="container">
            <h1 className="title">Informações do Usuário</h1>
            <p className="info">Nome: {userData.firstName}</p>
            <p className="info">Sobrenome: {userData.lastName}</p>
            <p className="info">Data de Nascimento: {userData.dob}</p>
            <p><Link to="/login" className="link">Sair</Link></p>
        </div>
    );
};

export default Principal;