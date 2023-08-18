//import viteLogo from '/vite.svg';
import './App.css';



// quando coloca o '?' torna a propriedade não obrigatória

type TitleProst = {
  children:React.ReactNode;
  size?:'large' | 'small';
}

type paragraphProps = {
  color:string;
}



// o 'string = "large" ' é usado para garantir um valor padrão caso 
// nada venha a ser inserido
const Title = ({children,size = "large",color}: TitleProst & paragraphProps) =>{
  return <h1 
    style={{
      fontSize: size === 'large' ? '2em' : '1em',
      color: color === 'red' ? 'green' : 'red',
  }}
  >
    {children}
  </h1>

}


// o typescript entende o tipo do objeto sozinho
const user ={
  id:1,
  name: "João",
  age :20,
  isAdmin: false,
  dateBorn: "01/01/2000",
}

//permite criar um novo objeto apartir de um objeto já existente
// e obrigar a enviar todos os dados necessarios 
type registro_de_um_usuario = typeof User;

const mary: registro_de_um_usuario = {
  id:1,
  name: "Mary",
  age :20,
  isAdmin: false,
  dateBorn: "01/01/2000",
}



// criar uma função

function sumNumbers(a:number,b:number) {
  return a + b;
}


// renderização dinamica



// aqui na função List o 'function List<ItemType>' foi escrito para poder ser definido o tipo
// de dado recebidos, logo após isso tem o '({items,render}' e essa parte esta dizendo que o List irá receber
// 2 tipos de dados o items e o render, logo a função irá receber 2 argumentos do tipo ItemType; 
// aqui: ' :{items:ItemType[], render:(item:ItemType,index:number)=>React.ReactNode}) '
// ele está definindo o tipo do items como array e definindo o render como uma função e definindo 
// quais são os tipos dos argumentos que ela irá receber, nesse caso ele está refinindo o parâmetro
//  item do render como um any(ou tipos genéricos se prefirir) e o dado index do render como um number e por fim está 
// falando que ele vai retornar um component no render.

function List<ItemType>({items,render}:{items:ItemType[];
  render:(item:ItemType,index:number)=>React.ReactNode}){

// aqui a função List está fazendo um return e dentro desse return tem um ul. Essa ul dentro de sí tem uma função chamada items.map ele envia como 
// argumento o item e o index, ela pega essas informações e passa por uma função render que irá renderiza-los na tela, depois ela pega os dados e 
// inseri no items.map, e assim inserindo no retorno do mapeamento, gerando uma lista de elementos retornados pela função render.

  return(
    <ul>
      {items.map((item,index)=>{
        return render(item,index);
      })}
    </ul>
  )
}
 


function Enviado_tipo_de_dados_complexo_por_component() {

  const items = [
    {
      id:1,
      name:"Nilton",
    },
    {
      id:2,
      name:"Maria",
    },
    {
      id:3,
      name:"Silvio",
    }
  ]




  return (
    <div className='App'>


      <Title color='red'>Hello World</Title> 
    

    <List
      items={items}
      render={(item,index)=>{
        if(item.id ===1){
          return <p>{item.name}	</p>;
        }

        return <h3>{item.name}</h3>;
      }}
    />

  </div>
  )




}

export default Enviado_tipo_de_dados_complexo_por_component
