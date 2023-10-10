import { Link } from "react-router-dom";

const TrainingCard = ({training}) => {

    const {id,name,image,price,short_description,button_text} = training;
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 w-96"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-base font-bold card-title">{name}</h2>
          <p>{short_description}</p>
          <p>course fee :{price}</p>
          <div className="card-actions justify-end">
           <Link to={`/training/${id}`}> <button className="btn btn-primary">{button_text}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

 export default TrainingCard;
