import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar_b';
import Header from '../../components/header_b';
import Card from '../../components/card_b';
import './style.scss';

import { useHistory, useParams } from 'react-router-dom';
import { GET_CATEGORY_ARTICLES_QUERY } from '../../queries/category/getCategoryArticles';
import Query from '../../components/query_b';
import { upwardArrow } from '../../assets/icons';

const CategoryPage = ({ location }) => {
  const history = useHistory();
  const [idValue, setIdValue] = useState('');
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);

  useEffect(() => {
    setIdValue(location.state.categoryId);
  }, [location]);

  const [isVisible, setNavbarVisible] = useState(true);

  const handleDescriptionClick = (id, categoryId) => {
    history.push('/article', { id, categoryId });
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setGoToTopIconVisiblity(true);
    } else {
      setGoToTopIconVisiblity(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.onscroll = () => scrollFunction();

  return (
    <div>
      <div>
        <Navbar fixed={isVisible} />
      </div>

      <Query query={GET_CATEGORY_ARTICLES_QUERY} id={idValue}>
        {({ data: { category } }) => (
          <>
            <div>
              <Header categoryName={category.name} description={category.description} />
            </div>
            <div className="contentWrapper">
              <div className="cardWrapper">
                {category.blog_posts.map(item => (
                  <Card
                    title={item.Title}
                    description={item.Description}
                    // next={item.next}
                    // previous={item.previous}
                    onDescriptionClick={() => handleDescriptionClick(item.id, item.category.id)}
                    // tag1={item.tagTitle1}
                    // tag2={item.tagTitle2}
                    // tag1Description={item.tagDescription}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </Query>

      {goToTopIconVisiblity && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '30px',
            zIndex: 299
          }}
          onClick={scrollTop}
        >
          <div className="goToTopWrapper" onClick={scrollTop}>
            <img src={upwardArrow} alt="goTop" className="home" />
          </div>
        </div>
      )}

    </div>
  );
};

export default CategoryPage;
