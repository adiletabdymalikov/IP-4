import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [detail, setDetail] = useState(null);

    const fetchDetail = async () => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            if (response.status === 200) { 
                setDetail(response.data);
            }
        } catch (error) {
            console.error("Ошибка загрузки:", error);
        }
    };

    useEffect(() => {
        fetchDetail();
    }, [id]); 

    const handleEdit = async () => {
        try {
            const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, {
                title: detail.title,
                description: detail.description,
                price: Number(detail.price), 
                images: detail.images,
                categoryId: detail.category?.id || 1 
            });
            
            if (response.status === 200) {
                alert('Product edited!');
                navigate('/products'); 
            }
        } catch (error) {
            alert('Something went wrong!');
            console.error(error);
        }
    };

    if (!detail) return <div>Загрузка...</div>;

    return (
        <div className="p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium">Title</label>
                <input 
                    type="text" 
                    value={detail.title} 
                    onChange={(e) => setDetail({ ...detail, title: e.target.value })} 
                    className="w-full border p-2 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea 
                    value={detail.description} 
                    onChange={(e) => setDetail({ ...detail, description: e.target.value })} 
                    className="w-full border p-2 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Price</label>
                <input 
                    type="number" 
                    value={detail.price} 
                    onChange={(e) => setDetail({ ...detail, price: e.target.value })} 
                    className="w-full border p-2 rounded"
                />
            </div>

            <button 
                onClick={handleEdit} 
                className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
                Save Changes
            </button>
        </div>
    );
};

export default EditProduct;