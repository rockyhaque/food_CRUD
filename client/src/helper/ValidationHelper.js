import Swal from "sweetalert2";

class ValidationHelper{
    isEmpty(value){
        if(value.length === 0){
            return true;
        } else{
            return false;
        }
    }
    

    SuccessToast(msg){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${msg}`,
            showConfirmButton: false,
            timer: 1500
          });
    } 
    ErrorToast(msg){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${msg}`,
            footer: '<a href="#">Please fill up the requirement!</a>'
          });
    }
}

export const {isEmpty, SuccessToast, ErrorToast} = new ValidationHelper;