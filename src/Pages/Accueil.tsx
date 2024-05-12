import React from 'react';
import data from '@/data/dbFaker.json'
import societies from '@/data/societiesFaker.json'
import EmployeInterface from '@/Interface/EmployeInterface';
import ActivitiesInterface from '@/Interface/ActivitiesInterface';
import BonusInterface from '@/Interface/BonusInterface';
import Activity from '@/components/Activity';
import Bonus from '@/components/Bonus';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import SocietyInterface from '@/Interface/SocietyInterface';

const Accueil: React.FC = () => {
  const id = 20 // 12: Ben || 20: Xabi

  const [employe, setEmploye] = React.useState<EmployeInterface | null>(null);
  const [activities, setActivities] = React.useState<ActivitiesInterface[] | null>(null);
  const [bonus, setBonus] = React.useState<BonusInterface[] | null>(null);
  const [section, setSection] = React.useState<string>("day");
  const [society, setSociety] = React.useState<SocietyInterface | null>(null);

  const userIndex = React.useMemo(() => {
    const selectedIndex = data.findIndex((user: any) => user.employe.id === id)
    return selectedIndex
  }, [id, data])

  React.useEffect(() => {
          setEmploye(data[userIndex].employe);
          setActivities(data[userIndex].activities);
          setBonus(data[userIndex].bonus);
          setSociety(societies[0].society);
  }, [data]);

  return (
    <main className='px-10 md:px-24'>
      <Header employe={employe} society={society} />
      <nav className='flex items-center justify-evenly gap-1 p-2 border-2 rounded-lg w-auto h-full'>
        <Button
          className=''
          onClick={() => setSection("day")}
        >
          Jour
        </Button>
        <Button
          className=''
          onClick={() => setSection("week")}
        >
          Semaine
        </Button>
        <Button
          className=''
          onClick={() => setSection("contrats")}
        >
          Contrats
        </Button>
      </nav>
      <section className='w-full'>
        {(activities && section === "day") && (
          <div className='flex flex-col items-center justify-evenly p-4 border-2 rounded-lg my-2'>
            <h3 className='mb-3'>Activitées par Jour :</h3>
            <section className='grid grid-cols-1 p-1'>
                <Activity dataFile={activities} subject="salary" title="Salaires" xAxis="date" xLabel="Date" yLabel="Salaire" />
                <Activity dataFile={activities} subject="recovery" title="Récoltes" xAxis="date" xLabel="Date" yLabel="Récoltes" />
                <Activity dataFile={activities} subject="deposit" title="Dépôts" xAxis="date" xLabel="Date" yLabel="Dépôts" />
            </section>
          </div>
        )}
        {(bonus && section === "week") && (
          <div className='flex flex-col items-center justify-evenly p-4 border-2 rounded-lg my-2'>
            <h3 className='mb-3'>Informations par Semaine :</h3>
            <Bonus dataFile={bonus} subject="bonus" title="Primes" xAxis="week" xLabel="Semaine" yLabel="Prime" />
          </div>
        )}
        {(section === "contrats") && (
          <div className='flex flex-col items-center justify-evenly p-4 border-2 rounded-lg my-2'>
            <h3 className='mb-3'>Contrats</h3>
          </div>
        )}
      </section>
    </main>
  );
};

export default Accueil;
