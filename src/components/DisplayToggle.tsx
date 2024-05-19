import React, { useState } from "react"
import { User, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {PropsDisplayToggle} from "@/Interface/PropsInterface"

const DisplayToggle: React.FC<PropsDisplayToggle> = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
            <User className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          Déconnection
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DisplayToggle
