import { useState } from "react";
import Modal from "./components/Modal";
import "./styles/app.css";

const App = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({
    isOpen: false,
    modalContent: "modal content",
    alert: "",
  });

  const handleButton = (e) => {
    e.preventDefault();
    if (name) {
      setModal({ isOpen: true, modalContent: "Item added!", alert: "success" });
      setData([...data, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setModal({
        isOpen: true,
        modalContent: "Please enter some value!",
        alert: "danger",
      });
    }
  };
  const removeItem = (id) => {
    const filteredList = data.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setData(filteredList);
    setModal({ isOpen: true, modalContent: "Item removed!", alert: "danger" });
  };

  const closeModal = () => {
    setModal({ isOpen: false, modalContent: "" });
  };
  return (
    <section className="container">
      {modal.isOpen && (
        <Modal
          modalContent={modal.modalContent}
          alert={modal.alert}
          closeModal={closeModal}
        />
      )}
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
          {data.map((item) => {
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
