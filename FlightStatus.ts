import { Coordinate } from "./Coordinate";

class FlightStatus {

	private position: Coordinate;
	private altitude: number;
	private speed: number;
	private heading: number;

	constructor( public thePosition: Coordinate, private theAltitude: number, private theSpeed: number, private theHeading: number) {
		this.position = thePosition;
		this.altitude = theAltitude;
		this.speed = theSpeed;
		this.heading = theHeading;
	}

	public getPosition (): Coordinate {
		return this.position;
	}
	public setPosition ( newPosition ): void {
		this.position = newPosition;
	}
	public getAltitude (): number {
		return this.altitude;
	}
	public setAltitude ( newAltitude ): void {
		this.altitude = newAltitude;
	}
	public getSpeed (): number {
		return this.speed;
	}
	public setSpeed ( newSpeed ): void {
		this.speed = newSpeed;
	}
	public getHeading (): number {
		return this.heading;
	}
	public setHeading ( newHeading ): void {
		this.heading = newHeading;
	}

}

export { FlightStatus };