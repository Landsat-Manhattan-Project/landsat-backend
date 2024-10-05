export class Coordinate {
    constructor(public latitude: number, public longitude: number, 
        public name: string, public iconName: string | null = null, id: string | null = null) {}
}