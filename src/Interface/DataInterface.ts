export interface SocietyInterface {
    id: number;
    name: string;
    logo: string;
}
export interface EmployeInterface {
    id: number;
    firstName: string;
    lastName: string;
    grade: string;
    picture: string;
}

export interface ActivitiesInterface {
    date: string;
    salary: number;
    recovery: number;
    deposit: number;
}

export interface BonusInterface {
    employe: string;
    week: number;
    amount: number;
}