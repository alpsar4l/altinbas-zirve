import "./Header.scss";
import { PremiumIcon, UserIcon } from "../../util/icons";
import React from "react";

function Header () {
    return (
        <div className="header">
            <div className="center">
                <div className="logo">
                    <PremiumIcon />
                    <div className="text">
                        <span>Altınbaş</span>
                        <span>Teknoloji Zirvesi</span>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <div className="nav-item">Hakkımızda</div>
                        <div className="nav-item">Konuşmacılar</div>
                        <div className="nav-item">Akış</div>
                        <div className="nav-item">Biz kimiz</div>
                        <div className="nav-item">S.S.S.</div>
                    </div>

                    <div className="client-area">
                        <div className="button">
                            <UserIcon />
                            <span>Kayıt Ol</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
