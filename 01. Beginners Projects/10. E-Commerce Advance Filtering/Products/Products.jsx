import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";
import "./Products.css";
const Products = () => {
  return (
    <>
      <section className="card-constainer">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>

              <div className="bag">
                <BsBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
