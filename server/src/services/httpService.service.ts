import AxiosService from './axios.service';
import dotenv from 'dotenv';
dotenv.config();

const prefix = 'http://api.opentripmap.com/0.1/';
const apiKey = process.env.API_KEY;
const lang = 'en';
const ApiRoutes = {
	GET_DETAILS_CITY: `${prefix}/${lang}/places/geoname?apikey=${apiKey}&name=`,
	GET_AUTOSUGGEST: `${prefix}/${lang}/places/autosuggest`,
	GET_XID_AND_KIND_BY_RADIUS: `${prefix}/${lang}/places/radius`,
	GET_PLACES_BY_XID: `${prefix}/${lang}/places/xid/`,
};

class HttpService {
	private static instance: HttpService;
	private axiosService;
	public constructor() {
		if (HttpService.instance) {
			return HttpService.instance;
		}
		HttpService.instance = this;
		this.axiosService = new AxiosService();
	}

	public getDetailsCity = async (city: string, country: string): Promise<any> => {
		try {
			console.log(`Try to get Details City, city: ${city}, country: ${country}`);
			const response = await this.axiosService.get(ApiRoutes.GET_DETAILS_CITY + `${city}&country=${country}`);
			console.log(`Final to get Details City`);
			return response;
		} catch (ex) {
			const err: string = `Failed while trying to get Details City, by HTTP service, Error:${JSON.stringify(ex)}`;
			console.error(err);
			return null;
		}
	};

	public getXidAndKindByRadius = async (radius: string, lon: string, lat: string): Promise<any> => {
		try {
			console.log(`Try to get Xid And Kind By Radius, radius: ${radius}, lon: ${lon}, lat: ${lat}`);
			const response = await this.axiosService.get(ApiRoutes.GET_XID_AND_KIND_BY_RADIUS + `?radius=${radius}&lon=${lon}&lat=${lat}&format=geojson&apikey=${apiKey}`);
			console.log(`Final to get Xid And Kind By Radius`);
			return response;
		} catch (ex) {
			const err: string = `Failed while trying to get Xid And Kind By Radius, by HTTP service, Error:${JSON.stringify(ex)}`;
			console.error(err);
			return null;
		}
	};

	public getPlacesByXid = async (xid: string): Promise<any> => {
		try {
			console.log(`Try to get Places By Xid, xid: ${xid}`);
			const response = await this.axiosService.get(ApiRoutes.GET_PLACES_BY_XID + `${xid}?apikey=${apiKey}`);
			console.log(`Final to get Places By Xid`);
			return response;
		} catch (ex) {
			const err: string = `Failed while trying to get Places By Xid, by HTTP service, Error:${JSON.stringify(ex)}`;
			console.error(err);
			return null;
		}
	};
}

export default HttpService;
