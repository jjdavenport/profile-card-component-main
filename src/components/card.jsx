import profile from "../assets/image-victor.jpg";
import CardItem from "./card-item";

const Card = () => {
  return (
    <>
      <main>
        <div className="h-40"></div>
        <div className="bg-white p-1 rounded-full">
          <img className="object-contain rounded-full" src={profile} />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span>Victor Crest</span>
              <span>26</span>
            </div>
            <span>London</span>
          </div>
          <ul className="flex gap-2">
            <CardItem title="80K" subTitle="Followers" />
            <CardItem title="803K" subTitle="Likes" />
            <CardItem title="1.4K" subTitle="Photos" />
          </ul>
        </div>
      </main>
    </>
  );
};

export default Card;
