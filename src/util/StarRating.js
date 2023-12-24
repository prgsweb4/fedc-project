import { ReactComponent as Star} from "../assets/images/star.svg";
const StarRating = ({ stars }) => {
    const renderStars = () => {
      const starIcons = [];
      for (let i = 1; i <= stars; i++) {
        let starImg = i <= stars ? 'filled-star.png' : 'empty-star.png'; // Replace with your star image filenames
        starIcons.push(<Star key={i} fill="blue" width="100%" height="100%" />);
      }
      return starIcons;
    };
  
    return (
      <div className="star-icons">
        {renderStars()}
      </div>
    );
  }

  export default StarRating;