import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/headerForBlog';
import Card from '../../components/cardForBlog';
import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { GET_CATEGORY_ARTICLES_QUERY } from '../../queries/category/getCategoryArticles';
import Query from '../../components/query';
import { upwardArrow } from '../../assets/icons';
import GoToTopProvider from '../../hooks/use-topNavigation';
import consumer from '../../context/consumer';
import { Helmet } from 'react-helmet';

const CategoryPage = ({ location, idDetailContext }) => {
  const history = useHistory();
  const [idValue, setIdValue] = useState('');
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);
  const { showGoTop, hideGoTop } = GoToTopProvider();
  const { careerId, setCareerId } = idDetailContext;

  useEffect(() => {
    setIdValue(location.state.categoryId);
  }, [location]);

  const [isVisible, setNavbarVisible] = useState(true);

  const handleDescriptionClick = (id, categoryId) => {
    history.push('/article', { id, categoryId });
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      showGoTop();
    } else {
      hideGoTop();
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.onscroll = () => scrollFunction();

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Career page"
        meta={[
          {
            name: 'description',
            content: 'This is Career page description'
          },
          {
            name: 'keywords',
            content: 'careeristic, careers'
          }
        ]}
      />
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

      {/* {goToTopIconVisiblity && (
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
      )} */}

    </div>
  );
};

export default consumer(CategoryPage);
