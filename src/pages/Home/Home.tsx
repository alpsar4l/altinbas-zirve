import "./Home.scss";
import { Link } from "react-router-dom";
// @ts-ignore
import { HashLink } from "react-router-hash-link";
import { PremiumIcon, PhoneIcon, MessageIcon, LocationPinIcon } from "../../util/icons";

function Home () {
    const speakers = [
        {
            name: "Sami Duman",
            picture: "sami-duman.jpg",
            title: "Strateji Direktörü",
            company: "Aselsan"
        },
        {
            name: "Dr. Görkem Şimşek",
            picture: "gorkem-simsek.jpg",
            title: "Mühendislik Geliştirme Programları Sefi",
            company: "Tusaş"
        },
        {
            name: "Murat Şişman",
            picture: "murat-sisman.jpg",
            title: "Teknoloji Müdürü",
            company: "Pavotek"
        },
        {
            name: "Selim Okutur",
            picture: "selim-okutur.jpg",
            title: "Türkiye Kurumsal İlişkiler Direktörü",
            company: "Toyota"
        },
        {
            name: "Mehmet Ferit Erel",
            picture: "75da14d8-704c-4fce-aab5-f4b2a83673f9.jpg",
            title: "IT Proje Yöneticisi",
            company: "Getir"
        },
        {
            name: "Olgar Ataseven",
            picture: "olgar-ataseven.jpg",
            title: "Genel Müdür Yardımcısı",
            company: "Workcube"
        },
        {
            name: "Doç. Dr. Süleyman Baştürk",
            picture: "suleyman-basturk1.png",
            title: "Müdür",
            company: "AUTONOM"
        },
        {
            name: "Mehmet Nuri Şahin",
            picture: "mehmet-nuri.jpg",
            title: "Senior Yazılım Mühendisi",
            company: "LC Waikiki"
        },
        {
            name: "Mehmet Kayhan",
            picture: "mehmet-kayhan.jpg",
            title: "Yönetim Kurulu Başkanı",
            company: "KAIVEN Enerji"
        },
        {
            name: "Fatih Hüseyin Kaya",
            picture: "huseyin-kaya.jpg",
            title: "Yazılım Uzmanı",
            company: "VakıfBank"
        },
        {
            name: "Besime Özderici",
            picture: "besime-ozderici2.png",
            title: "Yönetim Kurulu Başkanı",
            company: "SolarAPEX"
        },
        {
            name: "Mahmut Feyyaz Koksal",
            picture: "mahmut-koksal.jpg",
            title: "Mekanik Tasarım Mühendisi",
            company: "CORNEA Aero Systems"
        },
    ];
    const sponsorships = [
        {
            logo: "altinbas.png"
        },
        {
            logo: "redbull.svg"
        },
        {
            logo: "17553395_1270266323070156_6975642268144278693_n.png"
        }
    ];

    return (
        <div className="home-page">
            <div className="header-top">
                <div>
                    <div className="header">
                        <div className="center">
                            <div className="logo">
                                <div className="register-title">
                                    <div className="icon">
                                        <PremiumIcon />
                                    </div>
                                    <div className="text">
                                        <span>Altınbaş</span>
                                        <span>Teknoloji Zirvesi</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nav">
                                <HashLink to="#speakers" className="nav-btn">
                                    <span>Konuşmacılar</span>
                                </HashLink>
                                <HashLink to="#partners" className="nav-btn">
                                    <span>Sponsorlar</span>
                                </HashLink>
                                <HashLink to="#contact" className="nav-btn">
                                    <span>İletişim</span>
                                </HashLink>
                                <Link to="/route" className="nav-btn" data-button={true}>
                                    <span>Kayıt Ol</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="middle-container">
                        <div className="center">
                            <div className="middle-text">
                                <div className="middle-content">
                                    <div className="name">
                                        <div className="top">
                                            <div className="center">
                                                <span>Altınbaş</span>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <span>Teknoloji Zirvesi</span>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <div className="date">
                                            <span>16 — 17 Mayıs, 2022</span>
                                        </div>
                                        <div className="location">
                                            <span>Altınbaş Üniversitesi Mahmutbey Kampüsü</span>
                                            <span>Fatma Altınbaş Konferans Salonu</span>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <Link to="/route" className="button">
                                            <span>Ben de Geliyorum!</span>
                                        </Link>
                                        <HashLink to="#speakers" className="button">
                                            <span>Zirve Detayları</span>
                                        </HashLink>
                                    </div>
                                </div>

                                <div className="image">
                                    <img src="./assets/campus-compresed.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event-details">
                <div className="section" id="speakers">
                    <div className="center">
                        <div className="section-title">
                            <span>Konuşmacılar</span>
                        </div>
                        <div className="section-content">
                            <div className="speakers-container">
                                {speakers.map((speaker: any, index: number) => {
                                    return (
                                        <div className="speaker" key={index}>
                                            <div className="picture">
                                                <img src={`./assets/speakers/${speaker.picture}`} alt="" />
                                            </div>
                                            <div className="about">
                                                <div className="name">
                                                    <span>{speaker.name}</span>
                                                </div>
                                                <div className="company">
                                                    <span>{speaker.company}</span>
                                                </div>
                                                <div className="title">
                                                    <span>{speaker.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section blue" id="partners">
                    <div className="center">
                        <div className="section-title">
                            <span>Sponsorlar</span>
                        </div>
                        <div className="section-content">
                            <div className="sponsors-container">
                                {sponsorships.map((sponsor: any, index: number) => {
                                    return (
                                        <div className="sponsor">
                                            <img src={`./assets/logos/${sponsor.logo}`} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section black" id="contact">
                    <div className="center">
                        <div className="section-title">
                            <span>İletişim</span>
                        </div>
                        <div className="section-content">
                            <div className="address-container">
                                <div className="address">
                                    <div className="address-details">
                                        <div className="icon">
                                            <PhoneIcon />
                                        </div>
                                        <div className="text">
                                            <span>+90 539 336 17 73</span>
                                        </div>
                                    </div>
                                    <div className="address-details">
                                        <div className="icon">
                                            <MessageIcon />
                                        </div>
                                        <div className="text">
                                            <span>info@altinbasteknolojizirvesi.com</span>
                                        </div>
                                    </div>
                                    <div className="address-details">
                                        <div className="icon">
                                            <LocationPinIcon />
                                        </div>
                                        <div className="text">
                                            <span>Altınbaş Üniversitesi Mahmutbey Teknoloji Yerleşkesi (Merkez Kampüs) Mahmutbey Dilmenler Caddesi, No:26, Bağcılar - İSTANBUL</span>
                                        </div>
                                    </div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5383758745006!2d28.81824731547049!3d41.05722302436033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa572bcf1f79f%3A0x1c90398a23fee242!2sAltinbas%20Holding!5e0!3m2!1sen!2str!4v1645211130119!5m2!1sen!2str" style={{ border: 0 }} allowFullScreen={false} loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
