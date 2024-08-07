export type HomeCardProps = {
  imgSource: string;
  imgAlt: string;
};

const HomeCard: React.FC<HomeCardProps> = ({ imgSource, imgAlt }) => {
  return (
    <div className="flex w-85 h-85 rounded-2xl overflow-hidden ml-6 border cursor-pointer hover:border-custom-blue-ligth">
      <img src={imgSource} alt={imgAlt} />
    </div>
  );
};

export default HomeCard;
