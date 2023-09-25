import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="space-y-10  mx-auto">
            <Banner ></Banner>
            <div className="py-10 max-w-6xl mx-auto">

            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;