import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("https://api.lorem.space/image/face?w=150&h=150"); 
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://api.escuelajs.co/api/v1/users/", {
                name,
                email,
                password,
                avatar
            });
            localStorage.setItem("restful_api_key", "8bbadf2f-8488-46b2-8f62-ddc4b6e2c494");

            alert("Регистрация успешна!");
            navigate("/products"); 
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            alert("Ошибка при регистрации. Проверьте данные.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Регистрация</h2>
            <form onSubmit={handleRegister} style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                    <label>Имя</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label>Пароль</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-success">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;