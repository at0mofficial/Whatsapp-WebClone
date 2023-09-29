import Chatwindow from '@/components/Chatwindow'
import Leftsidebar from '@/components/Leftsidebar'


export default function Home() {
  return (
    <>
    <div className=' bg-[#0c1317] h-screen p-[19px]'>
    <main className='flex mx-auto max-w-[1600px]'>
  
    <div className='w-[45%]'>
    <Leftsidebar />
    </div>
    <div className='w-[55%]'>
    <Chatwindow />
    </div>
    </main>
    </div>
    
    
    </>
  )
}
