import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Definindo_tipo_de_variavel_quando_envia_component from './conceito01.tsx'
import Enviado_tipo_de_dados_complexo_por_component from './conceito02.tsx'
import Tailwing from './tailwing';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Definindo_tipo_de_variavel_quando_envia_component /> */}
    {/* <Enviado_tipo_de_dados_complexo_por_component /> */}
    <Tailwing/>

  </React.StrictMode>,
)
