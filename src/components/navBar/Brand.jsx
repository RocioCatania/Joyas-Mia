import './Brand.css';
import { Link } from 'react-router-dom';

const Brand = ({ children }) => {
    return (
        <div className="logo border border-warning rounded-5">
            <Link to="/">
                <img className="rounded-5" src="https://i.pinimg.com/736x/4e/5c/bb/4e5cbba557e890adf0274baae14ea1fd.jpg" alt="Logo de la marca" />
                {children}
            </Link>
        </div>
    );
};

export default Brand;


