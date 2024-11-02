import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../redux/fetures/filters/filterSlice";
import { sortBy } from "../../redux/fetures/sorts/sortSlice";
export default function SideBar() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
  const handleChange = (e) => {
    dispatch(sortBy(e.target.value));
  };
  const handleFilter = (e) => {
    if (e.target.name === "all") {
      dispatch(filterAction("all"));
    }
    if (e.target.name === "saved") {
      dispatch(filterAction("saved"));
    }
  };
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            onChange={handleChange}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="mostLiked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="all"
                id="lws-all"
                checked={filter === "all"}
                className="radio"
                onChange={handleFilter}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="saved"
                id="lws-saved"
                className="radio"
                checked={filter === "saved"}
                onChange={handleFilter}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
