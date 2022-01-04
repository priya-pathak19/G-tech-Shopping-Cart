import React from "react";
import styles from "./Product.module.css";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";



const Product = ({ product, addToCart, loadCurrentItem }) => {

  // const [item,setItem] = useState([]);


  //       fetch('https://pickneats.com/swiggyClone/api/user/get_category_products.php',
  //   ) 
  //       .then(( response) => { 
  //         return response.json();
    
  //       }) 
  //       .then((data) => { 
  //     console.log(data)
  //         const transformedData = data.results.map(listData=> { 
  //           return{ 
  //         
  //           }; 
  //         }); 
  //   setItem(transformedData) ; 
  //       }) 
    
      

  return (

    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />
    
      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
