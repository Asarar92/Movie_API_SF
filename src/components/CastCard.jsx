import './CastCard.css'; 
import { Link } from 'react-router-dom';


const CastCard = ({ actorId,imageUrl, name, role, imageAlt = "" }) => {
  return (
    <div className="card-container">
  <Link to={`/actor/${actorId}`} className="card-image-link">  
        <img 
          src={imageUrl || "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/djLVFETFTvPyVUdrd7aLVykobof.jpg"} 
          alt={imageAlt} 
          className="card-image"
        />
      </Link>
      <div className="card-content">
        <h3 className="card-name">{name || "Alpha "}</h3>
        <p className="card-role">{role || "beta"}</p>
      </div>
    </div>
  );
};

export default CastCard;