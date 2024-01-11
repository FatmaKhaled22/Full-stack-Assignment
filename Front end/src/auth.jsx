import { Navigate, Outlet } from "react-router-dom";
import swal from "sweetalert";

const IsAuth = () => {

  const IsUser = () =>{
    const token = localStorage.getItem("token");
    if (token){
      return true;
    }
    swal("Warning", "Please login to see your profile" ,"warning", {button:false});
    return false;
  };

  return (
    <>
      {IsUser() ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );

};
export default IsAuth;