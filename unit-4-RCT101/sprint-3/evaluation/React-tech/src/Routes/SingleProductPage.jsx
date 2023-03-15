import { useEffect , useState } from "react";


function SingleProductPage(){

    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image"/>{data.image}
            </div>
            <div data-testid="product-category">{data.cateogry}
            </div>
           
            <div data-testid="product-details">{data.details}
            </div>
            <div data-testid="product-price">{data.price}
            </div>

            </div>
    )
}
export default SingleProductPage