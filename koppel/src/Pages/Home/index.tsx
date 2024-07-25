//Components
import Carrousel from "../../components/photoCarrousel";


const Home: React.FC = () =>{
    const images = [
        'https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/OpenGraph/og_linea-blanca-electrodomesticos.jpg',
        'https://cdn2.coppel.com/images/emarketing/landings/amp/2022/mayo/outlet/mobile/Outlet_Jun_Mobile_12.jpg',
        'https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/OpenGraph/og_celulares.jpg',
        'https://cdn2.coppel.com/images/emarketing/landings/amp/2022/mayo/outlet/mobile/Outlet_Jun_Mobile_06.jpg',
        'https://cdn2.coppel.com/images/emarketing/landings/amp/2022/mayo/outlet/mobile/Outlet_Jun_Mobile_10.jpg',
        'https://cdn2.coppel.com/images/emarketing/landings/amp/2022/mayo/outlet/mobile/Outlet_Jun_Mobile_08.jpg',
        'https://cdn2.coppel.com/images/emarketing/sliders/2024/s30/mobile/s30_slider5_mobile_infantiles.jpg',
        'https://d33nllpiqx4xq6.cloudfront.net/files/Publicacion/1204475/Foto/note_picture/PUBLINOTA_COPPEL_JEANS_10_AGOSTO_2020-312239.png'
    ]

    return(
        <div className="flex mx-auto w-4/5 h-150 mt-6">
            <div className="ml-7 w-250 h-150 rounded-xl object-cover overflow-hidden cursor-pointer">
                <Carrousel images = {images}/>
            </div>
            <div className="flex flex-col w-85 mx-auto mb-16">
                <div className=" flex items center overflow-hidden w-auto h-2/4 cursor-pointer">
                    <img className="rounded-xl mb-5" src="https://cdn2.coppel.com/images/emarketing/sliders/2024/s30/mobile/s30_slider1_mobile_celulares.jpg" alt="" />
                </div>
                <div className=" flex items center overflow-hidden w-auto h-1/2 pb-2 cursor-pointer">
                    <img className="rounded-xl" src="https://cdn2.coppel.com/images/emarketing/landings/amp/2022/mayo/outlet/mobile/Outlet_Jun_Mobile_03.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;