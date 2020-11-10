import React,{useState} from 'react';


export const Armazenamento=React.createContext({
     login:'Olá',
     usuario:'',
     senha:'',
     


     




})




export function ArmazenamentoProvider({ children }) {
  const [login,setlogin]=useState('')

  async function mudar(){
    setlogin('nop')
  }

    
  return(  
    <Armazenamento.Provider value={{ login,mudar }}>
      {children}
    </Armazenamento.Provider>
  )  

};


export default Armazenamento