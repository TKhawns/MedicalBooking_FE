import HomeHeader from './Header/Header';
import Specialty from './Section/Specialty/Specialty';
import Facility from './Section/Facility/Facility';
import FamousDoctor from './Section/FamousDoctor/FamousDoctor';
import About from './Section/AboutUs/About';
import Footer from './Footer/Footer';
import './HomePage.scss';
function HomePage() {
    return (
        <div>
            <HomeHeader />
            <div className="body">
                <div className="handbook-container">
                    <div className="handbook-wrapper">
                        <div className="handbook-content">
                            <div className="handbook-title">Specialty</div>
                            <div className="handbook-slider">
                                <Specialty />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="handbook-container">
                    <div className="handbook-wrapper">
                        <div className="handbook-content">
                            <div className="handbook-title">Facility</div>
                            <div className="handbook-slider">
                                <Facility />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="handbook-container">
                    <div className="handbook-wrapper">
                        <div className="handbook-content">
                            <div className="handbook-title">Famous Doctor</div>
                            <div className="handbook-slider">
                                <FamousDoctor />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <Footer />
        </div>
    );
}

export default HomePage;
