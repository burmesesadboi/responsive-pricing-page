import { data } from "../../data/cardData";
import CardFeatures from "./CardFeatures";

const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-16 mt-24">
      {data.map((card) => (
        <div
          key={card.id}
          className="w-60 p-5 rounded-xl border-2 border-primary hover:shadow-lg hover:shadow-[#E87070]/50 transition-all ease-in"
        >
          <span className="block text-subTitle font-bold ">{card.info}</span>
          <span className="tracking-wide text-primary text-3xl leading-10 font-bold">
            {card.title}
          </span>
          <div className="mx-1">
            <ul className="py-9">
              {card.features.map((feature, index) => (
                <CardFeatures key={index} feature={feature} id={index} />
              ))}
            </ul>
            <div className="flex justify-center mb-4">
              <button className="border-2 border-primary rounded-md px-20 py-1 font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Buy
              </button>
            </div>
            <span className="text-xs text-secondary font-bold tracking-tight">
              {card.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
