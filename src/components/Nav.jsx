import { Link } from "react-router-dom";
import '../styles/Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <Link className="linkStyles logoBtn" to='/'>
        <svg fill="#000000" height="35px" width="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M441.649,100.095c16.497-9.071,27.685-26.613,27.685-46.762C469.333,23.887,445.446,0,416,0H96 C66.554,0,42.667,23.887,42.667,53.333c0,20.898,12.038,38.985,29.549,47.731c25.37,102.49,59.852,172.145,99.356,212.863 c-0.502,1.693-0.825,3.465-0.891,5.312c-2.192,61.453-14.172,118.439-39.728,160.314c-8.676,14.216,1.556,32.447,18.21,32.447 h213.803c16.656,0,26.887-18.234,18.208-32.45c-25.311-41.456-37.17-95.028-39.604-153.394 C380.922,288.481,414.076,216.064,441.649,100.095z M96,42.667h320c5.882,0,10.667,4.785,10.667,10.667 C426.667,59.215,421.882,64,416,64H96c-5.882,0-10.667-4.785-10.667-10.667C85.333,47.451,90.118,42.667,96,42.667z M396.139,106.667c-38.597,154.129-82.722,209.045-130.212,209.045c-52.885,0-108.638-59.465-148.251-209.045H396.139z M327.99,469.333h-143.98c15.811-36.97,24.526-79.423,27.967-124.503c17.454,9.118,35.532,13.548,53.948,13.548 c11.946,0,23.464-1.932,34.566-5.929C304.121,394.508,312.718,434.085,327.99,469.333z"></path> </g> </g> </g></svg>
        Bongo Market
      </Link>
      <div className="navBtnContainer">
        <Link className="linkStyles" to='/'>Home</Link>
        <Link className="linkStyles" to='/shop'>Shop</Link>
        <Link className="linkStyles cartBtn" to='/cart'>
          <p>Cart</p>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p>0</p>  {/* this should take in a prop */}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;