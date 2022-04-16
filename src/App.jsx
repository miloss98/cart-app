import { useGlobalContext } from "./context";
import Modal from "./components/Modal";
import "./styles/app.css";

const App = () => {
  const { name, setName, state, removeItem, handleButton } = useGlobalContext();
  return (
    <section className="container">
      {state.isModalOpen && <Modal />}
      <article className="cart">
        <div className="title-div">
          <h2 className="title"> Cart app </h2>
        </div>
        <div className="inputs-div">
          <input
            id="input-field"
            type="text"
            placeholder="Enter item name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button id="add-btn" type="click" onClick={handleButton}>
            Add to cart{" "}
          </button>
        </div>
        <div className="items">
          {state.cart.length < 1 && (
            <h1 className="empty-list"> The list is empty</h1>
          )}
          {state.cart.map((item) => {
            const { id, name } = item;
            return (
              <article className="single-item" key={id}>
                <div className="name-div">{name}</div>
                <div className="buttons-div">
                  <button
                    id="single-item-btn"
                    type="click"
                    onClick={() => removeItem(id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default App;
