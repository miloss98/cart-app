import { useState } from "react";
import Modal from "./Modal";
import "./app.css";

const App = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const handleButton = (e) => {
    e.preventDefault();
    if (name) {
      setModal(true);
      setData([...data, { id: new Date().getTime().toString(), name }]);
    } else {
      setModal(false);
    }
  };
  return (
    <section className="container">
      <article className="cart">
        {modal && <Modal />}
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
          {data.map((item) => {
            const { id, name } = item;
            return (
              <article className="single-item" key={id}>
                <div className="name-div">{name}</div>
                <div className="buttons-div">
                  <button id="single-item-buttons" type="click">
                    Remove
                  </button>
                  <button id="single-item-buttons" type="click">
                    Delete
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
