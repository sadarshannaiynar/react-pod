import React from 'react';
import PropTypes from 'prop-types';

const StatelessComponent = props => (
    <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
);

StatelessComponent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default StatelessComponent;
