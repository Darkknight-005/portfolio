import Image from 'next/image'
import React from 'react'
// import Photo from '/coder.gif'
const Main = () => {
    return (
        <main className='w-screen h-screen bg-black/20 snap-y snap-mandatory overflow-y-scroll' id='main'>

            <div className='h-screen snap-start lg:px-14 pb-10 outline-black' id='home'>
                <div className='h-full relative top-[3%] rounded-md flex flex-col items-center justify-center gap-y-4 backdrop-blur-sm backdrop-opacity-60 backdrop-brightness-75 bg-white/30 text-black px-5 '>
                    <h3 className='text-3xl text-red-600 home_h3'>work in progress</h3>
                    <p className='mx-5 '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quaerat voluptatem nihil nam accusamus veritatis suscipit quos ab minus fugiat maxime adipisci dolores, eaque dolorum natus reiciendis, laudantium numquam recusandae?
                    </p>
                </div>
            </div>
            <div className='h-screen snap-start flex items-center flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse rounded-xl lg:px-14' id='about'>
                <div className='h-screen flex justify-center items-center  '>
                    <Image src='/coder.gif' className='rounded-full w-auto h-auto' id='about_gif' width={3000} height={2500}  alt='' />
                </div>
                <div className='h-[60vh]  backdrop-blur-sm backdrop-opacity-90 bg-white/30 text-black flex justify-center items-center sm:rounded-xl lg:rounded-xl p-4 py-2' >
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis accusantium laboriosam quia eius? Nesciunt, voluptatum modi quibusdam consequatur voluptatem harum reprehenderit nihil quaerat molestiae assumenda blanditiis laudantium consectetur quam incidunt cupiditate ducimus? Porro voluptate sint ullam architecto! Ea nobis recusandae iusto sed vero fugiat repellendus sapiente reiciendis id voluptas?</p>
                </div>
            </div>
            <div className='h-screen snap-start' id='project'>
            </div>
        </main>

    )
}

export default Main
