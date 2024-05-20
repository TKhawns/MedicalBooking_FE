import './HomeHeader.scss';
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
import { FormattedMessage } from 'react-intl';
import { appLanguage } from '../../../redux/appSlice';
import { useDispatch } from 'react-redux';

function HomeHeader() {
    const dispatch = useDispatch();
    const handleChangeLanguage = (language) => {
        dispatch(appLanguage(language));
    };

    return (
        <React.Fragment>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <FontAwesomeIcon className="header-menu" icon={faBars} />
                        <a href="/" className="header-logo"></a>
                    </div>
                    <div className="mid-content">
                        <a href="/specialty" className="child-content">
                            <div>
                                <b>
                                    <FormattedMessage id="homeheader.specialty" />
                                </b>
                            </div>
                            <div className="sub-title">
                                <FormattedMessage id="homeheader.find-doctor" />
                            </div>
                        </a>
                        <a href="facility-page" className="child-content">
                            <div>
                                <b>
                                    <FormattedMessage id="homeheader.facilities" />
                                </b>
                            </div>
                            <div className="sub-title">
                                <FormattedMessage id="homeheader.select" />
                            </div>
                        </a>
                        <a href="/doctor-page" className="child-content">
                            <div>
                                <b>
                                    <FormattedMessage id="homeheader.doctor" />
                                </b>
                            </div>
                            <div className="sub-title">
                                <FormattedMessage id="homeheader.select-doctor" />
                            </div>
                        </a>
                        <div className="child-content">
                            <div>
                                <b>
                                    <FormattedMessage id="homeheader.method" />
                                </b>
                            </div>
                            <div className="sub-title">
                                <FormattedMessage id="homeheader.checkup" />
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support-container">
                            <FontAwesomeIcon icon={faHeadset} className="support" />
                            <div className="support-title">
                                <FormattedMessage id="homeheader.support" />
                            </div>
                        </div>
                        <div className="language">
                            <select
                                className="select-language"
                                id="choose-language"
                                onChange={() => {
                                    handleChangeLanguage(document.getElementById('choose-language').value);
                                    localStorage.setItem('lang-now', document.getElementById('choose-language').value);
                                }}
                            >
                                <option className="select-vi" value="vi">
                                    VI
                                </option>
                                <option className="select-en" value="en">
                                    EN
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-header-banner">
                <div className="content-up">
                    <div className="top-title">
                        <FormattedMessage id="homeheader.title1" />
                    </div>
                    <div className="bottom-title">
                        <b>
                            <FormattedMessage id="homeheader.title2" />
                        </b>
                    </div>
                    <div className="search">
                        <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
                        <FormattedMessage id="homeheader.placeholder">
                            {(placeholder) => <input type="text" placeholder={placeholder} />}
                        </FormattedMessage>
                    </div>
                </div>
                <div className="content-down">
                    <div className="options">
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faHospital} />
                            </div>
                            <a href="/specialty" className="text">
                                <FormattedMessage id="homeheader.checkup-specialty" />
                            </a>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faMobileScreen} />
                            </div>
                            <div className="text">
                                <FormattedMessage id="homeheader.remote" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faHospitalUser} />
                            </div>
                            <div className="text">
                                <FormattedMessage id="homeheader.general" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faVial} />
                            </div>
                            <div className="text">
                                <FormattedMessage id="homeheader.analysis" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faBrain} />
                            </div>
                            <div className="text">
                                <FormattedMessage id="homeheader.morale" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <FontAwesomeIcon className="icon-hospital" icon={faTooth} />
                            </div>
                            <div className="text">
                                <FormattedMessage id="homeheader.dentist" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomeHeader;
