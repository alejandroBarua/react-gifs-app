import React from 'react';
import Gif from '../../components/Gif';
import { shallow } from 'enzyme';

describe('tests <Gif />', () => {
	
	const title = "Hello World",
		url ="htpp://localhost:8080/",
		wrapper = shallow(<Gif title={title} url={url}/>);
		
		test('render Component', () => {

			expect(wrapper).toMatchSnapshot();
	})
	
	test('title', () => {
		
		const titleShort = title.slice(0,25) + "...";
		const $p = wrapper.find('p');

		expect($p.text().trim()).toBe(titleShort);
	})

	test('img', () => {
		
		const $img = wrapper.find('img');

		//console.log(img.html());
		//console.log(img.props());
		//console.log(img.prop('src'));

		expect($img.prop('src')).toBe(url);
		expect($img.prop('alt')).toBe(title);

	})

	test('div', () => {
		
		const $div = wrapper.find('div'),
			className = $div.prop('className');

		expect(className.includes("animate__fadeIn")).toBe(true);

	})

})
 