import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto my-8 items-center text-center space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <a href="https://twitter.com/planyzed">
          <AiOutlineTwitter className="hover:fill-greenAccent" size={28} />
        </a>
        <a href="https://instagram.com/pourya.js">
          <AiOutlineInstagram className="hover:fill-greenAccent" size={28} />
        </a>
        <a href="https://github.com/pouryak">
          <AiOutlineGithub className="hover:fill-greenAccent" size={28} />
        </a>
      </div>
      <p className="text-sm text-stone-500 dark:text-stone-400">
        © 2022 Pourya Karami. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
