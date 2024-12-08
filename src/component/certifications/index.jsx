import PropTypes from "prop-types";
import { colors, transition, certificationsData } from "../../constants";
import { Modal } from "../../CommonComponents";
import { useState } from "react";
export const Certifications = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading, link } = isDarkMode
    ? colors.dark
    : colors.light;
  const [isModalOpen, setIsModalOpen] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [originalLink, setOriginalLink] = useState("");

  return (
    <section
      className={`pt-20 ${background} ${transition.duration}`}
      id="certifications-section"
    >
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Certifications
            </h1>
            {/* <p className={`text-lg mt-2.5 ${text} ${transition.duration}`}>
              Below are the details to reach out to me! Certifications
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {certificationsData.map((certificate, index) => (
            <div
              key={certificate.key}
              className={`w-[604px] p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <img
                onClick={() => {
                  setIsModalOpen(index + 1);
                  setImgUrl(certificate.imageUrl);
                  setTitle(certificate.title);
                  setOriginalLink(certificate.originalLink);
                }}
                src={certificate.imageUrl}
                alt=""
                className="rounded-lg cursor-pointer"
              />
              <p className="mt-5">{certificate.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen > 0}
        onClose={() => setIsModalOpen(0)}
        isDarkMode={isDarkMode}
        title={title}
      >
        <div>
          <img src={imgUrl} alt="" className="rounded-lg" />
          <a
            href={originalLink}
            className={`${link} flex justify-center items-center mt-1.5 hover:underline`}
            target="_blank"
          >
            View original certificate
          </a>
        </div>
      </Modal>
    </section>
  );
};

Certifications.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Certifications;
