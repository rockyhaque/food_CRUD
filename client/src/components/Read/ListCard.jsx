import { useEffect, useState } from "react";
import { Delete, Read } from "../../apiServices/CRUDServices";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListCard = () => {
  const [readFood, setReadFood] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const fetchFood = async () => {
    const res = await axios.get("http://localhost:4000/api/v1/ReadFood");
    const data = await res.data["data"];
    // console.log(data);
    setReadFood(data);
  };
  useEffect(() => {
    (async () => {
      await fetchFood();
    })();
  }, [refresh]);

    const handleDelete = (id) => {
      axios
        .get(`http://localhost:4000/api/v1/DeleteFood/${id}`)
        .then((res) => {
          setRefresh(false);
        })
        .catch((err) => {
          console.log(err);
        });
        console.log(id);
       
    };

    // const handleUpdate = (id) =>{
    //     axios
    //     .get(`http://localhost:4000/api/v1/UpdateFood/${id}`)
    //     .then((res) => {
    //       setRefresh(false);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //     // console.log(id)
        
    // }

  return (
    <div className="mt-20 ml-8 w-full">
      <hr />
      <h1 className="text-3xl font-semibold my-7">All Food List</h1>
      <div className="grid grid-cols-4 gap-6">
        {readFood.length !== 0 &&
          readFood.map((item) => {
            return (
              <div  key={item._id} className="card bg-base-100 shadow-xl">
                <div className="bg-purple-500 text-sm text-center w-28 rounded-lg py-2 text-white relative top-14 left-56">TK {item?.Price}.00</div>
                <img className="rounded-t-lg h-60" src={item?.Img} />

                <div className="card-body
                ">
                  <h2 className="card-title">{item?.FoodName}</h2>
                  
                  <div className="card-actions space-x-4 mt-5 ">
                    <Link to={`/update/${item['_id']}`} className="btn text-green-500 font-bold">Edit</Link>
                    <div onClick={()=>handleDelete(item['_id'])} className="btn text-red-500 bg-red-200 font-bold">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListCard;
