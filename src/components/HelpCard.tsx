type HelpCardProps = {
  imageSource: string;
  textImg: string;
};

const HelpCard: React.FC<HelpCardProps> = ({ imageSource, textImg }) => {
  return (
    <div>
      <div className="flex group w-30 h-48 bg bg-custom-blue-ligth bg-opacity-10 rounded-t-md hover:cursor-pointer  hover:shadow-2xl">
        <img
          src={imageSource}
          className="text-custom-blue-ligth mx-auto mt-8 w-14 h-14"
        />
        <div className="absolute bg-custom-blue-ligth w-30 h-20 rounded-b-md mt-28 text-white">
          <p className="flex group-hover:underline justify-center mx-auto w-24 text-center h-20 font-semibold text-white text-sm my-auto items-center">
            {textImg}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HelpCard;
