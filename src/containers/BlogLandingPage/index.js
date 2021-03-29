import React, { useEffect, useState } from 'react';
import './style.scss';
import Header from '../../components/headerForBlog';
import Card from '../../components/cardForBlog';
import { useHistory, useParams } from 'react-router-dom';
import CATEGORY_ARTICLES_QUERY from '../../queries/category/landingPageData';
import Query from '../../components/query';
import CategoryCard from '../../components/categoryLabel';
import { home, upwardArrow } from '../../assets/icons';
import GoToTopProvider from '../../hooks/use-topNavigation';
import Navbar from '../../components/navbar';
import LoaderProvider from '../../hooks/use-loader';
import { lightCyan } from '../../assets/styles/colors';
import { getAllBlogsAllCategories as getAllBlogsAllCategoriesSrvc } from '../../services/blog';

const BlogLandingPage = () => {
  const history = useHistory();
  const { show, hide } = LoaderProvider();

  const [isVisible, setNavbarVisible] = useState(false);
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);
  const { showGoTop, hideGoTop } = GoToTopProvider();
  const [allData, setAllBlogsAllCategoriesData] = useState([]);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setNavbarVisible(true);
    } else setNavbarVisible(false);
  };

  const getInitialData = async () => {
    try {
      show();
      const allBlogsAllcategories = await getAllBlogsAllCategoriesSrvc();
      setAllBlogsAllCategoriesData(allBlogsAllcategories);

      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      hide();
    }
  };

  useEffect(() => {
    getInitialData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      showGoTop();
    } else {
      hideGoTop();
    }
  };

  const handleDescriptionClick = (id, categoryId) => {
    history.push('/article', { id, categoryId });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.onscroll = () => scrollFunction();

  return (
    <div className="main">
      <Navbar fixed barColor={lightCyan} />
      <div>
        <Header main />
      </div>

      {/* category Bar */}
      <div className="categoryCard">

        <div>
          <div style={{ margin: '5px' }}>
            {allData.map(item => (
              <>
                <CategoryCard {...item} />
                <div>
                  <div className="cardWrapper">
                    {item.blog_posts.slice(0, 4).forEach(blog => (
                      <Card
                        id={blog._id}
                        key={`article__${blog._id}`}
                        title={blog.title}
                        description={blog.description}
                        onDescriptionClick={() => handleDescriptionClick(blog._id, blog.category.id)}
                      />
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

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
