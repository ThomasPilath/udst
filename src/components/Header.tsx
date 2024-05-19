import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import DisplayToggle from './DisplayToggle';
import { useBonus, useEmploye, useSociety } from '@/store/useData';


const Header: React.FC = () => {

  const society = useSociety((store) => store.society)
  const employe = useEmploye((store) => store.employe)
  const bonus = useBonus((store) => store.bonus)

  return (
    <header className='flex justify-between items-center gap-1 w-full h-28 my-4'>
      <section className='flex items-center justify-center gap-4 border-2 rounded-lg p-3 min-w-fit h-full'>
        <img src={`src/assets/logos/${society?.logo}`} alt="pp" className='flex items-center justify-center h-full' />
        <h1 className='text-center hidden md:block'>{society?.name}</h1>
      </section>
      <section className='flex items-center justify-between gap-2 border-2 rounded-lg p-2 w-full xl:w-2/5 h-full'>
        {employe && (
          <div className='flex gap-1 h-full w-full'>
            <img src={`src/assets/user/user_${employe.picture}.svg`} alt="pp" className='flex items-center justify-center rounded-full border-2 border-primary' />
            <div className='flex flex-col h-full '>
              <h4>{employe.firstName} {employe.lastName}</h4>
              <h6>Grade : <span>{employe.grade}</span></h6>
              <h6>Prime S{bonus.reduce((max, current) => {return current.week > max.week? current : max;},{ week: 0, bonus: 0 }).week} : <span>${bonus.reduce((max, current) => {return current.week > max.week? current : max;},{ week: 0, bonus: 0 }).bonus}</span></h6>
            </div>
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <DisplayToggle admin={true} />
          <ThemeToggle />
        </div>
      </section>
    </header>
  )
}

export default Header