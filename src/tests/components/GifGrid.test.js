import React from 'react';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs'); // para falsear la data

describe('gifGrid component', () => {
	
	const category = "One Punch";

	
	
	test('render component', () => {
		
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});
		
		const wrapper =  shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	})

	test('after useFetchGifs', () => {

		const gifs = [{
			id: 'ABC',
			url: 'https://localhost/anything/any.jpg',
			title: 'any'
		}]

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: true
		});
		
		const wrapper =  shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false)
		expect(wrapper.find('Gif').length).toBe(gifs.length)

	})
})
