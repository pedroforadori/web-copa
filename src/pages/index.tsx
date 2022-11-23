import appPreview from '../assets/app-preview.png'
import logo from '../assets/logo.svg'
import avatar from '../assets/avatares.png'
import iconCheck from '../assets/icon-check.svg'
import Image from 'next/image'

interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logo}  alt="logo" quality={100} />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={avatar} alt="" />

          <strong className="text-gray-100">
            <span className="text-ignite-500">+ {props.count}</span> pessoas jã estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm"
            type="text" 
            required 
            placeholder='Qual nome do seu bolão?' 
          />
          <button 
            type='submit' 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código que poderá usar para convidar seus amigos.
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between itens-center text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.043</span>
              <span>Boloes Criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.043</span>
              <span>Boloes Criados</span>
            </div>
          </div>
        </div>
      </main>
      <Image 
        src={appPreview} 
        alt="imagem preview do mobile"
        quality={100}  />
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http:localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}