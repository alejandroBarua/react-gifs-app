import React from 'react';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory';

describe('add category', () => {

	const setCategories = jest.fn(); // funcion 
	let wrapper =  shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => { // para reiniciar el componente en cada test
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	})

	
	test('should be displayed correctly', () => {

		expect(wrapper).toMatchSnapshot();
	})

	test('value to change input', () => {

		const value = 'Hello World';

		wrapper.find('input').simulate('change', { target: {value} });
		expect(wrapper.find('p').text().trim()).toBe(value);
	})

	test('should not post the category', () => {
			
		wrapper.find('form').simulate('submit', { preventDefault(){} })
		expect(setCategories).not.toHaveBeenCalled();
	})

	test('the input must be empty after adding a category', () => {

		const value = 'Hello World';

		wrapper.find('input').simulate('change', { target: {value} });
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect(setCategories).toHaveBeenCalled();
		//expect(setCategories).toHaveBeenCalledTimes(1);
		expect(wrapper.find('input').prop('value')).toBe("");
	})
	
})
