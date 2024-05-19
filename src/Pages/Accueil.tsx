import React from 'react';
import data_emploies from '@/data/data_emploies.json'
import data_societies from '@/data/data_societies.json'
import data_activities from '@/data/data_activities.json'
import Header from '@/components/Header';
import MyCharts from '@/components/MyCharts';
import { getTotal, useActivities, useEmploye, useSocieties, useSociety } from '@/store/useData';
import Contrats from '@/components/Contrats';

const Accueil: React.FC = () => {
  const id = 12 // 12: Ben || 20: Xabi
  const societyId = 1

  const setSocieties = useSocieties((store) => store.setSocieties)
  const setSociety = useSociety((store) => store.setSociety)
  const setEmploye = useEmploye((store) => store.setEmploye)
  const setActivities = useActivities((store) => store.setActivities)
  const total = getTotal((store) => store.total)

  React.useEffect(() => {
    setSocieties(data_societies);
    setSociety(data_societies[data_societies.findIndex((oneSociety) => oneSociety.id === societyId)])
    setEmploye(data_emploies[data_emploies.findIndex((user: any) => user.id === id)]);
    setActivities(data_activities.filter((activity) => activity.employeId === id));
  }, [id])

  return (
    <main className='px-6 md:px-12'>
      <Header />
      <section className='w-full'>
          <div className='flex flex-col items-center justify-evenly p-4 border-2 rounded-lg'>
            <h3 className='mb-3'>Résumé journalier :</h3>
            <section className='grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-8 w-full'>
              <div className='h-80 border-2 border-stone-700 dark:border-stone-300 rounded-lg'>
                <div className='absolute py-4 px-8'>
                  <h2 className='leading-none'>${total}</h2>
                  <span>Salaires(15jours)</span>
                </div>
                <MyCharts chartParams={"salary"} />
              </div>
              <div className='h-80 border-2 border-stone-700 dark:border-stone-300 rounded-lg'>
                <div className='absolute py-4 px-8'>
                  <h2 className='leading-none'>{total}</h2>
                  <span>Sacs(15jours)</span>
                </div>
                <MyCharts chartParams={"transfert"} />
              </div>
            </section>
            <h3 className='my-1 text-center'>Enregistrements des Factures :</h3> 
            <section className='flex justify-center gap-4 w-full my-4'>
              <Contrats />
            </section>
            <section>

            </section>
          </div>
      </section>
    </main>
  );
};

export default Accueil;
