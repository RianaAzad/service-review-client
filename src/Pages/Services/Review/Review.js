import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Review = ({newReview, sd}) => {

    const {user} = useContext(AuthContext);
    
    if(newReview.service_name === sd.name){
     let showReview = newReview.postedReview;
    
    return (
        <div className="text-start border border-cyan-600 px-6 rounded py-4 flex">
            <div>
                <img className="rounded-full" src={user?.photo} alt="" />
            </div>
          <div>
          <span>{user?.email}</span> 
          <span>{user?.name}</span>
          <p>Review: <span className="text-cyan-400">{showReview}</span></p>
          </div>
          
        </div>
    );
};
}

export default Review;