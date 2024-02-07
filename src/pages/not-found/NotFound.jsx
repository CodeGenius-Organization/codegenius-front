import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import img from "./assets/error-404.svg"; 

function Error() {
    const navigate = useNavigate();
    return (
    <>
        <div className="body">
            <div className="error-not-found">
                <img src={img}></img>
                <div className='text'>
                    <p>Ops...</p>
                    <p>A página que você procura, não foi encontrada!</p>
                    <button className='button-not-found' onClick={() => navigate('/')}>Voltar</button>
                </div>
            </div>
        </div>
    </>
    );
}
export default Error;