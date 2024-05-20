import Header from '../../styles/Header/Header';
import Footer from '../Home/Footer/Footer';
import './Digest.scss';
function Digest() {
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
                        <div className="title">Tiêu hoá</div>
                        <div className="doctor">Bác sĩ Chuyên khoa Tiêu hóa</div>
                        <div className="list-doctor">Danh sách các bác sĩ Tiêu hóa uy tín đầu ngành tại Việt Nam:</div>
                        <ul>
                            <li>
                                Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn
                                về chuyên ngành Tiêu hóa tại Hà Nội
                            </li>
                            <li>Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội</li>
                            <li>
                                Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh
                                Viện Việt Đức, Bệnh Viện Nhi Trung ương, Bệnh viện Y học Cổ truyền Việt Nam...
                            </li>
                            <li>
                                Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao
                                cấp,...
                            </li>
                        </ul>
                        <div className="doctor">Tư vấn, khám và điều trị các Bệnh Tiêu hóa</div>
                        <ul>
                            <li>Ăn uống kém, không ngon</li>
                            <li>Rối loạn tiêu hóa, táo bón, trĩ</li>
                            <li>Nhiễm vi khuẩn HP (Helicobacter pylori)</li>
                            <li>Nội soi dạ dày, đại tràng, tiêu hóa</li>
                            <li>Buồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi</li>
                            <li>Co thắt thực quản, Hội chứng ruột kích thích</li>
                            <li>Đau bụng, dạ dày, đại tràng, thượng vị</li>
                            <li>Viêm đại tràng, dạ dày, tá tràng</li>
                            <li>Ung thư dạ dày, U nang tuyến tụy</li>
                            <li>Bệnh lý về gan, mật</li>
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

export default Digest;
