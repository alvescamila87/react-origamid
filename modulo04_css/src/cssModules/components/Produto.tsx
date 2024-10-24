import styles from './Produto.module.css';

export const Produto = () => {
    return (
        <div>
            <h1 className={styles.title}>Notebook</h1>
            <p className={styles.preco}>R$ 18000</p>
            <button className={styles.comprar}>Comprar</button>
        </div>
    )
}