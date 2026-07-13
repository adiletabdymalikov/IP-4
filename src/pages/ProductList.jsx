import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       
        const apiKey = localStorage.getItem("restful_api_key");
        
        if (!apiKey) {
            navigate("/login");
            return;
        }

        axios({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey 
            }
        })
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("Ошибка при получении данных:", error);
            alert("Не удалось загрузить товары!");
        });
    }, [navigate]);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h2 fw-bold">List of products</h1>
                <button onClick={() => {localStorage.removeItem("restful_api_key"); navigate("/login")}} className="btn btn-outline-danger">
                    Выйти
                </button>
            </div>
            
            <table className="table table-hover align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} alt={item.title} style={{width: "50px"}} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td className="fw-bold">${item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;