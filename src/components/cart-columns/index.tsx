const CartColumns = () => {
  return (
    <section>
      <div className="content" style={{ display: "flex" }}>
        <h5 className="" style={{ marginRight: "10px" }}>
          item
        </h5>
        <h5 className="" style={{ marginRight: "10px" }}>
          price
        </h5>
        <h5 className="" style={{ marginRight: "10px" }}>
          quantity
        </h5>
        <h5 className="" style={{ marginRight: "10px" }}>
          subtotal
        </h5>
        <span className="" style={{ marginRight: "10px" }}>
          remove
        </span>
      </div>
      <hr />
    </section>
  );
};

export default CartColumns;
