//import viteLogo from '/vite.svg';
import './App.css';




//-------------------------------------------------------------------------------//

// A forma mais recomendada para fazer é usando a forma 1

//-------------------------------------------------------------------------------//



// forma 1

// quando você coloca '{text}: TitleProst' o sistema vai no component TitleProst 
// e procura se existe um 'text', quando encontra o "text", ele pega o tipo de dado
// descrito e usa ele para especificar o tipo do dado enviado.  

//define o tipo de dado

type TitleProst = {
  text:string;
}

const Title = ({text}: TitleProst) =>{
  return <h1>{text}</h1>
}



//-------------------------------------------------------------------------------//

// forma 2

//  aqui ele já define o tipo direto sem a necessidade de criar um 'type TitleProst'

// const Title = ({text}: {text:string}) =>{
//   return <h1>{text}</h1>
// }


//-------------------------------------------------------------------------------//

// forma 3

// aqui você define o tipo de dado, mas deixa para ser preenchido onde for chamado 
// // o component
// const Title = ({children}: {children:string}) =>{
//   return <h1>{children}</h1>;
// }

//-------------------------------------------------------------------------------//

// forma 4

//aqui ele está enviado um um elemento react e não uma string 


// const Title = ({children}: {children:React.ReactNode}) =>{
//   return <h1>{children}</h1>;
// }


function Definindo_tipo_de_variavel_quando_envia_component() {

  
// 1 e 2 forma
  return (
    <div className='App'>
      <Title text='Hello, world!'></Title> 
    </div>
  )




// 3forma
  // return (
  //   <div className='App'>
  //     <Title>Hello, world!</Title> 
  //   </div>
  // )



  // 4forma 

// return (
//     <div className='App'>
//       <Title>
//         Hello,
//         <b>world!</b>
//       </Title> 
//     </div>
//   )


}

export default Definindo_tipo_de_variavel_quando_envia_component
