import React from 'react';
import PropsHeaderInterface from '@/Interface/PropsHeaderInterface';
import { ThemeToggle } from './ThemeToggle';
import DisplayToggle from './DisplayToggle';


const Header: React.FC<PropsHeaderInterface> = (props) => {
  const { employe, society } = props

  return (
    <header className='flex justify-between items-center gap-1 w-full h-28 my-4'>
      <section className='flex items-center justify-center border-2 gap-4 rounded-lg p-3 w-1/2 h-full'>
        <img src={`src/assets/logos/${society?.logo}`} alt="pp" className='flex items-center justify-center h-full' />
        <h1 className='text-center'>{society?.name}</h1>
      </section>
      {employe && (
        <section className='flex items-center justify-between gap-4 border-2 rounded-lg p-3 w-1/2 h-full'>
          <div className='flex gap-2 h-full'>
            <img src={`src/assets/user/user_${employe.picture}.svg`} alt="pp" className='flex items-center justify-center h-full rounded-full border-2 border-primary' />
            <div className='flex flex-col h-full'>
              <h2>{employe.firstName} {employe.lastName}</h2>
              <h4>Grade : <br/> {employe.grade}</h4>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <DisplayToggle admin={true} />
            <ThemeToggle />
          </div>
        </section>
      )}
    </header>
  )
}

export default Header