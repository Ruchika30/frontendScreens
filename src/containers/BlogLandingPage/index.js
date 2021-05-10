/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Header from '../../components/headerForBlog';
import Card from '../../components/cardForBlog';
import { Link, useHistory, useParams } from 'react-router-dom';
import CATEGORY_ARTICLES_QUERY from '../../queries/category/landingPageData';
import Query from '../../components/query';
import CategoryCard from '../../components/categoryLabel';
import { home, upwardArrow } from '../../assets/icons';
import GoToTopProvider from '../../hooks/use-topNavigation';
import Navbar from '../../components/navbar';
import LoaderProvider from '../../hooks/use-loader';
import { lightCyan } from '../../assets/styles/colors';
import { getAllBlogsAllCategories as getAllBlogsAllCategoriesSrvc } from '../../services/blog';
import { BlogValueContext } from '../../context';

const BlogLandingPage = () => {
  const history = useHistory();
  const { show, hide } = LoaderProvider();

  const [isVisible, setNavbarVisible] = useState(false);
  const [goToTopIconVisiblity, setGoToTopIconVisiblity] = useState(false);
  const { showGoTop, hideGoTop } = GoToTopProvider();
  const [allData, setAllBlogsAllCategoriesData] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { setBlogId, blogId } = useContext(BlogValueContext);

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

  const handleDescriptionClick = (item, blog) => {
    const blogId = blog._id;
    const blogTitle = blog.title.replaceAll(' ', '-');
    history.push(`/blog/${item.categoryName}/${blogTitle}`, { blogId });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = blog => {
    setBlogId(blog._id);
    console.log('blogId--', blog._id, blogId);
  };

  window.onscroll = () => scrollFunction();

  const handleCategoryClick = item => {
    setCategoryName(item.categoryName);
    history.push(`/blog/${item.categoryName}`, { categoryId: item.career_list_id });
  };
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
                <div onClick={() => handleCategoryClick(item)}>
                  <CategoryCard {...item} />
                </div>
                <div>
                  <div className="cardWrapper">
                    {item.blog_posts.slice(0, 4).map(blog => {
                      const blogTitle = blog.title.replaceAll(' ', '-');
                      return (
                        <Link
                          to={{
                            pathname: `/blog/${item.categoryName}/${blogTitle}/${blog._id}`,
                            query: {
                              blogId: blog?._id
                            }
                          }}
                        >
                          <Card
                            id={blog._id}
                            key={`article__${blog._id}`}
                            title={blog.title}
                            description={blog.description}
                            // onDescriptionClick={() => handleDescriptionClick(item, blog)}

                          />
                        </Link>
                      );
                    })}
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
