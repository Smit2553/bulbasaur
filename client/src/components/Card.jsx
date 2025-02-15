import PropTypes from "prop-types";

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  additionalInfo,
}) {
  return (
    <div className="simple-info-card">
      <img
        src={imageSrc || "https://via.placeholder.com/400x300"}
        alt={imageAlt}
        className="simple-info-card-image"
      />
      <div className="simple-info-card-content">
        <h2 className="simple-info-card-title">{title}</h2>
        <p className="simple-info-card-description">{description}</p>
        {additionalInfo && (
          <p className="simple-info-card-additional">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
};
