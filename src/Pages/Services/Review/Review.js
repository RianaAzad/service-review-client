import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Review = ({newReview, sd}) => {
    console.log(newReview)

    const {user} = useContext(AuthContext);
    console.log(user)
    
    if(newReview.service_name === sd.name && newReview?.postedReview !== null){
     let showReview = newReview?.postedReview;
    
    return (
        <div className="text-start border border-cyan-600 px-6 rounded py-4 flex">
            <div>
                <img className="rounded-full w-10" src={user?.photoURL} alt="" />
            </div>
          <div>
          <div className="flex w-full">
          <p className="pl-5 mr-10">User: {newReview?.userName}</p>
          <p className="mr-2">Email: {newReview?.email}</p> 
          </div>
          
          <p className="pl-5">Review: <span className="text-cyan-400">{showReview}</span></p>
          </div>
          
        </div>
    );
};
}

export default Review;