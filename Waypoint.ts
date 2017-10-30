import { Coordinate } from "./Coordinate";

class Waypoint extends Coordinate {
	
	private id: string;

	constructor( theId: string, theLatitude: number, theLongitude: number ) {
		super( theLatitude, theLongitude );
		this.id = theId;
	}

	public getId (): string {
		return this.id;
	}
	public setId ( newId ): void {
		this.id = newId;
	}
}

export { Waypoint };