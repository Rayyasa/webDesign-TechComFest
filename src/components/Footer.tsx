import Logo from "../assets/indiscoveries-logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      {/* <footer className="footer p-10 bg-base-200 text-base-content mt-10 border border-t-black border-opacity-20">
        <aside className="flex flex-col">
          <button>
            <Image src={Logo} alt="logo" width={400} />
          </button>
          <p className="font-medium">
            R3_Project Team
            <br />
            <a href="https://smkmadinatulquran.sch.id/">SMK Madinatul Qur&apos;an</a>
          </p>
        </aside>
        <nav>
          <header className="footer-title">About Us</header>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            User_ig
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            User_ig
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            User_ig
          </a>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            12983801289
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            102938129083
          </a>
          <a className="link hover:font-semibold  hover:translate-x-2 no-underline transition-all duration-500 ease-in-out">
            1923012983012
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
      </footer> */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <aside>
          {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
          <Image src={Logo} alt="logo" width={400} />
          <p className="font-bold">
            R3_Project Team
          </p> 
          <p>Copyright © 2023 - R3_Project  made with ❤️</p>
        </aside> 
        <nav>
          <div className="grid grid-flow-col gap-2">
            <Link href='https://www.instagram.com/smkmadinatulquran/' target="_blank">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0007 6.54547C19.2605 6.54547 18.6656 6.5662 16.8039 6.65093C14.9457 6.73602 13.6774 7.0302 12.5676 7.46183C11.4197 7.90765 10.4459 8.50402 9.47571 9.47456C8.50483 10.4447 7.90849 11.4186 7.46123 12.5662C7.02852 13.6764 6.73398 14.9451 6.65035 16.8026C6.56707 18.6644 6.54526 19.2597 6.54526 24C6.54526 28.7404 6.56635 29.3335 6.65071 31.1953C6.73616 33.0535 7.03033 34.3218 7.46159 35.4317C7.90776 36.5797 8.50411 37.5535 9.47462 38.5237C10.4444 39.4946 11.4182 40.0924 12.5654 40.5382C13.676 40.9698 14.9446 41.264 16.8024 41.3491C18.6642 41.4338 19.2587 41.4546 23.9985 41.4546C28.7391 41.4546 29.3322 41.4338 31.194 41.3491C33.0521 41.264 34.3219 40.9698 35.4324 40.5382C36.58 40.0924 37.5523 39.4946 38.5221 38.5237C39.493 37.5535 40.0893 36.5797 40.5366 35.432C40.9657 34.3218 41.2602 33.0531 41.3475 31.1957C41.4311 29.3338 41.4529 28.7404 41.4529 24C41.4529 19.2597 41.4311 18.6647 41.3475 16.8029C41.2602 14.9447 40.9657 13.6764 40.5366 12.5666C40.0893 11.4186 39.493 10.4447 38.5221 9.47456C37.5512 8.50365 36.5803 7.90729 35.4313 7.46183C34.3186 7.0302 33.0495 6.73602 31.1914 6.65093C29.3297 6.5662 28.7369 6.54547 23.9953 6.54547H24.0007ZM22.435 9.69093C22.8997 9.6902 23.4182 9.69093 24.0007 9.69093C28.6609 9.69093 29.2133 9.70765 31.0536 9.79129C32.7554 9.86911 33.679 10.1535 34.2942 10.3924C35.1088 10.7087 35.6895 11.0869 36.3 11.6978C36.9109 12.3087 37.2891 12.8906 37.6061 13.7051C37.845 14.3197 38.1298 15.2433 38.2072 16.9451C38.2908 18.7851 38.309 19.3378 38.309 23.996C38.309 28.6542 38.2908 29.2069 38.2072 31.0469C38.1294 32.7487 37.845 33.6724 37.6061 34.2869C37.2898 35.1015 36.9109 35.6815 36.3 36.292C35.6891 36.9029 35.1091 37.2811 34.2942 37.5975C33.6797 37.8375 32.7554 38.1211 31.0536 38.1989C29.2137 38.2826 28.6609 38.3007 24.0007 38.3007C19.3401 38.3007 18.7878 38.2826 16.9479 38.1989C15.2461 38.1204 14.3225 37.836 13.7069 37.5971C12.8923 37.2807 12.3105 36.9026 11.6996 36.2917C11.0888 35.6807 10.7106 35.1004 10.3935 34.2855C10.1546 33.6709 9.86988 32.7473 9.79243 31.0455C9.7088 29.2055 9.69207 28.6527 9.69207 23.9917C9.69207 19.3306 9.7088 18.7807 9.79243 16.9407C9.87025 15.2389 10.1546 14.3153 10.3935 13.7C10.7099 12.8855 11.0888 12.3037 11.6996 11.6927C12.3105 11.0818 12.8923 10.7037 13.7069 10.3866C14.3221 10.1466 15.2461 9.86293 16.9479 9.78474C18.558 9.71202 19.182 9.6902 22.435 9.68656V9.69093ZM33.3175 12.5891C32.1612 12.5891 31.2231 13.5262 31.2231 14.6829C31.2231 15.8393 32.1612 16.7775 33.3175 16.7775C34.4739 16.7775 35.412 15.8393 35.412 14.6829C35.412 13.5266 34.4739 12.5884 33.3175 12.5884V12.5891ZM24.0007 15.0364C19.0507 15.0364 15.0374 19.0498 15.0374 24C15.0374 28.9502 19.0507 32.9618 24.0007 32.9618C28.9508 32.9618 32.9626 28.9502 32.9626 24C32.9626 19.0498 28.9504 15.0364 24.0004 15.0364H24.0007ZM24.0007 18.1818C27.2137 18.1818 29.8187 20.7866 29.8187 24C29.8187 27.2131 27.2137 29.8182 24.0007 29.8182C20.7874 29.8182 18.1827 27.2131 18.1827 24C18.1827 20.7866 20.7874 18.1818 24.0007 18.1818Z" fill="black"/>
              </svg>
            </Link>
            <Link href='https://www.youtube.com/channel/UCLQ2_4V-t11pUG0pATDXK6g' target="_blank">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8462 10.2424C41.581 10.7094 42.9488 12.0772 43.4158 13.812C44.2832 16.9812 44.2498 23.5866 44.2498 23.5866C44.2498 23.5866 44.2498 30.1587 43.4158 33.3279C42.9488 35.0627 41.581 36.4305 39.8462 36.8975C36.677 37.7316 23.9999 37.7316 23.9999 37.7316C23.9999 37.7316 11.3562 37.7316 8.15361 36.8642C6.41885 36.3971 5.05107 35.0293 4.58402 33.2946C3.75 30.1587 3.75 23.5533 3.75 23.5533C3.75 23.5533 3.75 16.9812 4.58402 13.812C5.05107 12.0772 6.45221 10.6761 8.15361 10.209C11.3229 9.375 23.9999 9.375 23.9999 9.375C23.9999 9.375 36.677 9.375 39.8462 10.2424ZM30.5052 23.3216L19.9632 29.3933V17.25L30.5052 23.3216Z" fill="black"/>
              </svg>
            </Link>
            <Link href='https://www.facebook.com/smkmadinatulquran/' target="_blank">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 24C6 32.9 12.5 40.3 21 41.8L21.1003 41.7197C21.0669 41.7133 21.0334 41.7067 21 41.7V29H16.5V24H21V20C21 15.5 23.9 13 28 13C29.3 13 30.7 13.2 32 13.4V18H29.7C27.5 18 27 19.1 27 20.5V24H31.8L31 29H27V41.7C26.9666 41.7067 26.9331 41.7133 26.8997 41.7197L27 41.8C35.5 40.3 42 32.9 42 24C42 14.1 33.9 6 24 6C14.1 6 6 14.1 6 24Z" fill="black"/>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
