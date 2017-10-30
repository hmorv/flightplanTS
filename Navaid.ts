class Navaid {
	
	private type: string;
	private class: string;
	private frequency: number;
	private AltitudeCode: string;
	private hoursOfOperation: string;
	private voideId: boolean;
	private morseId: string;
	private stationCallName: string;
	private notamFacility: string;
	private fss: any;
	private fssHoursOfOperation: number;

	constructor() {}
}

class NDB extends Navaid {}

class VOR extends Navaid {}

class DME extends Navaid {}

class ILS extends Navaid {}

export { Navaid };