import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductCard = () => {

    console.log(styles);
  return (
    <div className={ styles.productCard }>
        <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug"/>
        <img className={ styles.productImg } src={ noImage } alt="Coffee Mug"/>
        
        <span className={ styles.productDescription }>Coffee Mug</span>

        <div className={ styles.buttonsContainer }>
            <button className={ styles.buttonMinus }> - </button>

            <div className={ styles.countLabel }> 0 </div>

            <button className={ styles.buttonAdd }> + </button>
        </div>
    </div>
  )
}
