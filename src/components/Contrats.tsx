import { useSocieties, useSociety } from "@/store/useData";
import { Button } from "./ui/button";

const Contrats: React.FC = () => {

  const societies = useSocieties((store) => store.societies)
  const setSociety = useSociety((store) => store.setSociety)


  const handleSelect = (e: any, societyId: number) => {
    e.preventDefault()
    setSociety(societies[societies.findIndex(society => society.id === societyId)])
  }

  return (
    <div className='flex flex-col border-2 rounded-lg p-4'>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {societies.map((society) => {
        return (
          <Button key={String(society.id)} onClick={e => handleSelect(e, society.id)} className='flex flex-col gap-4 justify-center items-center h-36 w-36 bg-stone-400/25 hover:bg-stone-100/25 p-2'>
            <img src={`src/assets/logos/${society?.logo}`} alt="entreprise logo" className='mt-auto w-20 h-auto' />
            <p className='mt-auto text-stone-300 text-center text-sm  w-32'>{society.name}</p>
          </Button>
        )
      })}
      </div>
    </div>
  )
}
export default Contrats;