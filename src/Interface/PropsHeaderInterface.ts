import EmployeInterface from "./EmployeInterface";
import SocietyInterface from "./SocietyInterface";

export default interface PropsHeaderInterface {
    employe: EmployeInterface | null;
    society: SocietyInterface | null;
}