import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
                email,
                password,
            });
           
            localStorage.setItem("access_token", response.data.access_token);
        
            localStorage.setItem("restful_api_key", "8bbadf2f-8488-46b2-8f62-ddc4b6e2c494");
            
            navigate("/products");
        } catch (error) {
            console.error("Ошибка входа:", error);
            alert("Неверный email или пароль!");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Вход</h2>
            <form onSubmit={handleLogin} style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label>Пароль</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
                <button 
    type="button" 
    className="btn btn-secondary mt-2 ms-2" 
    onClick={() => navigate('/register')}
>
    Регистрация
</button>
            </form>
        </div>
    );
};

export default LoginSign;