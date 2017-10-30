class Runway {

	//the runway always has 2 names, i.e. rwy18 & rwy36
	private name: string[];
	
	//The length of runway declared available and suitable for the ground run of an airplane taking off.
	readonly TORA: number;

	//The length of the takeoff run available plus the length of the clearway, if clearway is provided.
	readonly TODA: number;

	//The length of the takeoff run available plus the length of the stopway, if stopway is provided.
	readonly ASDA: number;

	//The length of runway that is declared available and suitable for the ground run of an airplane landing.
	readonly LDA: number;

	//LDA (or TORA) plus a stopway.
	readonly EMDA: number;

	readonly surface: string;
	readonly length: number;

	constructor( theTORA: number, theTODA: number, theASDA: number, theLDA: number, theEMDA: number, theSurface: string, theLength: number ) {
		this.TORA = theTORA;
		this.TODA = theTODA;
		this.ASDA = theASDA;
		this.LDA = theLDA;
		this.EMDA = theEMDA;
		this.surface = theSurface;
		this.length = theLength;
	}

	public getName (): string[] {
		return this.name;
	}
}

class Airport {
	constructor() {}
}

export { Runway, Airport };