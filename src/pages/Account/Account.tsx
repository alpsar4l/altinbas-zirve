import "./Account.scss";
import { PremiumIcon } from "../../util/icons";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";

function Account ({ apiUrl }: any) {
    const [searchParams] = useSearchParams();
    const [client, setClient] = useState({}) as any;

    const deleteAccount = () => {
        axios.post(`${apiUrl}/delete_account`,
            { id: searchParams.get("client") },
            { headers: { "Content-Type": "application/json" }}
        ).then((data) => {
            if (data.data.message === "ok") {
                window.location.href = "/route";
            } else {
                alert("Veritabanında bir hata meydana geldi, en kısa sürede tekrar deneyiniz.");
            }
        });
    };

    useEffect(() => {
        // @ts-ignore
        axios.post(`${apiUrl}/account`,
            { id: searchParams.get("client") },
            { headers: { "Content-Type": "application/json" }}
        ).then((data) => {
            if (data.data.message === "ok") {
                setClient(data.data.client);
            } else {
                alert("Veritabanında bir hata meydana geldi, en kısa sürede tekrar deneyiniz.");
            }
        });
    }, []);

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
                    <div className="login-section">
                        <div className="title">
                            <span>Merhaba</span>
                            <span>{client.name} {client.surname}</span>
                        </div>
                        <div className="account-details">
                            <div className="qr-section">
                                <QRCode value={client.uuid ? client.uuid : "waitasecond"} bgColor={"#f1f3f5"} />
                            </div>
                            <div className="qr-desc">
                                <span>Bu QR kod, sizin zirve alanına sorunsuz bir şekilde girebilmenizi sağlamak amacıyla kullanılmaktadır.</span>
                            </div>
                        </div>

                        <div className="login-buttons">
                            <div onClick={() => deleteAccount()} className="button">
                                <span>Verileri Sil</span>
                                <span>Zirve kayıtınızı yok eder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
