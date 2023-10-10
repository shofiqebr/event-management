import { useParams } from "react-router-dom";

const TrainingDetails = () => {
    
    const{id,image}= useParams();
    console.log("Image URL:", image);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">on the privet route</h1>
            <p className="py-6">
            
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;