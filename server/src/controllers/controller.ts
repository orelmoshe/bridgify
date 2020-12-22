import { Request, Response } from 'express';
import joi from '@hapi/joi';
import allSettled from 'promise.allsettled';
const NodeCache = require('node-cache');
const myCache = new NodeCache();
import HttpService from '../services/httpService.service';
import utils from '../utils';

class Controller {
	static instance: Controller;

	constructor() {
		if (Controller.instance) {
			return Controller.instance;
		}
		Controller.instance = this;
	}

	public async getPlaces(req: Request, res: Response) {
		try {
			console.log(`Try to get Places`);
			const schema = joi.object().keys({
				city: joi.string().required(),
				country: joi.string().required(),
				radius: joi.string().required(),
			});

			const result = schema.validate(req.body);

			if (result.error) {
				throw result.error.message;
			}

			const city: string = String(req.body.city.replace(/\s+/g, ' ')).toLocaleLowerCase();
			const country: string = String(req.body.country.replace(/\s+/g, ' ')).toLocaleLowerCase();
			const radius: string = req.body.radius || '500';
			console.log(`Req data: city: ${city}, country: ${country}, radius: ${radius}`);
			if (myCache.has(`${country}-${city}-${radius}`)) {
				const placesListCache = myCache.get(`${country}-${city}-${radius}`);
				console.log(`Final to get Places from Cache`);
				res.status(200).json(placesListCache);
				return;
			}
			const openTripService = new HttpService();
			const detailsCity = await openTripService.getDetailsCity(city, country);

			const listPlacesInRadius = await openTripService.getXidAndKindByRadius(radius, detailsCity.lon, detailsCity.lat);

			const arrPlaceDetails: PlaceDetailsInterface[] = utils.editPlaceDetails(listPlacesInRadius.features);

			const arrPromise = arrPlaceDetails.map((item) => openTripService.getPlacesByXid(item.xid));
			const resArrFiltered = await allSettled(arrPromise);
			const newResArrFiltered = resArrFiltered.filter((item) => item.status === 'fulfilled').map((item) => item.value);
			const placesList: PlaceInterface[] = newResArrFiltered.length ? utils.editPlacesList(newResArrFiltered) : [];

			myCache.set(`${country}-${city}-${radius}`, placesList, 10000);
			console.log(`Final to get Places`);
			res.status(200).json(placesList);
		} catch (ex) {
			const err: string = `Failed while trying to get Places, Error:${JSON.stringify(ex)}`;
			console.error(err);
			res.status(500).json(err);
		}
	}
}

export default Controller;
