import { useNavigate, useParams } from "react-router-dom"
import PRODUCTS from "../data";

const SingleProduct = () => {
  const navigate = useNavigate();
  const {productId} = useParams();
  const singleProduct = PRODUCTS.find(
    product => product.id === parseInt(productId)
  );
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Product Details</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row single">
          <div className="col-lg-5">
            <img src={singleProduct.image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{singleProduct.name}</h2>
            <p className="price"><strong>{singleProduct.price}</strong></p>
            <p>{singleProduct.details}</p>
            <br />
            <button onClick={() => navigate(-1)} className="btn btn-success btn-sm">Back to Products</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct