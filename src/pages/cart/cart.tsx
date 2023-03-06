import Header from 'components/header/header'
import styles from './cart.module.scss'
import relogio from '../../assets/inicial.png'

import { useGetCart, useGetTotal } from 'hooks/useCart'
import Category from 'components/category/category'

export default function Carrinho() {
  const cart = useGetCart()
  const total = useGetTotal()	

  return (
    <div>
		<Header title='Carrinho de compras' description='confira os produtos que você adicionou ao carrinho.' image={relogio} />
		<div className={styles.carrinho}>
			{cart.map((item, index) => 
				<Category
					key={index}
					id={item.id}
					descricao={item.descricao}
					favorito={item.favorito}
					foto={item.foto}
					preco={item.preco}
					titulo={item.titulo}
					inCart={true}
				/>) 
			}

			<div className={styles.total}>
				<strong>Resumo da compra</strong>
				<span>Subtotal: <strong>R$ {total.toFixed(2)}</strong></span>
			</div>
		</div>
    </div>
  )
}
