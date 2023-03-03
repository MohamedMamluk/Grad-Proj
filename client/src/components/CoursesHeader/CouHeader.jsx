import React from 'react';
import './CouHeader.css';
import { Link } from 'react-router-dom';
const CouHeader = () => {
  return (
    <div>
      <div className=' container mt-2 ' id='Nav_Div'>
        <div>
          <div>
            <h3 id='Title'>Courses Section</h3>
          </div>
          <div id='preDiv'>
            <p>
              This Section contains courses from different directions that are
              available at our website
            </p>
          </div>
        </div>

        <div id='imgDiv'>
          <img src='/girl.png' />
        </div>
      </div>

      <div className=' container ' id='btnDiv'>
        {/* <Link to='/AllCourses'>All</Link> */}

        <label htmlFor='Categories'> Categories :</label>
        <select name='Categories' id='Categories'>
          <option value='ALL'>All</option>
          <option value='Web Development '>Web Development</option>
          <option value=' Mobile Development '>Mobile Development </option>
          <option value='Artificial intelligence'>
            Artificial intelligence
          </option>
          <option value='Business'>Business</option>
        </select>
      </div>
    </div>
  );
};

export default CouHeader;
