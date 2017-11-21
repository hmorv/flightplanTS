class Strip
{
	private id: number;
	private type: string;
	private level: string;
	private departure: string;
	private destination: string;

	constructor(theId: number, theType: string, theLevel: string, theDeparture: string, theDestination: string) {
		this.id = theId;
		this.type = theType;
		this.level = theLevel;
		this.departure = theDeparture;
		this.destination = theDestination;
	}

	public getId(): number {
		return this.id;
	}
	public setId( id: number ): void {
		this.id = id;
	}
	public getType(): string {
		return this.type;
	}
	public setType( type: string ): void {
		this.type = type;
	}
	public getLevel(): string {
		return this.level;
	}
	public setLevel( level: string): void {
		this.level = level;
	}
	public getDeparture(): string {
		return this.departure;
	}
	public setDeparture( departure: string ): void {
		this.departure = departure;
	}
	public getDestination(): string {
		return this.destination;
	}
	public setDestination( destination: string ): void {
		this.destination = destination;
	}
}

export { Strip };