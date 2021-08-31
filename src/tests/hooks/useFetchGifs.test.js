import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('test Hook useFetchGifs', () => {
	
	test('render Hook', async() => {
		
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Puch'));
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	})

	test('should return an array of images and the loading in false', async() => {
			
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Puch'));
		await waitForNextUpdate();
		
		const { data, loading } = result.current;

		expect(data.length).toBe(3);
		expect(loading).toBe(false);
	})
	
	
})
