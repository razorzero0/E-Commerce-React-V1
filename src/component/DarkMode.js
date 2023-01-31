import {Button} from '@cakra-ui'
import { useState } from "react"
export default function DarkMode() {
    const { colorMode, toggleColorMode } = useState()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
  }