import React, { useEffect, useState } from 'react';
import './style.scss';

import Header from '../../components/header_b';
import Card from '../../components/card_b';
import { useHistory, useParams } from 'react-router-dom';
import CATEGORY_ARTICLES_QUERY from '../../queries/category/landingPageData';
import Query from '../../components/query_b';
import CategoryCard from '../../components/categoryCard_b';
import { home, upwardArrow } from '../../assets/icons';

const BlogLandingPage = () => {
  const history = useHistory();

  const [isVisible, setNavbarVisible] = useState(false);
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setNavbarVisible(true);
    } else setNavbarVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleDescriptionClick = (id, categoryId) => {
    history.push('/article', { id, categoryId });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setGoToTopIconVisiblity(true);
    } else {
      setGoToTopIconVisiblity(false);
    }
  };

  window.onscroll = () => scrollFunction();

  return (
    <div className="main">
      <div>
        <Header main />
      </div>

      {/* category Bar */}
      <div className="categoryCard">

        <Query query={CATEGORY_ARTICLES_QUERY} id={null}>
          {({ data: { categories } }) => (
            <div>
              <div style={{ margin: '5px'}}>
                {categories.map(item => (
                  <>
                    <CategoryCard name={item.name} id={item.id} />
                    <div>
                      <div className="cardWrapper">
                        {item.blog_posts.map(item => (
                          <Card
                            id={item.id}
                            key={`article__${item.id}`}
                            title={item.Title}
                            description={item.Description}
                            onDescriptionClick={() => handleDescriptionClick(item.id, item.category.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
        </Query>

        {/* card row */}
        {/* <div className="cardWrapper">

               {blogs.map((item) => {
                return (
                  <div>
                    <Card
                      title={item.title}
                      description={item.description}
                      // next={item.next}
                      // previous={item.previous}
                      onDescriptionClick={handleDescriptionClick}
                      // tag1={item.tagTitle1}
                      // tag2={item.tagTitle2}
                      // tag1Description={item.tagDescription}
                    />
                  </div>
                );
               })}
          </div> */}

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

    </div>
  );
};

export default BlogLandingPage;
