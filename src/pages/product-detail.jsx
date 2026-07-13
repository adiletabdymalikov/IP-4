import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { adid } = useParams(); 
    const [detail, setDetail] = useState(null);

    const fetchDetail = async () => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${adid}`);
            setDetail(response.data);
        } catch (error) {
            console.error("Ошибка загрузки:", error);
        }
    }

    useEffect(() => {
        if (adid) {
            fetchDetail();
        }
    }, [adid]); 

    if (!detail) return <div>Загрузка...</div>;

    return (
        <div>
            <h2>{detail.title}</h2>
            <img src={detail.images[0]} alt={detail.title} width={300} />
            <p>{detail.description}</p>
        </div>
    );
}
export default ProductDetail;