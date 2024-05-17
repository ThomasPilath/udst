import { create } from "zustand";
import {ActivitiesInterface, BonusInterface, EmployeInterface, SocietyInterface} from "@/Interface/DataInterface";
import { PropsChartParamsInterface } from "@/Interface/PropsInterface";

type SocietiesType = {
  societies: SocietyInterface[],
  setSocieties: (newSocieties: SocietyInterface[]) => void
}

export const useSocieties = create<SocietiesType>((set) => ({
  societies: [
    {
      id: 0,
      name: "",
      logo: ""
    }
  ],
  setSocieties: (newSocieties: SocietyInterface[]) => set({societies: newSocieties})
}))

type SocietyType = {
  society: SocietyInterface,
  setSociety: (newSociety: SocietyInterface) => void
}

export const useSociety = create<SocietyType>((set) => ({
  society: {
      id: 0,
      name: "",
      logo: ""
    },
  setSociety: (newSociety: SocietyInterface) => set({society: newSociety})
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
      employeId: 0,
      date: "",
      salary: 0,
      recovery: 0,
      deposit: 0
    }
  ],
  setActivities: (newSubject: ActivitiesInterface[]) => set({activities: newSubject})
}))

type BonusType = {
  bonus: BonusInterface[],
  setBonus: (newSubject: BonusInterface[]) => void
}

export const useBonus = create<BonusType>((set) => ({
  bonus: [
    {
      employeId: 0,
      week: 0,
      bonus: 0
    }
  ],
  setBonus: (newBonus: BonusInterface[]) => set({bonus: newBonus})
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

type TotalType = {
  total: number,
  setTotal: (newTotal: number) => void
}

export const getTotal = create<TotalType>((set) => ({
  total: 0,
  setTotal: (newTotal: number) => set({total: newTotal})
}))