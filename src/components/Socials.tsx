import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface sizeProp {
  size?: number;
  colors?: string;
}

const Socials = ({ size = 22, colors = "" }: sizeProp) => {
  return (
    <div className={`flex gap-5 ${colors}`}>
      <a
        href="https://github.com/Anurag2516/"
        aria-label="Github link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={size}
          className="hover:scale-110 transition-all duration-200 ease-out"
        />
      </a>
      <a
        href="https://linkedin.com/in/anurag2516"
        aria-label="Linkedin link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={size}
          className="hover:scale-110 transition-all duration-200 ease-out"
        />
      </a>
      <a
        href="mailto:anuragyadav2516@gmail.com"
        aria-label="Send email"
        title="Send email"
      >
        <FaEnvelope
          size={size}
          className="hover:scale-110 transition-all duration-200 ease-out"
        />
      </a>
    </div>
  );
};

export default Socials;