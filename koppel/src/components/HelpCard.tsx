interface HelpCardProps {
    img:string;
    text:string;
}

const HelpCard:React.FC<HelpCardProps> = ({img,text}) => {
    return(
        <>
        <div>
            <div className="flex w-30 h-48 bg bg-custom-blue-ligth bg-opacity-10 rounded-t-md shadow-2xl hover:cursor-pointer">
                <img src={img }className="text-custom-blue-ligth mx-auto mt-8 w-14 h-14"/>
                <div className="absolute bg-custom-blue-ligth w-30 h-20 rounded-b-md mt-28 text-white hover:underline">
                    <p className="flex justify-center mx-auto w-24 text-center h-20 font-semibold text-white text-sm my-auto items-center">{text}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default HelpCard;