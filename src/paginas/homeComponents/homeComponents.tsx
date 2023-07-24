import './home.css'
import homeLogo from './imagem-inicial.png'

interface minhaProps{
    title: string;
    description: string;
}

const homeComponents = (props: minhaProps) => {
  return (
      <>
      <h1 className='titulo'>{props.title}</h1>
      <p>{props.description}</p>
      <img src={homeLogo} alt="Imagem Tela Inicial" className='img' />
      </>
  )
}

export default homeComponents