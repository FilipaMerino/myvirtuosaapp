import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ValueCard = ({ title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-[5rem] md:mx-[10rem]">
      <h1 className="text-2xl lg:text-3xl flex justify-center mb-5 text-[#fb653e]">{title}</h1>
      <p className="text-md md:text-lg mb-3 text-center">{content}</p>
    </div>
  );
};

export default ValueCard;
