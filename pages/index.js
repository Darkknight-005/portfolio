
import { GoHome } from 'react-icons/go'
import { BsInfo } from 'react-icons/bs'
import { MdCodeOff } from 'react-icons/md'
import { ImDownload } from 'react-icons/im'
import { FaGitSquare } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { TbBrandDiscord } from 'react-icons/tb'
import Link from 'next/link';
import Head from 'next/head';
// components
import Main from '../components/main';
import Menu from '../components/menu'
// image import

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-base bg-blue-300" id='app'>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className=''>
        <ul className='gap-y-3 text-green-500 grid text-xl fixed right-0 top-1 z-10 py-2' id='menu'>
          <Link href='/#home'>
            <a className='p-1'>
              <Menu Icon={GoHome} Title='Home' />
            </a>
          </Link>
          <Link href='/#about'>
            <a className='p-1'>
              <Menu Icon={BsInfo} Title='About' />
            </a>
          </Link>
          <Link href='/#project'>
            <a className='p-1'>
              <Menu Icon={MdCodeOff} Title="Project's" />
            </a>
          </Link>
          <Link href='/#'>
            <a className='p-1'>
              <Menu Icon={ImDownload} Title="Resume" />
            </a>
          </Link>
        </ul>
      </div>
      <div>
        <ul className='gap-y-4   text-green-500 fixed transition-all duration-700 left-3 bottom-3 grid z-10 py-2 text-xl' id='social'>

          <a href='https://github.com/darkknight-005' target='__blank'>  <Menu Icon={FaGitSquare} Title='Darkknight-005' Name='github.com' /> </a>
          <Link href='/#'>
            <a>  <Menu Icon={BiMailSend} Title="Gmail" Name='gmail' /> </a>
          </Link>
          <Link href='/#'>
            <a>  <Menu Icon={TbBrandDiscord} Title="Discord" Name='Discord' /> </a>
          </Link>
        </ul>
      </div>

      <Main />
    </div>
  );
}

export default App;
