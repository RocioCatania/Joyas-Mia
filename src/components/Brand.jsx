import Logo from '../assets/img/Logo.png';
import './Brand.css';

const Brand = () => {
    return ( 
        <div className="logo border border-warning rounded-5">
        <img  className = "rounded-5" src= {Logo} alt="logo" />
        
        </div>
    );
};

export default Brand;

