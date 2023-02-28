import { CategoryComponent } from 'interfaces/Categorys'
import styles from './category.module.scss'
import { IconPropsItem } from '../../constants/constants'
import { AiFillHeart, AiOutlineHeart, FaCartPlus } from '../../constants/icons'

export default function Category({ titulo, foto, preco, descricao, favorito }: CategoryComponent) {
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
                        ? <AiFillHeart {...IconPropsItem} color='#ff0000' className={styles['item-acao']} />
                        : <AiOutlineHeart {...IconPropsItem} className={styles['item-acao']}/>
                    }

                    <FaCartPlus 
                        {...IconPropsItem}
                        color={true ? '#1875E8' : IconPropsItem.color}
                        className={styles['item-acao']}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
