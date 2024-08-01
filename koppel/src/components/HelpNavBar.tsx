import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import Logo from '../assets/images/logo.png'
const HelpNavBar:React.FC = () =>{
    return(
        <>
        <div>
            <nav className="flex bg-custom-yellow h-20 w-full">
                <ul className="flex justify-between w-full">
                    <li className="flex items-start ml-1">
                        <Link to={'/'}>
                            <img
                                className="w-48 cursor-pointer"
                                src={Logo} 
                                title="Ir a la pagina principal de coppel.com"
                            />
                        </Link>
                    </li>
                    <li className="flex bg-custom-blue-ligth w-20 h-20 items-end">
                            <Link className="mx-auto my-auto" to={'/'}>
                                <Icon icon="prime:shopping-cart" className=" text-white w-14 h-14" />
                            </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default HelpNavBar;