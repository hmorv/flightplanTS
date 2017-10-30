import { Waypoint } from "./Waypoint";

class FlightPlanEntry {
	private distance: number;
	private frequency: number;
	private name: string;
	private track: number;
	private waypoint: Waypoint;

	constructor( public w: Waypoint, public f: number, public t: number, public m: number, public n: string ) {
		this.waypoint = w;
		this.frequency = f;
		this.track = t;
		this.distance = m;
		this.name = n;
	}

	public getWaypoint () {
		return this.waypoint;
	}
	public getFrequency () {
		return this.frequency;
	}
	public getTrack () {
		return this.track;
	}
	public getDistance () {
		return this.distance;
	}
	public getName () {
		return this.name;
	}
	public setWaypoint ( newWaypoint ) {
		this.waypoint = newWaypoint;
	}
	public setFrequency ( newFrequency ) {
		this.frequency = newFrequency;
	}
	public setTrack ( newTrack ) {
		this.track = newTrack;
	}
	public setDistance ( newDistance ) {
		this.distance = newDistance;
	} 
	public setName ( newName ) {
		this.name = newName;
	}
}

class FlightPlan {
	private lines: FlightPlanEntry[];

	constructor(public theLines: FlightPlanEntry[]) {
		this.lines = theLines;
	}
}

export { FlightPlanEntry, FlightPlan };