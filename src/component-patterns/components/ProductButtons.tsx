import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {

    // uses the context from our HOC to retrieve the counter and increaseBy 
    // attributes in the useProduct hook
    const { increaseBy, counter } = useContext(ProductContext);
  
    return (
      <div className={ styles.buttonsContainer }>
              <button 
                className={ styles.buttonMinus }
                onClick={() => increaseBy( -1 )}> - </button>
  
              <div className={ styles.countLabel }> { counter } </div>
  
              <button 
                className={ styles.buttonAdd }
                onClick={() => increaseBy( 1 )}> + </button>
          </div>
    )
  }