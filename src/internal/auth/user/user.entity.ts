export class User {
    constructor(public email: string, public password: string, public purpose: string, public id: string | null = null) {}
}