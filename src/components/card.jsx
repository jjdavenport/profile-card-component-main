import profile from "../assets/image-victor.jpg";
import CardItem from "./card-item";

const Card = () => {
  return (
    <>
      <main className="flex w-80 flex-col items-center overflow-hidden rounded-xl bg-white shadow-md">
        <div className="bg-card h-36 w-full"></div>
        <div className="-mt-12 w-24 rounded-full bg-white p-1">
          <img className="rounded-full object-contain" src={profile} />
        </div>
        <div className="flex h-40 w-full flex-col items-center justify-center divide-y divide-gray-200 text-center">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex gap-2 text-lg">
              <span className="text-very-dark-desaturated-blue font-bold">
                Victor Crest
              </span>
              <span className="text-dark-gray">26</span>
            </div>
            <span className="text-dark-gray text-sm">London</span>
          </div>
          <ul className="flex h-full w-full items-center justify-between px-10">
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
