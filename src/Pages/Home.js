import StarRating from "../Components/StarRating";

function Home({ productdata, addItem, cartItems }) {
  return (
    <div className="Home">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productdata.map((product) => {
              return (
                <ProductCard
                  name={product.productName}
                  img={product.productImg}
                  price={product.productPrice}
                  rating={product.productRating}
                  sale={product.sale}
                  salePrice={product.productSalePrice}
                  key={product.id}
                  id={product.id}
                  addItem={addItem}
                  cartItems={cartItems}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  name,
  img,
  price,
  rating,
  sale,
  salePrice,
  id,
  addItem,
  cartItems
}) {
  let existId = cartItems.map((obj) => obj.id).includes(id);
  console.log("existId", existId);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={img} alt="" />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{name}</h5>
            <StarRating />
            {/* <!-- Product price--> */}${price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              disabled={existId}
              onClick={() => {
                addItem(id);
              }}
              href="#"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
