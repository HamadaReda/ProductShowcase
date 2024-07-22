import {Link} from 'react-router-dom';

const Header = ({activeLink, handleLinkClick}) => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo brand'>
            <Link to={'/'}>React</Link>
          </div>
          <div className='d-flex'>
            <Link to={"/"} onClick={() => handleLinkClick('/')} className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>Home</Link>
            <Link to={"/about"} onClick={() => handleLinkClick('/about')} className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>About</Link>
            <Link to={"/posts"} onClick={() => handleLinkClick('/posts')} className={`nav-link ${activeLink === '/posts' ? 'active' : ''}`}>Posts</Link>
            <Link to={"/products"} onClick={() => handleLinkClick('/products')} className={`nav-link ${activeLink === '/products' ? 'active' : ''}`}>Products</Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header