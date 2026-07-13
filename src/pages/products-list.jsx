import axios from "axios";
import { use, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductsItems = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
       const response = await axios({
        method:'get',
        url:'https://api.escuelajs.co/api/v1/products'
       });
       console.log('response',response);
       
       if(response.status == 200){
        setProducts(response.data);
       }
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    const DeleteProduct = async (id) =>{
        const response = await axios({
            url:'https://api.escuelajs.co/api/v1/products/'+id,
            method:'delete'
        });
        console.log('delete',response);
        if(response){
            alert('Successfully deleted!');
            fetchProducts();
        }else{
            alert('Error!');
        }
    }
    return (
        <>
            <h1>Product List</h1>
            <div className="row">
                {products.length > 0 && 
                <>
                    {products.map((product) => 
                     <div className="col-3">
                        <img src={product.images[0]} alt="" width={'100%'} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> {product.price} сом</p>
                        <p><strong>Category:</strong> {product.category.name}</p>
                        <button onClick={()=>DeleteProduct(product.id)}>Delete</button>
                        <Link to={`/product-detail/${product.id}`}>Подробнее</Link>
                        <br />
                        <Link to={`/edit-product/${product.id}`}>Edit</Link>
                     </div>
                    )}
                </>

                }
            </div>
        </>
    )
}
export default ProductsItems;