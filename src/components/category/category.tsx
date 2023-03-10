import { CategoryComponent } from 'interfaces/Categorys'
import styles from './category.module.scss'
import { IconPropsItem, QuantityItemProps } from '../../constants/constants'
import { AiFillHeart, AiOutlineHeart, FaCartPlus, AiFillMinusCircle, AiFillPlusCircle } from '../../constants/icons'
import { changeFavourite } from 'store/reducers/itens'
import { addInCart, changeQuantity, removeFromCart } from 'store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from 'interfaces/RootStore'
import classNames from 'classnames'

export default function Category({ titulo, foto, preco, descricao, favorito, id, inCart, quantidade }: CategoryComponent) {
	const dispatch = useDispatch()
    const inCartReducer = useSelector((state: RootStore) => state.cart.some(item => item.id === id))

	const favourite = () => {
		dispatch(changeFavourite(id))
	}

    const add = () => {
		dispatch(addInCart(id))
	}

  return (
    <div className={classNames(styles.item, {
        [styles.itemNoCarrinho]: inCart
    })}>
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
                    {
                        inCart ?  (
                            <div className={styles.quantidade}>
                                Quantidade:
                                <AiFillMinusCircle {...QuantityItemProps} onClick={() => {
                                    if(quantidade === 1){
                                        dispatch(removeFromCart(id))
                                    } else {
                                        dispatch(changeQuantity({ id: id, quantity: -1 }))
                                    }
                                }}/>
                                <span>{String(quantidade || 0).padStart(2, "0")}</span>
                                <AiFillPlusCircle {...QuantityItemProps} onClick={() => dispatch(changeQuantity({ id: id, quantity: +1 }))}/>
                            </div>
                        )
                        :  (
                            <FaCartPlus 
                                {...IconPropsItem}
                                color={inCartReducer ? '#1875E8' : IconPropsItem.color}
                                className={styles['item-acao']}
                                onClick={add}
                            />
                        )
                    }
                   
                </div>
            </div>
        </div>
    </div>
  )
}
