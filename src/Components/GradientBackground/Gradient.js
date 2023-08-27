import './Style/style.css';

const Gradient = ({ component }) => {

    return (
        <div className="gradient-container"
            style={{
                animation: 'gradientAnimation 20s ease infinite'
            }}>
            {component}
        </div>
    );
}

export default Gradient;