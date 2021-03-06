import React from 'react'
import styles from "./Search.module.css"
import { Link } from "react-router-dom";
export default function Search(props) {
    return (
        <div className={ styles.product }>
          
             <Link to={ `/product/${props.id}` }>
        <div>
          <div><img src={props.image}  className={styles.img} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={styles.author}>by { props.seller }</div>
          <div className={styles.price}>${props.promotion_price< props.original_price && props.promotion_price>0 ? props.promotion_price : props.original_price } 
          
         <span className={styles.original_price}>{props.promotion_price< props.original_price && props.promotion_price>0 ? '$'+ props.original_price: '' }</span> 
        <span>+ ${props.shipping} shipping </span></div>
        <div style={{fontSize:"18px"}}>Arrives: <span className={styles.datetime}>Wednesday, Sep 29</span></div>
        </div>
       </Link>
    </div>
    )
}
