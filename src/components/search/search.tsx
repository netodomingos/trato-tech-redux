import styles from './search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from 'interfaces/RootStore'
import { changeSearch, resetSearch } from 'store/reducers/search'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Search() {
  const search = useSelector((state:  RootStore) => state.search)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(resetSearch())
  }, [location.pathname])
  
  return (
    <div className={styles.busca}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='O que você procura?'
          value={search}
          onChange={event => dispatch(changeSearch(event.target.value))}
        />
    </div>
  )
}
