import React from 'react';

const Statistics = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl text-white font-extrabold'>More about my page</h1>
            <div className="stats shadow my-12 w-full bg-slate-900">
  
  <div className="stat place-items-center">
    <div className="stat-title">Tours</div>
    <div className="stat-value">153</div>
    <div className="stat-desc">From 2010 to 2022</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Satisfied Customers</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Ratings</div>
    <div className="stat-value">4.9</div>
    <div className="stat-desc">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
</div>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Statistics;