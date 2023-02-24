import styles from './search.module.scss'

export default function Search() {
  return (
    <div className={styles.busca}>
        <input 
            className={styles.input} 
            type="text" 
            placeholder='O que você procura?'
            role='input'
        />
    </div>
  )
}
