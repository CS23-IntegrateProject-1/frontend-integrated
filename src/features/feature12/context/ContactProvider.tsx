import React, { useContext, useEffect, useState, FC } from 'react'
import { Axios } from '../../../AxiosInstance';

interface ContactsProviderProps{
  children: React.ReactNode;
}

interface ContactsContextValue {
  contacts: Contacts[];
}

interface Contacts {
  username: string;
  id: number;
}

const ContactsContext = React.createContext<ContactsContextValue | undefined>(undefined);

export const ContactProvider: FC<ContactsProviderProps> = ({ children })=>{
  const [contacts, setContacts] = useState<Contacts[]>([]);
  
  useEffect(() => {
    Axios.get("/feature12/displayUser")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setContacts(res.data);
        }
        console.log(contacts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setContacts]);

  return (
    <ContactsContext.Provider value={{ contacts }}>
      {children}
    </ContactsContext.Provider>
  )
}
export function useContacts() { 
  const contactContext = useContext(ContactsContext);
  if (!contactContext) {
    return Error;
  }
  return contactContext;
}

