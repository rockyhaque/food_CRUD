import AppSideBar from "../components/Common/AppSideBar";
import UpdateForm from "../components/Update/UpdateForm";

const UpdatePage = () => {
    return (
        <div className="flex">
            <AppSideBar></AppSideBar>
            <UpdateForm></UpdateForm>
        </div>
    );
};

export default UpdatePage;