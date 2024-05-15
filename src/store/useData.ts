import { create } from "zustand";
import ActivitiesInterface from "@/Interface/ActivitiesInterface";
import EmployeInterface from "@/Interface/EmployeInterface";
import SocietyInterface from "@/Interface/SocietyInterface";
import { PropsChartParamsInterface } from "@/Interface/PropsInterface";

type SocietyType = {
  society: SocietyInterface,
  setSociety: (newSubject: SocietyInterface) => void
}

export const useSociety = create<SocietyType>((set) => ({
  society: {
      id: 0,
      name: "",
      logo: ""
    },
  setSociety: (newSubject: SocietyInterface) => set({society: newSubject})
}))

type EmployeType = {
  employe: EmployeInterface,
  setEmploye: (newSubject: EmployeInterface) => void
}

export const useEmploye = create<EmployeType>((set) => ({
  employe: {
    id: 0,
    firstName: "",
    lastName: "",
    grade: "",
    picture: ""
  },
  setEmploye: (newSubject: EmployeInterface) => set({employe: newSubject})
}))

type ActivitiesType = {
  activities: ActivitiesInterface[],
  setActivities: (newSubject: ActivitiesInterface[]) => void
}

export const useActivities = create<ActivitiesType>((set) => ({
  activities: [
    {
      date: "",
      salary: 0,
      recovery: 0,
      deposit: 0
    }
  ],
  setActivities: (newSubject: ActivitiesInterface[]) => set({activities: newSubject})
}))


type ChartsParamsType = {
  chartParams: PropsChartParamsInterface,
  setChartParams: (newParams: PropsChartParamsInterface) => void
}

export const getChartsParams = create<ChartsParamsType>((set) => ({
  chartParams: {
    subject: "",
    title: "",
    xAxis: "",
    xLabel: "",
    yLabel: ""
  },
  setChartParams: (newParams: PropsChartParamsInterface) => set({chartParams: newParams})
}))