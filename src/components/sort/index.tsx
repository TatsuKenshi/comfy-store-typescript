import {
  getGridView,
  setGridView,
  setListView,
  getSort,
  setSort,
  getFilteredProducts,
} from "../../app/reducers/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const grid_view = useSelector(getGridView);
  const products = useSelector(getFilteredProducts);
  const sort = useSelector(getSort);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="">
      <div className="btn-container">
        <div>
          <button
            type="button"
            className={`${grid_view ? "active" : null} `}
            onClick={() => dispatch(setGridView(true))}
          >
            <BsFillGridFill />
          </button>

          <button
            type="button"
            className={`${grid_view ? null : "active"} `}
            onClick={() => dispatch(setListView(false))}
          >
            <BsList />
          </button>
        </div>
        <p>{products.length} products found</p>
      </div>
      <div className="text-center">
        <form action="">
          <label htmlFor="sort">Sort by: </label>
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="price-lowest">Price Lowest</option>
            <option value="price-highest">Price Highest</option>
            <option value="name-a">Name A-Z</option>
            <option value="name-z">Name Z-A</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;
