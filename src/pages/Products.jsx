import PRODUCTS from "../data"
import { Link } from "react-router-dom"

const Products = () => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength){
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }
  return (
    <main>
      
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map(
            product => {
              return (
                <div className="col-lg-4" key={product.id}>
                  <div className="card">
                    <div className="img-wrap">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        {product.name}
                      </div>
                      <p className="card-text">
                        {truncateText(product.details, 100)}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-3">
                      <span>Price: <strong className="price">{product.price}</strong></span>
                      <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm rounded">Details &#8594;</Link>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>

    </main>
  )
}

export default Products