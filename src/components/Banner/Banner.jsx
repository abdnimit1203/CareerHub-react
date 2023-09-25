
const Banner = () => {
    return (
        <div className="bg-slate-50">
        <div className="flex justify-between items-center p-20 max-w-6xl mx-auto flex-col md:flex-row gap-6">
            <div className="space-y-5 mt-[64px]">
                <h1 className="text-3xl md:text-6xl">One Step <br /> Closer To Your<br /> <span className="text-accent">Dream Job</span></h1>
                <p className="max-w-[500px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-accent text-base-100 capitalize">Get Started</button>
            </div>
            <div className="md:w-1/2">
            <img src="/public/assets/images/abd2.png" alt="man image"  className=""/>
            </div>
        </div>
        </div>
    );
};

export default Banner;