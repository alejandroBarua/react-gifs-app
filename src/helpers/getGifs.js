
export const getGifs = async(category) => {

		const key = "V8omOgT6Vnz2D5hOS5QVQaBkEYtU2xOf",
			limit = 2,
			query = category;

		const urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}`;
		const res = await fetch(urlSearch);
		const {data} = await res.json();

		const gifs = data.map(({id, title, images}) => {
			return {
				id,
				title,
				url: images?.downsized_medium.url
			}
		})

		return gifs;
	}