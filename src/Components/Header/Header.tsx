import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="border-b	border-indigo shadow-md mx-auto p-3 md:p-6 ">
      <div className="container px-2">
        <div className="flex justify-between item-center">
          <div>
            <Link to="/">
              <img
                className="mt-2 md:mt-0 w-28 md:w-20"
                src={require("../../assets/images/tailwindLogo.png")}
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
