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

class NDB extends Navaid {

	constructor() {
		
	}
}

class VOR extends Navaid {

	constructor() {
		
	}
}

class DME extends Navaid {

	constructor() {
		
	}
}

class ILS extends Navaid {

	constructor() {
		
	}
}

export { Navaid };