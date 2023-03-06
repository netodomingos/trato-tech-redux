import Header from 'components/header/header'
import styles from './cart.module.scss'

import { useGetCart } from 'hooks/useCart'

export default function Carrinho() {
  const cart = useGetCart()

	console.log(cart);
	

  return (
    <div>
        <Header title='Carrinho de compras' description='confira produtos que você adicionou ao carrinho.' />
        <div className={styles.carrinho}>
			
        </div>
    </div>
  )
}
