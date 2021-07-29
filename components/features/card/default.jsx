/*  /components/features/global/card/default.jsx  */

import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
// import storyCardFilter from '../../../../content/filters/story-card';
import storyCardFilter from '../../../content/filters/story-card';
const Card = (props) => {
  /*
    Retrieve content config values from custom fields
    Notice that here we are using props directly instead of component context
  */
  const {
    customFields: {
      storyConfig = {},
    },
  } = props;
  const { contentService, contentConfigValues } = storyConfig;

  /* fetch component content using Fusion's useContent */
  const story = useContent({
    source: contentService,
    query: contentConfigValues,
    filter: storyCardFilter,
  });



  if (!story) return null;

  console.log('JSON.stringify story Dos-->', JSON.stringify(story))
  console.log('OTRO-->', story.content_elements)
  let contenidos = story.content_elements
  const contenido = contenidos.map((info, index) => {
    console.log('Index->',info )
    return (
        <p>{info.content}</p>
    );
  });
  return (

    <article className="card my-5">
      <div className="card-body">
        <h2 className="card-title">{story.headlines.basic}</h2>
        <h5>{story.description.basic}</h5>
        <hr />
        <p className="card-text">{contenido}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  customFields: PropTypes.shape({
    storyConfig: PropTypes.contentConfig('article').tag({
      label: 'Story URL',
    }).isRequired,
  }),
};

export default Card;