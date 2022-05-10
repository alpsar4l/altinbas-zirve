import "./Login.scss";
import { PremiumIcon } from "../../util/icons";
import Select from "react-select";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

function Login ({ apiUrl }: any) {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");

    const resetInputs = () => {
        setMail("");
        setPassword("");
    };

    const login = () => {
        axios.post(`${apiUrl}/login`,
            { email, password },
            { headers: { "Content-Type": "application/json" }}
        ).then((data) => {
            if (data.data.message === "ok") {
                if (data.data.id?.uuid) {
                    window.location.href = "/account?client=" + data.data.id?.uuid;
                } else {
                    alert("Girilen kullanıcı bilgileri hatalı.");
                }
            } else {
                alert("Veritabanında bir hata meydana geldi, en kısa sürede tekrar deneyiniz.");
            }
        });
    }

    return (
        <div className="register-page">
            <div className="register-content">
                <div className="register-top">
                    <Link to="/route">
                        <div className="register-title">
                            <div className="icon">
                                <PremiumIcon />
                            </div>
                            <div className="text">
                                <span>Altınbaş</span>
                                <span>Teknoloji Zirvesi</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="register-form">
                    <div className="register-content">
                        <div className="title" data-required={true}>
                            <span>E-Posta</span>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                value={email}
                                placeholder="E-Posta adresiniz"
                                onChange={(e: any) => setMail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="register-content">
                        <div className="title">
                            <span>Pin</span>
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                value={password}
                                minLength={4}
                                maxLength={8}
                                placeholder="Pininiz"
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="register-content" data-no-border={true}>
                        <div className="register-button-container">
                            <Link to={"/register"} className="register-handshake">
                                <span>Yanlış mı geldiniz?<br/>Kayıt olmak için tıklayın.</span>
                            </Link>
                            <div>
                                <div onClick={() => login()} className="register-button">
                                    <span>Giriş Yap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
