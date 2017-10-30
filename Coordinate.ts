class Coordinate {
	
	private latitude: number;
	private longitude: number;

	constructor ( public theLatitude: number, public theLongitude: number ) {
		this.latitude = theLatitude;
		this.longitude = theLongitude;
	}
	public getLatitude (): number {
		return this.latitude;
	}
	public setLatitude ( newLatitude ): void {
		this.latitude = newLatitude;
	}
	public getLongitude (): number {
		return this.longitude;
	}
	public setLongitude ( newLongitude ): void {
		this.longitude = newLongitude;
	}
}

export { Coordinate };