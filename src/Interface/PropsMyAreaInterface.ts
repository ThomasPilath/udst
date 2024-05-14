import ActivitiesInterface from "./ActivitiesInterface";
import BonusInterface from "./BonusInterface";

export default interface PropsMyAreaInterface {
  dataFile: ActivitiesInterface[] | BonusInterface[];
  title: string;
  xAxis: string;
  xLabel: string;
  yLabel: string;
}