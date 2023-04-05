import {
    FaHome,
    FaBookOpen,
    FaImage,
    FaBook,
    FaGraduationCap,
    FaMapMarkerAlt
} from "react-icons/fa";
const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__item">
                <FaHome className="menu__item-icon" />
                Home
            </div>
            <div className="menu__item">
                <FaBookOpen className="menu__item-icon" />
                About Us
            </div>
            <div className="menu__item">
                <FaImage className="menu__item-icon" />
                Projects
            </div>
            <div className="menu__item">
                <FaBook className="menu__item-icon" />
                Blog
            </div>
            <div className="menu__item">
                <FaGraduationCap className="menu__item-icon" />
                Education
            </div>
            <div className="menu__item">
                <FaMapMarkerAlt className="menu__item-icon" />
                Contact
            </div>
        </div>
    );
};

export default Menu;
