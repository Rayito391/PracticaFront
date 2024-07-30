import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify/icons-ep/arrow-right';

const BenefitBar:React.FC = () => {
    return(
        <>
            <div className="flex ">
                <button className="flex items-center mx-auto rounded-full w-125 h-16 bg-custom-yellow">
                    <div className="flex mx-auto text-custom-blue-ligth font-bold text-xl mt-1 hover:underline">
                        Beneficios de comprar en Koppel.com
                        <Icon icon={arrowRightIcon} className='text-custom-blue-ligth -mt-1 ml-5 w-10 h-10' />
                    </div>
                </button>
            </div>
            <div className="h-24 bg-white mx-5 -mt-4 border rounded-xl">
                <div className="flex my-5 ml-24">
                    <ul className="flex items-center space-x-40">
                        <li className="flex items-center cursor-pointer hover:underline">
                            <Icon icon="hugeicons:truck-delivery" className="text-custom-blue-ligth w-12 h-12 mr-4"/>
                            Envío Seguro
                        </li>
                        <li className="flex items-center cursor-pointer  hover:underline">
                            <Icon icon="mynaui:check-waves" className="text-custom-blue-ligth w-12 h-12  mr-4" />
                            Hasta 2 años de garantía
                        </li>
                        <li className="flex items-center cursor-pointer  hover:underline">
                            <Icon icon="octicon:feed-star-16" className="text-custom-blue-ligth w-10 h-10  mr-4" />
                            Productos exclusivos
                        </li>
                        <li className="flex items-center cursor-pointer hover:underline">
                            <Icon icon="fontisto:shield"  className="text-custom-blue-ligth w-10 h-10  mr-4" />
                            Compra fácil y segura
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BenefitBar;