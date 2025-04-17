export default function Aplicacao(){
    return (
        <div>
            <h1 className="text-orange-400/75">Cores</h1>
            <h1 className="text-[#50d71e]">Cores</h1>

            <button className="bg-orange-600 hover:bg-orange-400">Botão</button>
            <button className="bg-[#50d71e]">Botão</button>

            {/*//bg-[url(/img/cidade.jpg)]*/}
            <h1 className="
            h-96 
            bg-orange-600
            bg-[url(/img/nuvem.png)]
            bg-no-repeat
            bg-center
            ">
                Fundo Imagem
            </h1>

        </div>
    )
}