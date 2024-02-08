import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function SideSocial() {
  return (
    <div className="fixed flex h-screen items-center ml-10">
      <div className=" space-y-8 flex flex-col">
        <a
          href="https://github.com/punyakrit"
          target="_blank"
          className="inline-block"
        >
          <FaGithub className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 " />
        </a>

        <a
          href="https://twitter.com/Punyakrit22"
          target="_blank"
          className="inline-block"
        >
          <FaTwitter className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 " />
        </a>
        <a
          href="https://www.linkedin.com/in/punyakrit-singh-makhni/"
          target="_blank"
          className="inline-block"
        >
          <FaLinkedin className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 " />
        </a>
        <a
          href="mailto:punyakritsinghmakhni@gmail.com"
          target="_blank"
          className="inline-block"
        >
          <MdOutlineEmail className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 " />
        </a>

        <a
          href="https://wa.me/6239668383"
          target="_blank"
          className="inline-block"
        >
          <FaWhatsapp className="w-7 h-7 hover:w-10 hover:h-10 transition-all duration-500 " />
        </a>
        

      </div>
    </div>
  );
}

export default SideSocial;