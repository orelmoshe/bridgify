// @ts-ignore
interface PlaceInterface {
	xid: string;
	name: string;
	city: string;
	address: string;
	kinds: string;
	link_map: string;
	wikipedia: string;
	image: string;
	info: { title: string; text: string };
	point: { lon: string; lat: string };
}

interface CountryCode {
	name: string;
	code: string;
	'country-code': string;
}
