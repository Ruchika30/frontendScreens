import React from 'react';
import { useHistory } from 'react-router-dom';
import { category_ic, rightArrow } from '../../assets/icons';

const CategoryCard = props => {
  const history = useHistory();

  const handleCategoryClick = () => {
    history.push('/category', { categoryId: id });
  };

  const { name, subtitle, id } = props;
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="category" onClick={handleCategoryClick}>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <div>
            <img
              src={`${category_ic}`}
              style={{
                height: '40px',
                width: '40px'
              }}
              alt="category"
            />
          </div>

          <div className="categoryContainer">
            <p className="categoryTitle">{name}</p>
            <p className="categorySubTitle">{subtitle}</p>

          </div>
        </div>
        <div>
          <img src={`${rightArrow}`} className="rightArrow" alt="rightArrow" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
