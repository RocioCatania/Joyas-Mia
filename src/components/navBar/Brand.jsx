import './Brand.css';


const Brand = ({children} )  => {
    return ( 
        <div className="logo border border-warning rounded-5">
        <a href="">
        <img  className = "rounded-5" src="https://www.canva.com/design/DAGT-vyrth8/ommuWG4wHQ3I2YG-CT5jJw/view" alt="logo"  />
        {children}
        </a>
        </div>
    );
};

export default Brand;

