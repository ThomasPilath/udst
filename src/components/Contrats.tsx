import React from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSocieties } from "@/store/useData";
import { Button } from "./ui/button";
import { useModal } from "@/store/useUtils";
import { SocietyInterface } from "@/Interface/DataInterface";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "./ui/form";
import { Switch } from "./ui/switch";

const formSchema = z.object({
  type: z.boolean().default(false), // false: contrat | true: impots
  amount: z.string().min(2),
  week: z.string().min(2)
})

const Contrats: React.FC = () => {

  const societies = useSocieties((store) => store.societies)
  const [society, setSociety] = React.useState<SocietyInterface>({"id": 1,"name": "UDST","logo": "udst.png"})
  const {modal, setModal} = useModal()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: false, // false: contrat | true: impots
      amount: "",
      week: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setModal(false)
    return form.reset()
  }

  const openModal = (e: any, societyId: number) => {
    e.preventDefault()
    setSociety(societies[societies.findIndex(society => society.id === societyId)])
    setModal(true)
  }

  return (
    <div className='flex flex-col border-2 rounded-lg p-4'>
      <div className="flex flex-wrap justify-center gap-4">
      {societies.map((society) => {
        return (
          <Button key={String(society.id)} onClick={e => openModal(e, society.id)} className='flex flex-col gap-4 justify-center items-center h-36 w-36 bg-stone-400/25 hover:bg-stone-100/25 p-2'>
            <img src={`/logos/${society?.logo}`} alt="entreprise logo" className='mt-auto w-20 h-auto' />
            <p className='mt-auto dark:text-stone-300 text-center text-sm  w-32'>{society.name}</p>
          </Button>
        )
      })}
      </div>

      {modal === true && (
        // modal formulaire d'enregistrement de factures
        <section className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative flex flex-col items-center gap-3 w-1/2 p-4 rounded-xl border-4 border-stone-300 dark:border-stone-700 bg-stone-500 dark:bg-stone-400">
            <button className="absolute top-0 right-0 p-2 text-stone-300 dark:text-stone-700" onClick={() => setModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-stone-300 dark:text-stone-700">{society.name}</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex justify-center gap-8 mb-4 w-full">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <FormLabel className="text-xl font-medium text-stone-300 dark:text-stone-700">Contrat</FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-xl font-medium text-stone-300 dark:text-stone-700">Impôts</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex mb-8">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormLabel className="text-xl font-medium text-stone-300 dark:text-stone-700">Montant</FormLabel>
                        <FormControl className="w-4/5 h-10 font-medium text-xl p-2 rounded-xl text-stone-600 bg-stone-300 border-2 border-stone-100">
                          <input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="week"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormLabel className="text-xl font-medium text-stone-300 dark:text-stone-700">Semaine</FormLabel>
                        <FormControl className="w-4/5 h-10 font-medium text-xl p-2 rounded-xl text-stone-600 bg-stone-300 border-2 border-stone-100">
                          <input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-center gap-8 w-full">
                  <Button type="submit" className="bg-stone-300 text-stone-700">Envoyer</Button>
                  <Button type="button" className="bg-stone-700 text-stone-300" onClick={() => {form.reset(), setModal(false)}}>Annuler</Button>
                </div>
              </form>
            </Form>
          </div>
        </section>
      )}
    </div>
  )
}
export default Contrats;