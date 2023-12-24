import "../assets/TestmCard.css";

import { ReactComponent as Star} from "../assets/images/star.svg";
import StarRating from "../util/StarRating";
const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";


const TestmCard = ({ data }) => {
  return (
    <>
     <div className="flex-item">
        <div className="img-wrap">
          <img src={`${data.image}`} alt="Customer" />
        </div>
        <p className="name">{data.name}</p>
        <span className="stars">
        <StarRating stars={parseInt(data.stars)} />
        </span>
        <div className="text">
          {data.description ? data.description : lorem}
        </div>
      </div>
    </>
  );
};

export default TestmCard;