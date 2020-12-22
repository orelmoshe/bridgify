const editPlacesList = (resArrFiltered: any[]): PlaceInterface[] => {
	try {
		console.log(`Try to edit Places List, resArrFiltered: ${resArrFiltered}`);
		const placesList: PlaceInterface[] = [];
		for (let place of resArrFiltered) {
			if (!place.xid) {
				continue;
			}
			let newPlace = {
				xid: place.xid,
				name: place.name !== '' ? place.name : 'Name Not Available',
				city: place.address.city,
				address: `${place.address.road} ${place.address.house_number}, ${place.address.city}, ${place.address.state}`,
				kinds: place.kinds.replace(/_/g, ' '),
				link_map: place.otm,
				wikipedia: place.wikipedia,
				image: place.preview ? place.preview.source : 'https://homestaymatch.com/images/no-image-available.png',
				info: place.wikipedia_extracts ? place.wikipedia_extracts : null,
				point: place.point,
			};
			placesList.push(newPlace);
		}
		console.log(`Final to edit Places List`);
		return placesList;
	} catch (ex) {
		const err: string = `Failed while trying to edit Places List, Error:${JSON.stringify(ex)}`;
		console.error(err);
		return [];
	}
};

const editPlaceDetails = (listPlacesInRadius: any[]): PlaceDetailsInterface[] => {
	try {
		console.log(`Try to edit Place Details, listPlacesInRadius: ${listPlacesInRadius}`);
		const arrPlaceDetails: PlaceDetailsInterface[] = [];
		for (let place of listPlacesInRadius) {
			arrPlaceDetails.push({
				coordinates: place?.geometry?.coordinates,
				xid: place?.properties?.xid,
				name: place?.properties?.name,
				kinds: place?.properties?.kinds,
			});
		}
		console.log(`Final to edit Place Details`);
		return arrPlaceDetails;
	} catch (ex) {
		const err: string = `Failed while trying to edit Place Details, Error:${JSON.stringify(ex)}`;
		console.error(err);
		return [];
	}
};

export default {
	editPlacesList,
	editPlaceDetails,
};
