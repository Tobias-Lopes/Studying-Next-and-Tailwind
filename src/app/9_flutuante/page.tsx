import Image from "next/image"

export default function Aplicacao(){
    return (
        <div className="border p-3">

            <Image
                className="float-left m-2"
                src="/img/cidade.jpg"
                alt="Descrição"
                width={200}
                height={200} 
            />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi iure illo ad, aspernatur tempora laboriosam cupiditate, 
                saepe dolor explicabo consequuntur ut soluta minus provident, 
                nemo numquam similique modi. Quas, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi iure illo ad, aspernatur tempora laboriosam cupiditate, 
                saepe dolor explicabo consequuntur ut soluta minus provident, 
                nemo numquam similique modi. Quas, placeat.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi iure illo ad, aspernatur tempora laboriosam cupiditate, 
                saepe dolor explicabo consequuntur ut soluta minus provident, 
                nemo numquam similique modi. Quas, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi iure illo ad, aspernatur tempora laboriosam cupiditate, 
                saepe dolor explicabo consequuntur ut soluta minus provident, 
                nemo numquam similique modi. Quas, placeat.
            </p>

        </div>
    )
}