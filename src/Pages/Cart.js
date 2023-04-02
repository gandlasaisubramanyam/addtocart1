function Cart({ cartItems, removeItem }) {
  // console.log([].length);
  console.log("cartItems", cartItems);
  const totalItem = cartItems.length;
  const sumTotalItems =
    totalItem === 0
      ? "0"
      : cartItems
          .map((items) => parseFloat(items.productPrice))
          .reduce((a, b) => a + b);
  const shipping = totalItem === 0 ? "0" : 20.0;

  console.log("sumTotalItems", sumTotalItems);
  return (
    <div className="Cart">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-5">
            <div className="col-md-8">
              <div className="card">
                <h5 className="card-header">Cart</h5>
                <div className="card-body">
                  <ul
                    className="list-group list-group-flush"
                    style={{ minHeight: "140px" }}
                  >
                    {cartItems.map((cartItem) => {
                      return (
                        <CartItem
                          key={cartItem.id}
                          cartItem={cartItem}
                          removeItem={removeItem}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="card">
                  <h5 className="card-header">Cart Info</h5>
                  <div className="card-body">
                    <p className="d-flex justify-content-between">
                      <span>Total Items</span>
                      <span>{totalItem}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span>${sumTotalItems}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </p>
                    <hr />
                    <p className="d-flex justify-content-between">
                      <span>Total(Incl. taxes)</span>
                      <span>
                        ${totalItem === 0 ? "0" : sumTotalItems + shipping}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CartItem({ cartItem, removeItem }) {
  return (
    <li className="list-group-item gy-5">
      <div className="row">
        <div className="col-sm-3">
          <img style={{ width: "100%" }} src={cartItem.productImg} alt="" />
        </div>
        <div className="col-sm-9">
          <h3 className="card-text">{cartItem.productName}</h3>
          <p>${cartItem.productPrice}</p>
          <button
            onClick={() => removeItem(cartItem.id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Cart;
