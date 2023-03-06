import { CategoryComponent } from 'interfaces/Categorys'
import styles from './category.module.scss'
import { IconPropsItem } from '../../constants/constants'
import { AiFillHeart, AiOutlineHeart, FaCartPlus } from '../../constants/icons'
import { changeFavourite } from 'store/reducers/itens'
import { addInCart } from 'store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from 'interfaces/RootStore'

export default function Category({ titulo, foto, preco, descricao, favorito, id }: CategoryComponent) {
	const dispatch = useDispatch()
    const inCart = useSelector((state: RootStore) => state.cart.some(item => item.id === id))

	const favourite = () => {
		dispatch(changeFavourite(id))
	}

    const add = () => {
		dispatch(addInCart(id))
	}

  return (
    <div className={styles.item}>
        <div className={styles['item-imagem']}>
            <img src={foto} alt={titulo} />
        </div>
        <div className={styles['item-descricao']}>
            <div className={styles['item-titulo']}>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
            <div className={styles['item-info']}>
                <div className={styles['item-preco']}>
                    R$ {preco.toFixed(2)}
                </div>
                <div className={styles['item-acoes']}>
                    {
                        favorito 
                        ? <AiFillHeart {...IconPropsItem} color='#ff0000' className={styles['item-acao']} onClick={favourite}/>
                        : <AiOutlineHeart {...IconPropsItem} className={styles['item-acao']} onClick={favourite}/>
                    }

                    <FaCartPlus 
                        {...IconPropsItem}
                        color={inCart ? '#1875E8' : IconPropsItem.color}
                        className={styles['item-acao']}
                        onClick={add}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
