import Logo from "../assets/indiscoveries-logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content mt-10 border border-t-black border-opacity-20">
        <aside className="flex flex-col">
          <button>
            <Image src={Logo} alt="logo" width={400} />
          </button>
          <p className="font-medium">
            R3_Project Team
            <br />
            <a href="https://smkmadinatulquran.sch.id/">SMK Madinatul Qur'an</a>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            About us
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            Contact
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            Jobs
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            Press kit
          </a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            About us
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            Contact
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            Jobs
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            Press kit
          </a>
        </nav>
        <form className="flex flex-col justify-end">
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email here"
                className="input input-bordered join-item"
              />
              <button className="btn btn-neutral join-item hover:bg-white hover:text-neutral transition-all duration-500 ease-in-out">
                Send
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer text-center justify-center items-center py-4">
        <p className="font-semibold text-sm">
          Copyright © 2023 - R3_Project Made with 🧠
        </p>
      </footer>
    </>
  );
};

export default Footer;
