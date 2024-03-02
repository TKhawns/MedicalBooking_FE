import HomeHeader from './Header';
import Specialty from './Section/Specialty';
import Facility from './Section/Facility';
import FamousDoctor from './Section/FamousDoctor';
import About from './Section/About';
import Footer from './Section/Footer';
function HomePage() {
    return (
        <div>
            <HomeHeader />
            <Specialty />
            <Facility />
            <FamousDoctor />
            <About />
            <Footer />
        </div>
    );
}

export default HomePage;
