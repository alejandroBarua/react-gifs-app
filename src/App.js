import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';

const App = ({ title }) => {

	const [categories, setCategories] = useState(['One Punch', 'Samurai X']);

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
					categories.map(category => <li key={category}>{category}</li>)
				}
			</ol>
		</>

	);
} 

App.propTypes = {
	title: PropTypes.string.isRequired 
}


export default App; 