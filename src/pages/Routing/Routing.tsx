import "./Routing.scss";
import { PremiumIcon } from "../../util/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Routing () {
    return (
        <div className="register-page">
            <div className="register-content">
                <div className="register-top">
                    <Link to="/">
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
                    <div className="loginr-section">
                        <div className="title">
                            <span>Hoş Geldiniz</span>
                        </div>
                        <div className="login-buttons">
                            <Link to={"/login"} className="button">
                                <span>Giriş Yap</span>
                                <span>QR koda eriş</span>
                            </Link>
                            <Link to={"/register"} className="button">
                                <span>Kayıt Ol</span>
                                <span>Zirveye katılmak için gerekli her şey</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Routing
