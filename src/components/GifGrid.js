import React from 'react';
import PropTypes from 'prop-types';

import useFetchGifs from '../hooks/useFetchGifs';
import Gif from "./Gif";

const GifGrid = ({category}) => {

	const {data : images, loading} = useFetchGifs(category);
	
	return (
		<>
			<h2 className="title-category">{category}</h2>

			{loading && <h3 className="animate__animated animate__flash">Loading...</h3> } 
			{/* // loading ? <h3>Loading...</h3> : null */}

			<div className="card-grid">
				{
					images.map(({id, ...image}) => <Gif key={id} {...image} />)
				}
			</div>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

export default GifGrid;