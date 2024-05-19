import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { appLanguage } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';

function Header() {
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
                        <div className="child-content">
                            <div>
                                <b>
                                    <FormattedMessage id="homeheader.facilities" />
                                </b>
                            </div>
                            <div className="sub-title">
                                <FormattedMessage id="homeheader.select" />
                            </div>
                        </div>
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
        </React.Fragment>
    );
}

export default Header;
