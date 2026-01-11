import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/Anurag2516/"
        aria-label="Github link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://linkedin.com/in/anurag2516"
        aria-label="Linkedin link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="mailto:anuragyadav2516@gmail.com"
        aria-label="Send email"
        title="Send email"
      >
        <FaEnvelope size={22} />
      </a>
    </div>
  );
};

export default Socials;
