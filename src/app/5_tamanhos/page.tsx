export function AplicacaoLargura(){
    return (
        <div className="flex">
            
            {/*
            w-96, w-[500px]
            */}

            <div className="
            bg-orange-400
            w-1/5
            ">
                Lorem ipsum dolor, sit 1
            </div>

            <div className="
            bg-orange-900
            w-4/5
            ">
                Lorem ipsum dolor, sit 2
            </div>

        </div>
    )
}

export function AplicacaoLargura2(){
    return (
        <div>
            
            {/*
            max-w-md
            */}

            <div className="
            bg-orange-900
            w-screen
            ">
                Lorem ipsum dolor, sit 1
            </div>

            <div className="bg-purple-500 size-40">Tamanho</div>


            <div className="bg-purple-500 size-40">Tamanho</div>

        </div>
    )
}

export default function Aplicacao(){
    return (
        <div className="bg-blue-300 h-screen">
            
            {/* max-w-md*/}

            <div className="bg-purple-500 h-1/2">
                Item 1
            </div>

            <div className="bg-red-500 h-1/2">
                Item 2
            </div>

        </div>
    )
}