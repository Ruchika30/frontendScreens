import React, { useEffect, useState } from 'react';
import './style.scss';
import Tag from '../../components/tags_b';
import Card from '../../components/card_b';
import Navbar from '../../components/navbar_b';
import GET_BLOGPOST from '../../queries/category/getArticle';
import { GET_CATEGORY_ARTICLES_QUERY } from '../../queries/category/getCategoryArticles';
import Query from '../../components/query_b';
import { useHistory, useLocation } from 'react-router-dom';
import { home, profile, upwardArrow } from '../../assets/icons';
import moment from 'moment';

const BlogPage = ({ location }) => {
  const { id, categoryId } = location.state;
  const [idValue, setIdValue] = useState('');
  const [categoryIdvalue, setCategoryid] = useState('1');
  const [recommBlogs, setRecomBlogs] = useState([]);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIdValue(id);
    setCategoryid(categoryId);
  }, [categoryId, id, location]);

  const gotoHome = () => {
    history.push('/');
  };

  const otherBlogs = [
    {
      title: 'Computer Engineering',
      description:
         'Non cillum deserunt exercitation qui non sunt sit. Non cillum deserunt exercitation qui non sunt sit. Non cillum deserunt exercitation qui non sunt sit',
      previous: true
    },
    {
      title: 'EXTC Engineering',
      description:
         'Non cillum deserunt exercitation qui non sunt sit. Non cillum deserunt exercitation qui non sunt sit. Non cillum deserunt exercitation qui non sunt sit',
      next: true
    }
  ];

  const handleDescriptionClick = (id, categoryId) => {
    history.push('/article', { id, categoryId });
  };

  //  Get Scrollvalue for Progress bar
  const getPercent = () => {
    const maxPosition = document.body.scrollHeight;
    const currenPosition = window.scrollY;
    const value = (currenPosition / maxPosition) * 100;
    return value;
  };

  const handleScroll = () => {
    if (window.scrollY < 150) {
      setNavbarVisible(true);
    } else setNavbarVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isNavbarVisible ? <Navbar fixed={isNavbarVisible} progressValue={getPercent} />
        : (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '30px',
              zIndex: 299
            }}
            onClick={gotoHome}
          >
            <div className="goToTopWrapper">
              <img src={upwardArrow} alt="goTop" className="home" />
            </div>
          </div>
        )}

      {/* query */}
      <Query query={GET_BLOGPOST} id={idValue}>
        {({ data: { blogPost } }) => {
          const imgUrl = blogPost?.Image?.formats?.large?.url;
          const publishedDate = moment(blogPost.Published).format(' MMMM Do YYYY');
          return (
            <div>
              <div className="blogContainer">
                <div className="contentContainer">
                  <h2>{blogPost.Title}</h2>
                </div>
                {/* author */}
                <div className="nameOuterContainer">
                  <div className="authorContainer">
                    <div className="imageContainer">
                      <img src={`${profile}`} className="profileIcon" alt="profile" />
                    </div>

                    <div className="nameContainer">
                      <div className="nameWrapper">
                        <div className="name">{blogPost.author}</div>
                        <div>
                          {/* <Tag toToggle={true} action="follow" toAction="following" /> */}
                        </div>
                      </div>
                      <div>
                        {publishedDate}
                        ,
                        {blogPost.minutes}
                        {' '}
                        min read
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <div className="like-icons">
                      <div>
                        <FontAwesomeIcon icon={faHeart} className="icons" /> 1.2K
                </div>
                    </div>

                    <SocialIcons />
                  </div> */}
                </div>
                {/* Content image */}
                <div className="contentImgContainer">
                  {imgUrl && <img src={`${process.env.REACT_APP_BACKEND_URL}${imgUrl}`} className="contentImg" alt="content_img" />}
                </div>
                <div className="contentContainer">
                  {/* description */}
                  {blogPost.Content}
                </div>

                <div className="blogFooter">
                  <div className="actionBtns">
                    <div style={{ marginRight: '10px' }}>
                      <Tag toToggle={false} action="EXAM PREPARATION" />
                    </div>
                    <div style={{ marginRight: '10px' }}>
                      <Tag toToggle={false} action="STUDY TIPS" />
                    </div>
                  </div>

                  {/* <SocialIcons /> */}
                </div>

                {/* <Card blogs={blogs} /> */}
                {/* <div className="cardContainer">
                  {otherBlogs.map((item) => {
                    return (
                      <Card
                        title={item.title}
                        description={item.description}
                        next={item.next}
                        previous={item.previous}
                      />
                    );
                  })}
                </div> */}

                {/* Recommended */}
              </div>
            </div>
          );
        }}
      </Query>

      <Query query={GET_CATEGORY_ARTICLES_QUERY} id={categoryIdvalue}>
        {({ data: { category } }) => {
          const getRecommendedBlogs = () => {
            if (category) {
              const { blog_posts } = category;

              const filterFunction = item => item.id !== idValue;
              const filterMax = (fn, c) => x => c && fn(x) && c--;
              const max = 3;
              const recommendedBlogs = blog_posts.filter(filterMax(filterFunction, max));
              return recommendedBlogs;
            }
            return null;
          };

          return (
            <div className="recommendedContentWrapper">
              <div className="recommendedTitle">Recommended</div>
              <div className="cardWrapper">
                {getRecommendedBlogs().map(item => (

                  <Card
                    id={item.id}
                    key={`article__${item.id}`}
                    title={item.Title}
                    description={item.Description}
                    onDescriptionClick={() => handleDescriptionClick(item.id, item.category.id)}
                    // next={item.next}
                    // previous={item.previous}
                  />
                ))}
              </div>
            </div>

          );
        }}
      </Query>

    </div>
  );
};

export default BlogPage;
