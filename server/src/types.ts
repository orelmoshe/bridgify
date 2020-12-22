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

interface PlaceDetailsInterface {
	coordinates: string;
	xid: string;
	name: string;
	kinds: string;
}
