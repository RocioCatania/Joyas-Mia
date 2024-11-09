import Logo from '../../assets/img/Logo.png';
import './Brand.css';

const Brand = ({Logo , children} ) => {
    return ( 
        <div className="logo border border-warning rounded-5">
        <a href="">
        <img  className = "rounded-5" src= {Logo} alt="logo"  />
        {children}
        </a>
        </div>
    );
};

export default Brand;

