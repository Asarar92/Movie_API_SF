import './CastCard.css'; 
import { Link } from 'react-router-dom';


const CastCard = ({ actorId,imageUrl, name, role, imageAlt = "" }) => {
  console.log(actorId,imageUrl, name, role, imageAlt)
  return (
    <div className="card-container">
  <Link to={`/actor/${actorId}`} className="card-image-link">  
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="card-image"
        />
      </Link>
      <div className="card-content">
        <h3 className="card-name">{name }</h3>
        <p className="card-role">{role}</p>
      </div>
    </div>
  );
};

export default CastCard;