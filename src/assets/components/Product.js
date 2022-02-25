import React from "react";

function Product ({redtext,image,title,price}) {
    return (
        <article>
            <span className="red-text">{redtext}</span>
            <img src={image} alt={title}/>
            <p className="product-name">{title}</p>
            <h4 className="price">{price},-</h4>
        </article>
   )
}


export default Product;