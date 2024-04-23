import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: id,
    FoodName: "",
    FoodCode: "",
    Img: "",
    Category: "",
    Qty: "",
    Price: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/ReadFood/${id}`)
      .then((res) => {
        console.log(res.data);
        setValues({
          ...values,
          FoodName: res.data["data"].FoodName,
          FoodCode: res.data["data"].FoodCode,
          Img: res.data["data"].Img,
          Category: res.data["data"].Category,
          Qty: res.data["data"].Qty,
          Price: res.data["data"].Price,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const updateForm =(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/api/v1/UpdateFood/${id}`,values)
   .then((res)=>{
     console.log(res)
     navigate('/')
     console.log('Data Created Successfully')
   }).catch((err)=>{
     console.log(err)
   })
  
  }

  return (
    <div>
      <div className="mt-20 ml-8 w-full">
        <hr />
        <h3 className="text-3xl font-semibold mt-7">Update Food Item</h3>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="font-2xl font-bold">Food Name</span>
              </div>
              <input
                type="text"
                name="FoodName"
                value={values.FoodName}
                onChange={(e) => setValues({
                    ...values,
                    FoodName: e.target.value
                })}
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
                value={values.FoodName}
                onChange={(e) => setValues({
                    ...values,
                    FoodCode: e.target.value
                })}
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
                value={values.Img}
                onChange={(e) => setValues({
                    ...values,
                    Img: e.target.value
                })}
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
                value={values.Img}
                onChange={(e) => setValues({
                    ...values,
                    Category: e.target.value
                })}
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
                value={values.Qty}
                onChange={(e) => setValues({
                    ...values,
                    Qty: e.target.value
                })}
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
                value={values.Price}
                onChange={(e) => setValues({
                    ...values,
                    Priice: e.target.value
                })}
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          onClick={updateForm}
          className="btn w-48 bg-[#5A67BA] text-white mt-8"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
