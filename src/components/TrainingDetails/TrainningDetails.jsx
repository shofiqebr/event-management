import { useParams } from "react-router-dom";

const TrainningDetails = () => {
    
    const{id,image}= useParams();
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
             {id}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainningDetails;
