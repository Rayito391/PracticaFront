interface HomeCardProps {
  imgSource: string;
  imgAlt: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ imgSource, imgAlt }) => {
  return (
    <div>
      <div className="flex my-5 ml-5">
        <div className="w-85 h-85 bg-white rounded-2xl border border-white overflow-hidden hover:border-custom-blue-ligth">
          <img src={imgSource} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
