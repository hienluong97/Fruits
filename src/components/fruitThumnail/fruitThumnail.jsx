import React from 'react';

function fruitThumnail({ product }) {
    return (
        <div>
            <div key={product.id} className="col">
                <div className="products__card text-center">
                    <div className="products__img">
                        <img src={product.image} alt={product.title}></img>
                    </div>
                    <div className="mg-t">
                        <p className="products__name">{product.title}</p>
                        <h5 className="products__price">$ {product.price}</h5>
                        <Link to={`/products/${product.id}`} className="btn__buy">
                            Buy now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default fruitThumnail;
