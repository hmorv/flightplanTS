import { FlightPlanLine, FlightPlan } from "./FlightPlan";
import { Waypoint } from "./Waypoint";

let wp1: Waypoint = new Waypoint('LEPA', 39.5516667, 2.7388889);
let wp2: Waypoint = new Waypoint('EPAMA', 39.6031389, 1.3803889);
let wp3: Waypoint = new Waypoint('ARGOR', 39.5386389, 0.2987222);

let line1: FlightPlanLine = new FlightPlanLine(wp1, 0, 0, 0, 'PALMA DE MALLORCA');
let line2: FlightPlanLine = new FlightPlanLine(wp2, 0, 273, 63, 'EPAMA');
let line3: FlightPlanLine = new FlightPlanLine(wp3, 0, 266, 50, 'ARGOR');

let lines = [line1, line2, line3];
let fp1 = new FlightPlan(lines);

console.log(fp1);