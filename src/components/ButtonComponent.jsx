import './ButtonComponent.css';

const ButtonComponent = ({ texto, color }) => {
    const estilos= {
      backgroundColor: color
    };
return ( 
     <>
        <button style={color}>{texto}</button>
    </>
);
  };
  
export default ButtonComponent;
  