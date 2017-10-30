enum SurfaceTypes {
	ASP = 'Asphalt',
	BIT = 'Bitumenous asphalt or tarmac',
	BRI = 'Bricks',
	CLA = 'Clay',
	COM = 'Composite',
	COR = 'Coral',
	GRE = 'Graded or rolled earth, grass on graded earth',
	GRS = 'Grass or earth not graded or rolled',
	GVL = 'Gravel',
	ICE = 'Ice',
	LAT = 'Laterite',
	MAC = 'Macadam',
	PEM = 'Partially concrete, asphalt or bitumen-bound macadam',
	PER = 'Permanent surface, details unknown',
	PSP = 'Marston Matting (derived from pierced/perforated steel planking',
	SAN = 'Sand',
	SMT = 'Sommerfeld Tracking',
	SNO = 'Snow',
	U = 'Unknown surface'
}

class Runway {

	//runways always has 2 names, i.e. rwy18 & rwy36
	private name: string[];
	
	//The length of runway declared available and suitable for the ground run of an airplane taking off.
	private readonly TORA: number;

	//The length of the takeoff run available plus the length of the clearway, if clearway is provided.
	private readonly TODA: number;

	//The length of the takeoff run available plus the length of the stopway, if stopway is provided.
	private readonly ASDA: number;

	//The length of runway that is declared available and suitable for the ground run of an airplane landing.
	private readonly LDA: number;

	//LDA (or TORA) plus a stopway.
	private readonly EMDA: number;

	readonly surface: string;
	readonly length: number;

	private static readonly Surface = SurfaceTypes;

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