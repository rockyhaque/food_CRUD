import { useState } from "react";
import { Create } from "../../apiServices/CRUDServices";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    FoodName: "",
    FoodCode: "",
    Img: "",
    FoodCategory: "",
    Qty: "",
    Price: "",
  });
  const inputValues = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };
//   console.log(values);
  const SubmitData = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:4000/api/v1/CreateFood", values)
      .then((res) => {
        console.log(res);
        navigate('/')
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Your ${values.FoodName} has created Successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-20 ml-8 w-full">
      <hr />
      <h3 className="text-3xl font-semibold mt-7">Create Food Item</h3>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="font-2xl font-bold">Food Name</span>
            </div>
            <input
              type="text"
              name="FoodName"
              onChange={(e) => inputValues(e)}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="font-2xl font-bold">Food Code</span>
            </div>
            <input
              type="text"
              name="FoodCode"
              onChange={(e) => inputValues(e)}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="font-2xl font-bold">Food Image </span>
            </div>
            <input
              type="text"
              name="Img"
              onChange={(e) => inputValues(e)}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="font-2xl font-bold">Food Category </span>
            </div>
            <input
              type="text"
              name="FoodCategory"
              onChange={(e) => inputValues(e)}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="font-2xl font-bold">Qty </span>
            </div>
            <input
              type="text"
              name="Qty"
              onChange={(e) => inputValues(e)}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="font-2xl font-bold">Price</span>
            </div>
            <input
              type="text"
              name="Price"
              onChange={(e) => inputValues(e)}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>

      </div>
      <button
        type="submit"
        onClick={SubmitData}
        className="btn w-48 bg-[#5A67BA] text-white mt-8"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateForm;
