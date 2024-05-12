import React, { useState } from "react"
import { User, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import PropsDisplayToggle from "@/Interface/PropsDisplayToggle"

const DisplayToggle: React.FC<PropsDisplayToggle> = (props: any) => {
  const { admin } = props
  const [ display, setDisplay ] = useState<string>("User")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {display === "User" && (
            <User className={`h-[1.2rem] w-[1.2rem] transition-all ${display === "User" ? 'scale-100' : 'scale-0'} text-black dark:text-white`} />
          )}
          {display === "Building" && (
            <Building className={`h-[1.2rem] w-[1.2rem] transition-all ${display === "Building" ? 'scale-100' : 'scale-0'} text-black dark:text-white`} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setDisplay("User")}>
          Personnel
        </DropdownMenuItem>
        {admin === true && (
          <DropdownMenuItem onClick={() => setDisplay("Building")}>
            Entreprise
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          Déconnection
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DisplayToggle
