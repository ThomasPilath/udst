import React from 'react';
import data_employe from '@/data/data_emploies.json'
import data_societies from '@/data/data_societies.json'
import data_activities from '@/data/data_activities.json'
import Header from '@/components/Header';
import MyCharts from '@/components/MyCharts';
import { useActivities, useEmploye, useSociety } from '@/store/useData';

const Accueil: React.FC = () => {
  const id = 20 // 12: Ben || 20: Xabi

  const setSociety = useSociety((state) => state.setSociety)
  const setEmploye = useEmploye((state) => state.setEmploye)
  const setActivities = useActivities((state) => state.setActivities)
  const salary = {subject: "salary",title: "Salaires", xAxis: "date", xLabel: "Date", yLabel: "Salaire"}
  const recovery = {subject: "recovery",title: "Récoltes", xAxis: "date", xLabel: "Date", yLabel: "Récoltes"}
  const deposit = {subject: "deposit",title: "Dépôts", xAxis: "date", xLabel: "Date", yLabel: "Dépôts"}

  React.useEffect(() => {
    const selectedIndex = data_employe.findIndex((user: any) => user.id === id)
    setSociety(data_societies[0]);
    setEmploye(data_employe[selectedIndex]);

    setActivities(data_activities.filter((activity) => activity.employeId === id));
  }, [id])

  return (
    <main className='px-6 md:px-12'>
      <Header />
      <section className='w-full'>
          <div className='flex flex-col items-center justify-evenly p-1 border-2 rounded-lg'>
            <h3 className='mb-3'>Résumé journalier :</h3>
            <section className='grid grid-cols-1 sm:grid-cols-3 sm:gap-8 w-full'>
                <MyCharts chartParams={salary} />
                <MyCharts chartParams={recovery} />
                <MyCharts chartParams={deposit} />
            </section>
          </div>
      </section>
    </main>
  );
};

export default Accueil;
