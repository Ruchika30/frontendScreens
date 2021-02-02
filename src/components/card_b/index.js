import React, { useEffect, useState } from 'react';
import style from './style.scss';
import {
  faArrowLeft,
  faArrowRight,
  faExternalLinkSquareAlt,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = props => {
  const {
    id, title, description, previous, next, onDescriptionClick, tag1, tag2, tag1Description, tag2Description, tag1Title, tag2Title
  } = props;
  const [isTagVisible, setTagVisibility] = useState(false);
  const [istitle, setTitle] = useState(title);

  const getDescription = description => {
    if (description.split('').length > 35) { description = `${description.split(' ').splice(0, 35).join(' ')}. . . . . .`; }
    return description;
  };

  const onTagClick = titleValue => {
    setTagVisibility(true);
    setTitle(titleValue);
  };

  const closeTags = () => {
    setTagVisibility(false);
  };

  return (
    <div className="outer">
      {previous && (
        <div className="arrowPanel">
          <div>
            <FontAwesomeIcon icon={faArrowLeft} className="iconLeft" />
          </div>
          <div>
            <p className="previous">Previous</p>
          </div>
        </div>
      )}

      <div
        className={isTagVisible ? 'isTagVisible' : 'blogItem'}
        style={
          previous || next
            ? {
              borderRight: '1px solid #01BBC8',
              borderLeft: '1px solid #01BBC8'
            }
            : null
        }
      >
        <div className="blogtitleContainer">
          <p className="blogItemCategory boldText skyText">{isTagVisible ? istitle : title}</p>
          {/* <div>
                  <FontAwesomeIcon
                    icon={faExternalLinkSquareAlt}
                    className="fatArrow"
                  />
                </div> */}
          <div onClick={closeTags}>
            <FontAwesomeIcon
              icon={faWindowClose}
              className={isTagVisible ? 'closeIcon' : 'closeIconHidden'}

            />
          </div>
        </div>

        <div onClick={onDescriptionClick}>
          <p className="blogItemContent">{getDescription(description)}</p>
          {/* {isTagVisible ?
                  <p className="blogItemContent">{getDescription(tag1Description)}</p>:
                  <p className="blogItemContent">{getDescription(description)}</p>
                } */}

        </div>
        <div className="blogItemFooter">
          <p className="action boldText skyText" onClick={() => onTagClick(tag1)}>{tag1}</p>
          <p className="action boldText skyText" onClick={() => onTagClick(tag2)}>{tag2}</p>
        </div>
      </div>

      {next && (
        <div className="arrowPanel">
          <div>
            <FontAwesomeIcon icon={faArrowRight} className="iconRight" />
          </div>
          <div>
            <p className="next">Next</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
