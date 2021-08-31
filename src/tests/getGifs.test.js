import {getGifs} from "../helpers/getGifs";

describe('getGifs fetch', () => {
	

	test('counter gifs', async() => {
		
		const gifs = await getGifs('One Punch');
	
		expect(gifs.length).toBe(3);
	})
	
	test('counter gifs empty category', async() => {
		
		const gifs = await getGifs('');
	
		expect(gifs.length).toBe(0);
	})

})