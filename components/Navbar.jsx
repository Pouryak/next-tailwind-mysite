import Link from "next/link";
import { useTheme } from "next-themes";
import { ImGithub } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode, MdBedtime } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="w-full backdrop-blur bg-glassLight dark:bg-glassDark z-40 top-0 sticky py-2 px-4 sm:px-8">
        {/* Navbar Inner Box */}
        <div className="flex items-center justify-between mx-auto max-w-[750px]">
          {/* leftnav box */}
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              alt="logo"
              className="text-lg font-opensans tracking-tighter font-bold"
            >
              Pourya Karami
            </Link>
            <nav>
              <ul className="list-none flex flex-shrink-0 items-center">
                <li>
                  <a
                    className="link flex"
                    href="https://github.com/Pouryak/Next-portfolio.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImGithub
                      color="var(--text-color)"
                      size={14}
                      className="mr-1"
                    />{" "}
                    Source
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* rightnav box*/}
          <div className="flex items-center space-x-2 ">
            <div
              className="link"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <MdBedtime /> : <MdOutlineLightMode />}
            </div>
            {/* <div className="link md:hidden">
            <AiOutlineMenu />
          </div> */}
          </div>
        </div>
      </div>
      {/* Scroll Progress bar */}
    </>
  );
};

export default Navbar;
