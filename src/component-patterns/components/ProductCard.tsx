import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct(0);

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>

      <div className={ styles.productCard }>

          <ProductImage img={ product.img }/>

          <ProductTitle title={ product.title }/>

          <ProductButtons/>
          
      </div>

    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;