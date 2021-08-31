import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('App component', () => {
	
	test('render component', () => {
		const title = "Hello World";
		const wrapper = shallow(<App title={title}/>);

		expect(wrapper).toMatchSnapshot();
	})
	
})
