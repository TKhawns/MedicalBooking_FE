import Header from '../../styles/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Heart.scss';
function Heart() {
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
                        <div className="title">Tim mạch</div>
                        <div className="doctor">Bác sĩ Tim mạch giỏi</div>
                        <div className="list-doctor">Danh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:</div>
                        <ul>
                            <li>
                                Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học
                                trong nước và quốc tế.
                            </li>
                            <li>
                                <span>Các giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội</span>
                            </li>
                            <li>
                                <span>
                                    Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia,
                                    Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội
                                </span>
                            </li>
                            <li>
                                <span>
                                    Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam
                                </span>
                            </li>
                            <li>
                                <span>Đạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</span>
                            </li>
                        </ul>
                        <div className="doctor">Khám tư vấn tim mạch</div>
                        <ul>
                            <li>Khó thở, Đau ngực, đau tim</li>
                            <li>
                                <span>Tăng huyết áp, hạ huyết áp</span>
                            </li>
                            <li>
                                <span>Rối loạn mỡ máu, c</span>ao huyết áp, chóng mặt
                            </li>
                            <li>
                                <span>Bệnh van tim (Hẹp hở van tim),&nbsp;</span>Hẹp động mạch chủ
                            </li>
                            <li>Cảm giác hồi hộp, tim đập nhanh &nbsp; &nbsp;</li>
                            <li>
                                Tim bẩm sinh, có tiền sử bệnh tim to,&nbsp;tiền sử tai biến
                                <span> </span>
                                &nbsp; &nbsp;
                            </li>
                            <li>
                                <span>Đã đặt stent tim,&nbsp;</span>nong động mạch vành
                            </li>
                            <li>
                                Giãn tĩnh mạch chân
                                <span> </span>
                                &nbsp; &nbsp;
                            </li>
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

export default Heart;
