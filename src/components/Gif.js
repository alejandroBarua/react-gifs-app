import React from 'react'

const Gif = ({title, url}) => {

	const titleShort = title.slice(0,25) + "...";

	return (
		<div className="card">
			<p>{titleShort}</p>
			<img src={url} alt={title} title={title} />
		</div>
	)
}

export default Gif;