import Header from '../../styles/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Nerve.scss';
function Nerve() {
    return (
        <div>
            <Header />
            <div className="wrapper">
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
                        <div className="route-item">Khám chuyên khoa</div>
                    </div>
                </div>
                <div className="center-content">
                    <div className="detail">
                        <div className="title">Thần kinh</div>
                        <div className="doctor">Bác sĩ Thần kinh giỏi</div>
                        <div className="list-doctor">Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:</div>
                        <ul>
                            <li>
                                Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các
                                bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại
                                học Y Hà Nội, Bệnh viện 103.
                            </li>
                            <li>
                                Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu
                                thuật Thần kinh...
                            </li>
                        </ul>
                        <div className="doctor">Khám bệnh chuyên khoa Thần kinh</div>
                        <ul>
                            <li>Bại Não</li>
                            <li>Đau đầu, chóng mặt, buồn nôn</li>
                            <li>Bệnh Pakison, bệnh tiền đình</li>
                            <li>Bị co cơ, căng dây thần kinh</li>
                            <li>Động kinh, có những cơn vãng ý thức</li>
                            <li>Bị tê bì nửa mặt, chèn dây thần kinh</li>
                            <li>Bồn chồn, lo lắng, hồi hộp, chân tay run</li>
                            <li>Có dấu hiệu tăng động</li>
                            <li>Co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi </li>
                            <li>Chấn thương đầu, dây thần kinh</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
                <div className="transfer-layer"></div>
                <div className="bot-wrapper">
                    <div className="bot-content">
                        <div className="left-content">
                            <div className="avatar">
                                <img
                                    className="image"
                                    src="https://cdn.bookingcare.vn/fo/w256/2021/05/20/141836-bs-le-quoc-viet.png"
                                />
                                <div>Chi tiết</div>
                            </div>
                            <div className="information">
                                <div className="name">Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt</div>
                                <p className="description">
                                    Hơn 30 năm kinh nghiệm khám và điều trị các bệnh nội cơ xương khớp và 40 năm kinh
                                    nghiệm khám Nội tổng quát. Nguyên Phó Giám đốc Bệnh viện E Bác sĩ nhận khám bệnh
                                    nhân từ 4 tuổi trở lên
                                </p>
                                <div className="address">Địa chỉ: Hà Nội</div>
                            </div>
                        </div>
                        <div className="mid-content"></div>
                        <div className="right-content">
                            <div className="date">
                                <select>
                                    <option>Thứ 2</option>
                                    <option>Thứ 3</option>
                                    <option>Thứ 4</option>
                                    <option>Thứ 5</option>
                                    <option>Thứ 6</option>
                                    <option>Thứ 7</option>
                                    <option>Chủ nhật</option>
                                </select>
                            </div>
                            <div className="schedule">Lịch khám</div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="address">
                                <div>ĐỊA CHỈ KHÁM</div>
                                <div>Phòng khám Đa khoa Mediplus</div>
                                <div className="detail">
                                    Tầng 2, Trung tâm thương mại Mandarin Garden 2, 99 phố Tân Mai, Tân Mai, Hoàng Mai,
                                    Hà Nội
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="cost">
                                <div className="cost-title">GIÁ KHÁM: </div>
                                <div>300.000đ - 400.000đ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot-wrapper">
                    <div className="bot-content">
                        <div className="left-content">
                            <div className="avatar">
                                <img
                                    className="image"
                                    src="https://cdn.bookingcare.vn/fo/w256/2021/05/20/141836-bs-le-quoc-viet.png"
                                />
                                <div>Chi tiết</div>
                            </div>
                            <div className="information">
                                <div className="name">Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt</div>
                                <p className="description">
                                    Hơn 30 năm kinh nghiệm khám và điều trị các bệnh nội cơ xương khớp và 40 năm kinh
                                    nghiệm khám Nội tổng quát. Nguyên Phó Giám đốc Bệnh viện E Bác sĩ nhận khám bệnh
                                    nhân từ 4 tuổi trở lên
                                </p>
                                <div className="address">Địa chỉ: Hà Nội</div>
                            </div>
                        </div>
                        <div className="mid-content"></div>
                        <div className="right-content">
                            <div className="date">
                                <select>
                                    <option>Thứ 2</option>
                                    <option>Thứ 3</option>
                                    <option>Thứ 4</option>
                                    <option>Thứ 5</option>
                                    <option>Thứ 6</option>
                                    <option>Thứ 7</option>
                                    <option>Chủ nhật</option>
                                </select>
                            </div>
                            <div className="schedule">Lịch khám</div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="address">
                                <div>ĐỊA CHỈ KHÁM</div>
                                <div>Phòng khám Đa khoa Mediplus</div>
                                <div className="detail">
                                    Tầng 2, Trung tâm thương mại Mandarin Garden 2, 99 phố Tân Mai, Tân Mai, Hoàng Mai,
                                    Hà Nội
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="cost">
                                <div className="cost-title">GIÁ KHÁM: </div>
                                <div>300.000đ - 400.000đ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot-wrapper">
                    <div className="bot-content">
                        <div className="left-content">
                            <div className="avatar">
                                <img
                                    className="image"
                                    src="https://cdn.bookingcare.vn/fo/w256/2021/05/20/141836-bs-le-quoc-viet.png"
                                />
                                <div>Chi tiết</div>
                            </div>
                            <div className="information">
                                <div className="name">Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt</div>
                                <p className="description">
                                    Hơn 30 năm kinh nghiệm khám và điều trị các bệnh nội cơ xương khớp và 40 năm kinh
                                    nghiệm khám Nội tổng quát. Nguyên Phó Giám đốc Bệnh viện E Bác sĩ nhận khám bệnh
                                    nhân từ 4 tuổi trở lên
                                </p>
                                <div className="address">Địa chỉ: Hà Nội</div>
                            </div>
                        </div>
                        <div className="mid-content"></div>
                        <div className="right-content">
                            <div className="date">
                                <select>
                                    <option>Thứ 2</option>
                                    <option>Thứ 3</option>
                                    <option>Thứ 4</option>
                                    <option>Thứ 5</option>
                                    <option>Thứ 6</option>
                                    <option>Thứ 7</option>
                                    <option>Chủ nhật</option>
                                </select>
                            </div>
                            <div className="schedule">Lịch khám</div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                                <div className="grid-item">
                                    <div>8:00 - 8:30</div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="address">
                                <div>ĐỊA CHỈ KHÁM</div>
                                <div>Phòng khám Đa khoa Mediplus</div>
                                <div className="detail">
                                    Tầng 2, Trung tâm thương mại Mandarin Garden 2, 99 phố Tân Mai, Tân Mai, Hoàng Mai,
                                    Hà Nội
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="cost">
                                <div className="cost-title">GIÁ KHÁM: </div>
                                <div>300.000đ - 400.000đ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Nerve;
