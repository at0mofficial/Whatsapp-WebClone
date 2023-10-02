import Chatwindow from '@/components/Chatwindow'
import GetWhatsapp from '@/components/GetWhatsapp'
import Leftsidebar from '@/components/Leftsidebar'


export default function Home() {
  return (
    <>
    <main className='flex h-[calc(100vh-38px)] mt-[19px] mx-auto max-w-[1600px] min-h-[512px] bg-[#111b21]'>
  
    <div className='basis-[30%] max-w-[30%]'>
    <Leftsidebar />
    </div>
    <div className='grow bg-[#202c33] relative'>
    {/* <Chatwindow /> */}
    <GetWhatsapp />
    </div>
    </main>
    </>
  )
}
