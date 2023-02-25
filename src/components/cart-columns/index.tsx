const CartColumns = () => {
  return (
    <section>
      <div className="content" style={{ display: "flex" }}>
        <h5 className="" style={{ width: "150px" }}>
          item
        </h5>
        <h5 className="" style={{ width: "150px" }}>
          price
        </h5>
        <h5 className="" style={{ width: "150px" }}>
          quantity
        </h5>
        <h5 className="" style={{ width: "150px" }}>
          subtotal
        </h5>
        <span className="" style={{ width: "150px" }}>
          remove
        </span>
      </div>
      <hr />
    </section>
  );
};

export default CartColumns;
