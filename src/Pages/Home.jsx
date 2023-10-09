import { useLoaderData } from "react-router-dom";

import Banner from './../components/Banner';
import TrainingCard from './../components/TrainingCard';
import Footer from './../components/Footer';
import Fasilities from './../components/Fasilities';
import Achievement from './../components/Achievement';


const Home = () => {
    const trainings = useLoaderData();
    console.log(trainings);
    return(
    <div>
        <Banner></Banner>
        <Achievement></Achievement>
        <div>
        <p className="py-10 text-center text-5xl font-bold">Our Services</p>
        <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            trainings.map(training => <TrainingCard key={training.id}
            training = {training}></TrainingCard> )
        }
        </div>
        <div>
            
        </div>
        </div>
        <Fasilities></Fasilities>
        <Footer/>
    </div>
    )
};

export default Home;

