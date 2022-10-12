import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { useRouter } from 'next/router'

interface IMenuProvider {
  children?: ReactNode
}

interface IMenuConsumer {
  isOpen: boolean
  toggleOpen: (shouldOpen: boolean) => void
}

export const MenuContext = createContext<{
  isOpen: boolean
  toggleOpen: (shouldOpen: boolean) => void
}>({
  isOpen: false,
  toggleOpen: (shouldOpen: boolean) => null,
})

export const MenuProvider = (props: IMenuProvider) => {  
  const { children } = props

  const [isOpen, setOpen] = useState(false)

  const toggleOpen = (shouldOpen: boolean) => {
    setOpen(shouldOpen);
  }


  return (
    <MenuContext.Provider
      value={{
        toggleOpen: toggleOpen,
        isOpen: isOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext<IMenuConsumer>(MenuContext)
