import { Coordinate } from "./Coordinate";

class Waypoint extends Coordinate {
	
	private id: string;

	constructor( public theId: string, theLatitude: number, theLongitude: number ) {
		super( theLatitude, theLongitude );
		this.id = theId;
	}

	public getId () {}
	public setId ( newId ) {}
}

export { Waypoint };