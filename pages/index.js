import Image from 'next/image'
import { Inter } from 'next/font/google'
import { books } from '@/utils'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log("book",books)
  return (
    <>
    <div className='content w-4/5 item-center p-8 h-full'>
      <div className='container-card-audiobook'>
        <div className='flex flex-col'>
          <span><b>Audiobook Terbaru</b></span>
          <div className='container-card-audiobook-sm'>
            <div className='card-audiobook'>
                {books.map((item,index)=>{
                  return(
                    <a className='max-w-xs card-audiobook-title '>
                        <img className='card-audiobook-image ' src={item.image}></img>
                          <div className='card-audiobook-caption'>
                            {item.title}
                              <span className='card-audiobook-desc'>{item.description.substring(0,20)}</span>
                          </div>
                    </a>)
                })}
                </div>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}
