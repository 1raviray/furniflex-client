import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Edit_Items = () => {
  const [_id, Set_id] = useState("");
  const [Category, SetCategory] = useState("");
  const [ItemName, SetItemName] = useState("");
  const [Cost, SetCost] = useState("");
  const [ImageURL, SetImageURL] = useState("");
  const [ImageURL1, SetImageURL1] = useState("");
  const [ImageURL2, SetImageURL2] = useState("");
  const [ImageURL3, SetImageURL3] = useState("");
  const [Discount, SetDiscount] = useState("");
  const [Color, SetColor] = useState("");
  const [Rating, SetRating] = useState("");
  const [Discription, SetDiscription] = useState("");

  const [Items, SetItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://furniflex-server-ynau.onrender.com/Items")
      .then((e) => SetItems(e.data))
      .catch((e) => console.log(e));
  });

  const Delete_Product = (e) => {
    axios
      .delete("https://furniflex-server-ynau.onrender.com/Items/" + e)
      .then(toast("Product Deleted"))
      .catch((e) => console.log(e));
  };

  const Edit_Product = (e) => {
    axios.get("https://furniflex-server-ynau.onrender.com/Items/" + e).then((e) => {
      Set_id(e.data._id);
      SetCategory(e.data.Category);
      SetItemName(e.data.ItemName);
      SetDiscription(e.data.Discription);
      SetImageURL(e.data.ImageURL);
      SetImageURL1(e.data.ImageURL1);
      SetImageURL2(e.data.ImageURL2);
      SetImageURL3(e.data.ImageURL3);
      SetRating(e.data.Rating);
      SetColor(e.data.Color);
      SetCost(e.data.Cost);
      SetDiscount(e.data.Discount);
    });
  };

  const ItemUpload = (e) => {
    e.preventDefault();
    axios
      .put("https://furniflex-server-ynau.onrender.com/Items/" + _id, {
        Category,
        ItemName,
        Discription,
        ImageURL,
        ImageURL1,
        ImageURL2,
        ImageURL3,
        Rating,
        Color,
        Cost,
        Discount,
      })
      .then(toast("Successfull Uploaded"))
      .catch((e) => console.log(e));
  };

  return (
    <div className=" container">
      <ToastContainer />
      <div className=" row my-5">
        {Items.map((e, index) => {
          return (
            <div className=" col-10 col-md-3 my-3 m-auto" key={index}>
              <div className="card rounded-4 shadow border-0 card-hover position-relative overflow-hidden editCard">
                <div className=" ">
                  <span className=" btnedit">
                    <button
                      onClick={() => Edit_Product(e._id)}
                      data-bs-target="#popup"
                      data-bs-toggle="modal"
                      className=" btn btn-warning"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </span>
                  <span className=" btndelete">
                    <button
                      onClick={() => Delete_Product(e._id)}
                      className=" btn btn-danger"
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </span>
                </div>
                <div className=" blurCard">
                  <div className=" ">
                    <span
                      className="section5-discount position-absolute top-0 shadow"
                      style={{ left: "0" }}
                    >
                      {e.Discount}%
                    </span>
                    <span
                      className="section5-wishlist position-absolute top-0"
                      style={{ right: "0" }}
                    >
                      <i className="bi bi-heart"></i>
                    </span>
                  </div>
                  <img
                    className="card-img-top section5-img"
                    src={e.ImageURL}
                    alt="Title"
                  />
                  <div className="card-body primary-bgcolor text-white p-3 rounded-bottom-4">
                    <div className=" d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className=" fw-semibold">{e.ItemName}</h6>
                        <p className="card-text">₹{e.Cost}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" modal " id="popup">
        <div className=" modal-dialog modal-xl">
          <div className=" modal-content">
            <div className=" modal-header justify-content-center">
              <h3 className=" fw-bold ">Edit Product</h3>
            </div>
            <div className=" modal-body">
              <form onSubmit={ItemUpload} className=" col-10 m-auto my-4  ">
                <label>Category</label>
                <select
                  className=" mb-2 form-select "
                  value={Category}
                  onChange={(e) => SetCategory(e.target.value)}
                >
                  <option>Select one</option>
                  <option>Bed room</option>
                  <option>Living room</option>
                  <option>Office</option>
                  <option>Kitchen</option>
                  <option>Outdoor</option>
                  <option>Decor</option>
                </select>
                <label>Item name</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={ItemName}
                  onChange={(e) => SetItemName(e.target.value)}
                />
                <label>Cost</label>
                <input
                  type="number"
                  className=" mb-2 form-control "
                  value={Cost}
                  onChange={(e) => SetCost(e.target.value)}
                />
                <label>Image URL</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={ImageURL}
                  onChange={(e) => SetImageURL(e.target.value)}
                />
                <label>Image URL 1</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={ImageURL1}
                  onChange={(e) => SetImageURL1(e.target.value)}
                />
                <label>Image URL 2</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={ImageURL2}
                  onChange={(e) => SetImageURL2(e.target.value)}
                />
                <label>Image URL 3</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={ImageURL3}
                  onChange={(e) => SetImageURL3(e.target.value)}
                />
                <label>Discription</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={Discription}
                  onChange={(e) => SetDiscription(e.target.value)}
                />
                <label>Discount</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={Discount}
                  onChange={(e) => SetDiscount(e.target.value)}
                />
                <label>Rating</label>
                <input
                  type="text"
                  className=" mb-2 form-control "
                  value={Rating}
                  onChange={(e) => SetRating(e.target.value)}
                />
                <label>Color</label>
                <select
                  className=" mb-2 form-select "
                  value={Color}
                  onChange={(e) => SetColor(e.target.value)}
                >
                  <option>Select one</option>
                  <option>Brown</option>
                  <option>Orange</option>
                  <option>Grey</option>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>Pink</option>
                  <option>White</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
                <input
                  type="submit"
                  data-bs-dismissNaclassName="modal"
                  className=" w-100 btn secondary-bgcolor text-white mt-3"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_Items;
