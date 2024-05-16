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
    employeId: number;
    date: string;
    salary: number;
    recovery: number;
    deposit: number;
    [key: string]: any;
}

export interface BonusInterface {
    employeId: number;
    week: number;
    bonus: number;
}