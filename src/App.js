import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const App = ({ title }) => {

	const [categories, setCategories] = useState(['Rick and Morty', 'Game of Thrones']);

	//const handleAdd = () => setCategories(['Dragon Ball', ...categories]);
	
	return (

		<> 
			<h1>{title}</h1>

			<AddCategory 
				setCategories={setCategories} 
			/>

			<hr />
			{/* <button onClick={handleAdd}>Add</button> */}

			<ol>
				{
					categories.map(category => <GifGrid key={category} category={category} />)
				}
			</ol>
		</>

	);
} 

App.propTypes = {
	title: PropTypes.string.isRequired 
}


export default App; 