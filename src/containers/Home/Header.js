import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
    faHeadset,
    faMagnifyingGlass,
    faHospital,
    faMobileScreen,
    faHospitalUser,
    faVial,
    faBrain,
    faTooth,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
function HomeHeader() {
    return (
        <React.Fragment>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <FontAwesomeIcon className="header-menu" icon={faBars} />
                        <div className="header-logo"></div>
                    </div>
                    <div className="mid-content">
                        <div className="child-content">
                            <div>
                                <b>Chuyên Khoa</b>
                            </div>
                            <div className="sub-title">Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className="child-content">
                            <div>
                                <b>Cơ sở y tế</b>
                            </div>
                            <div className="sub-title">Chọn bệnh viện phòng khám</div>
                        </div>
                        <div className="child-content">
                            <div>
                                <b>Bác sĩ</b>
                            </div>
                            <div className="sub-title">Chọn bác sĩ giỏi</div>
                        </div>
                        <div className="child-content">
                            <div>
                                <b>Gói khám</b>
                            </div>
                            <div className="sub-title">Khám sức khỏe tổng quát</div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support-container">
                            <FontAwesomeIcon icon={faHeadset} className="support" />
                            <div className="support-title">Hỗ trợ</div>
                        </div>
                        <div className="language">
                            <b>VI</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-header-banner">
                <div className="content-up">
                    <div className="top-title">NỀN TẢNG Y TẾ</div>
                    <div className="bottom-title">
                        <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b>
                    </div>
                    <div className="search">
                        <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
                        <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                    </div>
                </div>
                <div className="content-down">
                    <div className="options">
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faHospital} />
                            </div>
                            <div className="text">Khám chuyên khoa</div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faMobileScreen} />
                            </div>
                            <div className="text">Khám từ xa</div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faHospitalUser} />
                            </div>
                            <div className="text">Khám tổng quát</div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faVial} />
                            </div>
                            <div className="text">Xét nghiệm y học</div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faBrain} />
                            </div>
                            <div className="text">Sức khỏe tinh thần</div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faTooth} />
                            </div>
                            <div className="text">Khám nha khoa</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomeHeader;
