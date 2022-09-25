import { useState } from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import s from "./AboutOneRocket.module.css";

const AboutOneRocket = ({ renderRocket }) => {
  const [showFullscreenButton, setShowFullscreenButton] = useState(false);
  const [showGalleryFullscreenButton, setShowGalleryFullscreenButton] =
    useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showGalleryPlayButton, setShowGalleryPlayButton] = useState(false);

  const images =
    renderRocket.length !== 0 &&
    renderRocket.flickr_images.map((item) => {
      return {
        original: `${item}`,
        originalHeight: "350px",
        originalWidth: "600px",
        thumbnail: `${item}`,
        thumbnailHeight: "100px",
        thumbnailWidth: "200px",
      };
    });
  return (
    <>
      <div className={s.container}>
        <ImageGallery
          items={images}
          showPlayButton={showPlayButton || showGalleryPlayButton}
          showFullscreenButton={
            showFullscreenButton || showGalleryFullscreenButton
          }
        />
      </div>

      <div className={s.containerInfo}>
        <strong className={s.title}>Основна інформація:</strong>
        <br />

        <div className={s.nameWrap}>
          <strong className={s.nameTitle}>Назва:</strong>
          <p className={s.name}>{renderRocket.name}</p>
        </div>
        <hr />
        <div className={s.descriptionWrap}>
          <strong className={s.nameTitle}>Трохи детальніше:</strong>
          <p>{renderRocket.description}</p>
        </div>
        <hr />
        <a className={s.link} href={renderRocket.wikipedia}>
          <p className={s.linkText}>Посилання на Wikipedia</p>
        </a>
        <hr />

        <div className={s.container}>
          <strong className={s.secondTitle}>Додакова інформація:</strong>
          <ul>
            <li>
              <p>Висота: {renderRocket.height_w_trunk.meters} метра</p>
            </li>
            <li>
              <p>Масса: {renderRocket.launch_payload_mass.kg} кг</p>
            </li>
            <li>
              <p>
                Перший політ:{" "}
                {renderRocket.first_flight.split("-").reverse().join("-")} року
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

AboutOneRocket.propTypes = {
  renderRocket: PropTypes.object.isRequired,
};

export default AboutOneRocket;
