//styles
import "../styles/Card.css";

function Card({ cardDetails }) {
  function getLabelTextColor() {
    return cardDetails.label === "Low"
      ? "#D58D49"
      : cardDetails.label === "High"
      ? "#D8727D"
      : "#68B266";
  }

  function getLabelBgColor() {
    return cardDetails.label === "Low"
      ? "rgba(223,168,116,0.2)"
      : cardDetails.label === "High"
      ? "rgba(216, 114, 125,0.2)"
      : "rgba(131, 194, 157, 0.2)";
  }

  return (
    <div className="card">
      <div className="card__section1">
        <p
          style={{
            color: getLabelTextColor(),
            backgroundColor: getLabelBgColor(),
          }}
        >
          {cardDetails.label}
        </p>
        <img src="projectImages/menu-selector-dots.svg" />
      </div>
      <h1 className="card__title">{cardDetails.title}</h1>
      {cardDetails.description ? (
        <p className="card__description">{cardDetails.description}</p>
      ) : (
        ""
      )}
      {cardDetails.imageURLs ? (
        <div className="card__imageContainer">
          {cardDetails.imageURLs.map((url, index) => (
            <img
              key={index}
              src={`${url}`}
              style={{
                margin: `${cardDetails.imageURLs.length > 1 ? "0 5px" : "0"}`,
              }}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="card__section2">
        <img src={cardDetails.users} alt="users" />
        <div className="card__section2__right">
          <div className="card__section2__right__utility">
            <img src="projectImages/card-message-icon.svg" alt="message icon" />
            <p>{cardDetails.commentsCount} comments</p>
          </div>

          <div className="card__section2__right__utility">
            <img src="projectImages/card-file-icon.svg" alt="file icon" />
            <p>{cardDetails.filesCount} files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
