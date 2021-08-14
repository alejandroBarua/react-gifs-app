import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import Gif from "./Gif";

const GifGrid = ({category}) => {

	//const [count, setCount] = useState(0); // esto es para probar el useEffect ya que con cada cambio el componente se renderiza por completo
	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs(category)
			.then(gifs => setImages(gifs));
	},[category]) // solo se renderiza el componente cuando el valor de category cambie

	return (
		<>
			<h2>{category}</h2>
			{/* <h4>{count}</h4>
			<button onClick={() => setCount(count + 1)}>add Count</button> */}
			<div className="card-grid">
				{
					images.map(({id, ...image}) => <Gif key={id} {...image} />)
				}
			</div>
		</>
	)
}

export default GifGrid;