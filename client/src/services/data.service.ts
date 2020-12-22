import AxiosService from './axios.service';

export default class DataService {
	private static instance: DataService;
	private axiosService;
	private prefix: string = 'http://localhost:3001';

	constructor() {
		if (DataService.instance) {
			return DataService.instance;
		}
		DataService.instance = this;
		this.axiosService = new AxiosService();
	}

	GetPlacesTable = async (country: string, city: string, radius: number): Promise<PlaceInterface[]> => {
		try {
			const response: PlaceInterface[] = await this.axiosService.post(`${this.prefix}/search`, { country, city, radius });
			return response;
		} catch (ex) {
			const err: string = `Failed while trying to get places table, by DataService class, Error:${JSON.stringify(ex)}`;
			console.error(err);
			return [];
		}
	};
}
