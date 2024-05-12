import ActivitiesInterface from "./ActivitiesInterface";
import BonusInterface from "./BonusInterface";

export default interface PropsMyAreaInterface {
  dataFile: ActivitiesInterface[] | BonusInterface[];
  subject: string;
  title: string;
  xAxis: string;
  xLabel: string;
  yLabel: string;
}