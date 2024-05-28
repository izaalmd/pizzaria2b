import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '../Appcss'

const Home = () => {

    return (
        <div>
            <Link to='/inicio'>
                <img className='img-fluid' src={logo}
                alt='logo' ></img>
            </Link>
        </div>
    )
}
export default Home