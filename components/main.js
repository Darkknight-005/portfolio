import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
// import Photo from '/coder.gif'
const Main = () => {

    const let_me = ['I am a "F" for web-develpoer','Means front-end web developer','You can scroll with arrow key\'s as well']
    
    return (
        <main className='w-auto h-screen bg-black/20 snap-y snap-mandatory overflow-y-scroll' id='main'>

            <div className='h-screen snap-start lg:pl-14 lg:pr-6  outline-black' id='home'>
                <div className='h-full relative  rounded-md flex flex-col items-center justify-center gap-y-4  px-5 space-y-5 backdrop-blur-lg backdrop-brightness-[0.8] lg:backdrop-blur-none'>
                {/* backdrop-blur-sm backdrop-opacity-60 backdrop-brightness-75 bg-black/70 text-white */}
                    <h3 className='text-3xl text-[#FFc000] brightness-200 home_h3 mx-5 h-1 text-center my-16'>
                        <Typewriter
                        options={{
                            strings: let_me,
                            autoStart:true,
                            loop:true,
                            pauseFor:1500
                        }}
                        />
                    </h3>
                    <p className='mx-5 '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quaerat voluptatem nihil nam accusamus veritatis suscipit quos ab minus fugiat maxime adipisci dolores, eaque dolorum natus reiciendis, laudantium numquam recusandae?
                    </p>
                </div>
            </div>
            <div id='about' >
            <div className='h-screen snap-start flex items-center flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse lg:px-14 light:backdrop-blur-sm dark:bg-gradient-to-tr from-black/40  to-white/40' >
                <div className='h-screen flex justify-center items-center' id='blur_about'>
                    <Image src='/coder.gif' className='rounded-full w-auto h-auto' id='about_gif' width={3000} height={2500}  alt='' />
                </div>
                <div className='h-[60vh] backdrop-opacity-90  dark:lg:backdrop-blur-sm dark:lg:bg-gradient-to-tr from-black  to-transparent flex justify-center items-center sm:rounded-xl lg:rounded-xl p-4 py-2' >
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis accusantium laboriosam quia eius? Nesciunt, voluptatum modi quibusdam consequatur voluptatem harum reprehenderit nihil quaerat molestiae assumenda blanditiis laudantium consectetur quam incidunt cupiditate ducimus? Porro voluptate sint ullam architecto! Ea nobis recusandae iusto sed vero fugiat repellendus sapiente reiciendis id voluptas?</p>
                </div>
            </div>
            </div>
            <div id='project'>
                <div className='h-screen snap-start  bg-gradient-to-tr from-black/80 light:from-black via-transparent to-white/40'>

                </div>
            </div>
        </main>

    )
}

export default Main
