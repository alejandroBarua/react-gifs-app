import React from 'react';
import PropTypes from 'prop-types';


const Gif = ({title, url}) => {

	const titleShort = title.slice(0,25) + "...";

	return (
		<div className="card animate__animated animate__fadeIn">
			<p>{titleShort}</p>
			<img src={url} alt={title} title={title} />
		</div>
	)
}

Gif.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired 
}

export default Gif;