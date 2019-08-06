
export enum State {
    Pending = 'Pending',
    Confirmed = 'Confirmed',
    Cancelled = 'Cancelled'
}

export interface Reservation {
    checkoutDate: any,
    checkinDate: any,
    flight: any,
    package: any,
    models: any,
}