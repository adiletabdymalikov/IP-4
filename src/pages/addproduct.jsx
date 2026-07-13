import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');
    
    const navigate = useNavigate();

    const addProduct = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios({
                method: 'post',
                url: 'https://api.restful-api.dev/objects', 
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': '8bbadf2f-8488-46b2-8f62-ddc4b6e2c494' 
                },
                data: {
                    name: title,
                    data: {
                        price: Number(price),
                        description: description,
                        category: category,
                        images: [images]
                    }
                }
            });

            console.log('res', response);
            
            if (response.status === 201 || response.status === 200) {
                alert('Product added!');
                navigate('/products');
            } else {
                alert('Something went wrong!');
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert('Failed to add product!');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Product</h1>
            <form onSubmit={addProduct} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="number" placeholder="Category ID" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={images} onChange={(e) => setImages(e.target.value)} required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;