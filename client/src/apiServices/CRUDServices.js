import axios from "axios";

export function Create(FoodName, FoodCode, Img, Price, Qty, Category) {
  let URL = "/api/v1/CreateFood";
  let PostBody = {
    FoodName: FoodName,
    FoodCode: FoodCode,
    Img: Img,
    Price: Price,
    Qty: Qty,
    Category: Category
  }
  return axios.post(URL, PostBody)
  .then((res)=>{
    if(res.status === 201){
        return true;
    } else{
        return false;
    }
  })
  .catch((err)=>{
    console.log('err', err);
    return false;
  });
}


export function Read() {
  let URL = "/api/v1/ReadFood";
  return axios.get(URL)
  .then((res)=>{
    if(res.status === 201){
        return res.data['data'];
    } else{
        return false;
    }
  })
  .catch((err)=>{
    console.log('err', err);
    return false;
  });
}


export function Delete(id) {
  let URL = "/api/v1/DeleteFood/"+id;
  return axios.get(URL)
  .then((res)=>{
    if(res.status === 201){
        return res.data['data'];
    } else{
        return false;
    }
  })
  .catch((err)=>{
    console.log('err', err);
    return false;
  });
}


export function Update(id, FoodName, FoodCode, Img, Price, Qty, Category) {
  let URL = "/api/v1/UpdateFood/"+id;
  let PostBody = {
    Id: id,
    FoodName: FoodName,
    FoodCode: FoodCode,
    Img: Img,
    Price: Price,
    Qty: Qty,
    Category: Category
  }
  return axios.post(URL, PostBody)
  .then((res)=>{
    if(res.status === 201){
        return true;
    } else{
        return false;
    }
  })
  .catch((err)=>{
    console.log('err', err);
    return false;
  });
}
