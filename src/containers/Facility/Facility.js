import { useRef } from 'react';
import Header from '../../styles/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Facility.scss';
function FacilityPage() {
    const sectionRefs = useRef({});

    // Hàm để cuộn đến phần tử đích
    const scrollToSection = (letter) => {
        const headerOffset = 100; // Adjust this value as needed
        const element = sectionRefs.current[letter];
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    // Danh sách chữ cái
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
        <div>
            <Header />
            <div className="facility-wrapper">
                <div className="top-content">
                    <div className="route-content">
                        <a href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                preserveAspectRatio="none"
                                viewBox="0 0 20 20"
                                fill="#45c3d2"
                                style={{ paddingBottom: '2px' }}
                            >
                                <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8z"></path>
                            </svg>
                            <span> / </span>
                        </a>
                        <div className="route-item">Tất cả cơ sở y tế</div>
                    </div>
                </div>
                <div className="facility-title">
                    <div className="title">Cơ sở y tế</div>
                    <div className="title-line"></div>
                    <div className="alphabet">
                        <ul>
                            {alphabet.map((letter) => (
                                <li key={letter} onClick={() => scrollToSection(letter)} className="li">
                                    <span>{letter}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {alphabet.map((letter) => (
                    <div key={letter} ref={(el) => (sectionRefs.current[letter] = el)} className="a-section">
                        <div className="top-section">
                            <div className="character">{letter}</div>
                            <div className="section-line"></div>
                        </div>
                        <div className="bot-section">
                            <div className="grid-container">
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                                <div className="grid-border">
                                    <a className="grid-item" href="/musculoskeletal">
                                        <div className="image">
                                            <img
                                                alt="Cơ Xương Khớp"
                                                className="image-item"
                                                src="https://cdn.bookingcare.vn/fo/w1920/2020/02/18/170749-benh-vien-an-viet.jpg"
                                            />
                                        </div>
                                        <span className="text">Cơ xương khớp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                */}
            </div>
            <Footer />
        </div>
    );
}

export default FacilityPage;
