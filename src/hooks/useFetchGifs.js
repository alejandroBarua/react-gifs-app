import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';


const useFetchGifs = (category) => {

	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {

		getGifs(category)
			.then(imgs => setState({ data: imgs, loading: false }));

	},[category]) // solo se renderiza el componente cuando el valor de category cambie

	return state;
}


export default useFetchGifs;