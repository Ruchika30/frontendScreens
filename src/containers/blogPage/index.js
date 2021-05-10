import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Tag from '../../components/tags';
import Card from '../../components/cardForBlog';
import Navbar from '../../components/navbar';
import GET_BLOGPOST from '../../queries/category/getArticle';
import { GET_CATEGORY_ARTICLES_QUERY } from '../../queries/category/getCategoryArticles';
import Query from '../../components/query';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { home, profile, upwardArrow } from '../../assets/icons';
import moment from 'moment';
import { darkBlue } from '../../assets/styles/colors';
import GoToTopProvider from '../../hooks/use-topNavigation';
import { getArticle as getArticleSrvc } from '../../services/blog';
import LoaderProvider from '../../hooks/use-loader';
import ReactMarkdown from 'react-markdown';
import { BlogValueContext } from '../../context';

const BlogPage = ({ location }, props) => {
  const [idValue, setIdValue] = useState('');
  const [recommBlogs, setRecomBlogs] = useState([]);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [blogPost, setblogPostdata] = useState('');
  const history = useHistory();
  const { showGoTop, hideGoTop } = GoToTopProvider();
  const { show, hide } = LoaderProvider();
  const blogId = window.location.pathname.split('/').pop();
  const { categoryName, categoryId } = useContext(BlogValueContext);

  const getInitialData = async id => {
    try {
      show();
      const response = await getArticleSrvc(id);
      setblogPostdata(response[0]);
      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      hide();
    }
  };

  useEffect(() => {
    getInitialData(blogId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

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

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      showGoTop();
    } else {
      hideGoTop();
    }
  };

  // window.addEventListener('popstate', event => window.history.pushState({ categoryid: categoryId }, '', `/blog/${categoryName}`)  );

  useEffect(() => () => {
    if (history.action === 'POP') {
      history.replace(`/blog/${categoryName}`, { categoryId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.onscroll = () => scrollFunction();

  const getContent = str => {
    const val = str?.split('"').join('');
    return val;
  };

  const getPublishedDate = date => moment(date).format(' MMMM Do YYYY');
  return (
    <div>
      {/* {isNavbarVisible
        ? <Navbar fixed={isNavbarVisible} progressValue={getPercent} />
        : null} */}

      <Navbar fixed={isNavbarVisible} progressValue={getPercent} />

      <div>
        <div className="blogContainer">
          <div className="contentContainer">
            <h1>{blogPost.title}</h1>
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
                  {/* {publishedDate} */}
                  {getPublishedDate(blogPost.published)}
                  ,
                  {/* {blogPost.minutes} */}
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
            {/* {imgUrl && <img src={`${process.env.REACT_APP_BACKEND_URL}${imgUrl}`} className="contentImg" alt="content_img" />} */}
          </div>
          <div className="contentContainer">
            {/* description */}
            {/* {blogPost.content} */}
            <ReactMarkdown source={getContent(blogPost.content)} />
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

    </div>
  );
};

export default BlogPage;
