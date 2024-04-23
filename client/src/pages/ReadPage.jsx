import AppSideBar from "../components/Common/AppSideBar";
import ListCard from "../components/Read/ListCard";

const ReadPage = () => {
    return (
        <div className="flex">
            <AppSideBar></AppSideBar>
            <ListCard></ListCard>
        </div>
    );
};

export default ReadPage;