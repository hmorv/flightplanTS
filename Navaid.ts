class Navaid {
	
	private AltitudeCode: string;
	private class: string;
	private frequency: number;
	private fss: any;
	private fssHoursOfOperation: number;
	private hoursOfOperation: string;
	private morseId: string;
	private notamFacility: string;
	private stationCallName: string;
	private type: string;
	private voiceId: boolean;

	constructor() {}
}

class NDB extends Navaid {}

class VOR extends Navaid {}

class DME extends Navaid {}

class ILS extends Navaid {}

export { Navaid };