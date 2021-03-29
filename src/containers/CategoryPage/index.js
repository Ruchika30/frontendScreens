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
import { getBlogsByCategories as getBlogsByCategoriesSrvc } from '../../services/blog';
import LoaderProvider from '../../hooks/use-loader';

const CategoryPage = ({ location, idDetailContext }) => {
  const history = useHistory();
  const [categoryId, setCategoryId] = useState('');
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);
  const [actegpryName, setCategoryName] = useState('');
  const { showGoTop, hideGoTop } = GoToTopProvider();
  const [blogList, setBlogList] = useState([]);
  const { show, hide } = LoaderProvider();

  const getInitialData = async id => {
    try {
      show();
      const { blog_posts, categoryName } = await getBlogsByCategoriesSrvc(id);
      setBlogList(blog_posts);
      setCategoryName(categoryName);
      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      hide();
    }
  };

  useEffect(() => {
    getInitialData(location.state.categoryId);
    setCategoryId(location.state.categoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isVisible, setNavbarVisible] = useState(true);

  const handleDescriptionClick = id => {
    history.push('/article', { id });
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

      <div>
        <Header categoryName={actegpryName} description="Decription to be sent" />
      </div>

      <div className="contentWrapper">
        <div className="cardWrapper">
          {blogList.map(item => (
            <Card
              title={item.title}
              description={item.description}
              // next={item.next}
              // previous={item.previous}
              onDescriptionClick={() => handleDescriptionClick(item._id)}
              // tag1={item.tagTitle1}
              // tag2={item.tagTitle2}
              // tag1Description={item.tagDescription}
            />
          ))}
        </div>
      </div>

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
