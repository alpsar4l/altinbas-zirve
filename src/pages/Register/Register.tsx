import "./Register.scss";
import { PremiumIcon } from "../../util/icons";
import Select from "react-select";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

function Register ({ apiUrl }: any) {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setMail] = useState("");
    const [school, setSchool] = useState("");
    const [password, setPassword] = useState("");
    const [job, setJob] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);

    const [onSending, setSending] = useState(false);

    const resetInputs = () => {
        setName("");
        setSurname("");
        setMail("");
        setSchool("");
        setPassword("");
        setJob("");
        setValue("");
        setSelectedOption([]);
    };

    const register = () => {
        if (name === "" || surname === "" || email === "" || value.length == 0 || selectedOption.length == 0) {
            alert("Bazı bilgiler eksik, formu göndermeden önce onları doldurmanız gerekmektedir.");
        } else {
            setSending(true);

            axios.post(`${apiUrl}/register`,
                { name, surname, email, number: value, password, school, job, date: selectedOption },
                { headers: { "Content-Type": "application/json" }}
            ).then((data) => {
                if (data.data.message === "ok") {
                    window.location.href = "/login";
                } else {
                    alert("Veritabanında bir hata meydana geldi, en kısa sürede tekrar deneyiniz.");
                }
            });

            resetInputs();
        }
    };

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

                {
                    onSending ?
                        <>
                            <div className="register-form">
                                <div className="loading">
                                    <TailSpin width="100" color="#85cfff" ariaLabel="loading-indicator" />
                                </div>
                            </div>
                        </> :
                        <div className="register-form">
                            <div className="register-content">
                                <div className="title" data-required={true}>
                                    <span>İsim</span>
                                </div>
                                <div className="input">
                                    <input
                                        type="text"
                                        value={name}
                                        placeholder="Adınız"
                                        onChange={(e: any) => setName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        value={surname}
                                        placeholder="Soyadınız"
                                        onChange={(e: any) => setSurname(e.target.value)}
                                    />
                                </div>
                            </div>
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
                                <div className="title" data-required={true}>
                                    <span>Telefon numaranız</span>
                                </div>
                                <div className="input">
                                    <PhoneInput
                                        placeholder="Telefon numaranız"
                                        value={value}
                                        onChange={(value: string) => {
                                            setValue(value);
                                        }}
                                        defaultCountry="TR"
                                        international={false}
                                        autoComplete="tel"
                                        displayInitialValueAsLocalNumber={false}
                                        rules={{ required: true }}
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
                                        placeholder="Hesabınız için şifre oluşturun"
                                        onChange={(e: any) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="register-content">
                                <div className="title" data-required={true}>
                                    <span>Gün seçme</span>
                                </div>
                                <div className="input">
                                    <Select
                                        options={[
                                            {
                                                value: "mayis16",
                                                label: "16 Mayıs 2022"
                                            },
                                            {
                                                value: "mayis17",
                                                label: "17 Mayıs 2022"
                                            }
                                        ]}
                                        className="zirve-select-container"
                                        classNamePrefix="zirve-select"
                                        isMulti={true}
                                        onChange={(e: any) => setSelectedOption(e)}
                                        placeholder={"Gelmek istediğiniz gün(leri) seçin"}
                                    />
                                </div>
                            </div>
                            <div className="register-content">
                                <div className="title">
                                    <span>Okulunuz</span>
                                </div>
                                <div className="input">
                                    <input
                                        type="text"
                                        value={school}
                                        placeholder="Okulunuz"
                                        onChange={(e: any) => setSchool(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="register-content">
                                <div className="title">
                                    <span>Mesleğiniz</span>
                                </div>
                                <div className="input">
                                    <input
                                        type="text"
                                        value={job}
                                        placeholder="Mesleğiniz"
                                        onChange={(e: any) => setJob(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="register-content" data-no-border={true}>
                                <div className="register-button-container">
                                    <div className="register-handshake">
                                        <span>Kayıt olarak, veri ilkelerimizi ve gizlilik koşullarımızı kabul etmiş olursun.</span>
                                    </div>
                                    <div>
                                        {
                                            name !== "" && surname !== "" && (password !== "" && password.length >= 4) && email !== "" && value.length !== 0 && selectedOption.length !== 0 &&
                                            <div onClick={() => register()} className="register-button">
                                                <span>Kayıt Ol</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Register
