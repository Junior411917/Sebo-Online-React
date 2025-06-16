import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import * as styles from "./CatTable.module.css";


export default function CatTable() {

    const [categorias , setCategorias] = useState([]);
    
    useEffect(() => {

    const token = localStorage.getItem('token');
    const headers = token ? {Authorization: `Bearer ${token}`} : {};

    Axios
        .get(`http://localhost:8080/categorias`, { headers })
        .then((response) => {
            setCategorias(response.data);
        })
        .catch(() => {
            console.error("Deu problema na requisição");
        });
    }, []);
    
    return (
        <div className={styles.categoriaTableContainer}>
            <div className={styles.categoriaTableCard}>
                <h2 className={styles.categoriaTableTitle}>Categorias</h2>
                <table className={styles.categoriaTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Gênero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
