import {Link} from 'react-router-dom';

const Footer = ({activeLink, handleLinkClick}) => {
  return (
    <footer>
      <div className='container'>
        <div className='d-flex justify-content-center'>
            <Link to={"/"} onClick={() => handleLinkClick('/')} className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>Home</Link>
            <Link to={"/about"} onClick={() => handleLinkClick('/about')} className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>About</Link>
            <Link to={"/posts"} onClick={() => handleLinkClick('/posts')} className={`nav-link ${activeLink === '/posts' ? 'active' : ''}`}>Posts</Link>
            <Link to={"/products"} onClick={() => handleLinkClick('/products')} className={`nav-link ${activeLink === '/products' ? 'active' : ''}`}>Products</Link>
        </div>
        <div className="copyrights">
          &copy; 2024 <span><a href="https://github.com/HamadaReda">Eng. Hamada Reda</a></span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer