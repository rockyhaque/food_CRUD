import AppSideBar from "../components/Common/AppSideBar";
import CreateForm from "../components/Create/CreateForm";

const CreatePage = () => {
    return (
        <div className="flex">
            <AppSideBar></AppSideBar>
            <CreateForm></CreateForm>
        </div>
    );
};

export default CreatePage;