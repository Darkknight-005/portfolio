import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
// import Photo from '/coder.gif'
const Main = () => {

    const let_me = ['I am a web-develpoer', 'Means front-end web developer', 'coding is fun', 'Is it']
    const btn = ['hello', 'hi', 'click', 'bye', 'challo']

    return (
        <main className='w-auto h-screen bg-black/20 snap-y snap-mandatory overflow-y-scroll' id='main'>

            <div id='home'>
                <div className='h-screen snap-start lg:pl-14   bg-gradient-to-tr from-black/80 light:from-black via-transparent to-white/40' >
                    <div className='h-full relative rounded-md backdrop-blur-lg flex flex-col items-center justify-around gap-y-4  px-5 space-y-5 sm:backdrop-blur-lg backdrop-brightness-[0.8] lg:backdrop-blur-none'>
                        {/* backdrop-blur-sm backdrop-opacity-60 backdrop-brightness-75 bg-black/70 text-white */}
                        <h3 className='text-3xl text-yellow-500 brightness-200 home_h3 mx-10  text-center h-1 '>
                            <Typewriter
                                options={{
                                    strings: let_me,
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 1500
                                }}
                            />
                        </h3>
                        {/* <div></div> */}
                        <p className='ml-10 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quaerat voluptatem nihil nam accusamus veritatis suscipit quos ab minus fugiat maxime adipisci dolores, eaque dolorum natus reiciendis, laudantium numquam recusandae?
                        </p>
                    </div>
                </div>
            </div>
            <div id='about' >
                <div className='
                h-screen snap-start flex items-center justify-center sm:justify-start flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse lg:px-5 dark:lg:text-white  dark:bg-gradient-to-tr from-black/80 via-transparent to-white/40 
                ' >

                    <div className='lg:h-[60vh] h-full lg:w-1/2 sm:backdrop-blur-sm bg-black/40 backdrop-opacity-90  dark:lg:backdrop-blur-sm dark:lg:bg-gradient-to-tr from-black  to-transparent flex justify-center items-center sm:rounded-xl lg:rounded-xl p-4 py-2' >
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis accusantium laboriosam quia eius? Nesciunt, voluptatum modi quibusdam consequatur voluptatem harum reprehenderit nihil quaerat molestiae assumenda blanditiis laudantium consectetur quam incidunt cupiditate ducimus? Porro voluptate sint ullam architecto! Ea nobis recusandae iusto sed vero fugiat repellendus sapiente reiciendis id voluptas?</p>
                    </div>
                </div>
            </div>
            <div id='project'>
                <div className='h-screen snap-start  bg-gradient-to-tr from-black/80 light:from-black via-transparent to-white/40'>
                    <div className='h-full flex flex-col gap-6 items-center justify-center'>

                        {
                            btn.map((k) => {
                               <button className='px-4 py-3 w-72  text-black rounded-md border-r-purple-500 border border-l-purple-500 border-t-purple-400 border-b-purple-400 '>
                                    {k}
                                </button>
                            })
                        }




                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main
