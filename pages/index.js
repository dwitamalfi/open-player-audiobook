import Image from 'next/image'
import { Inter } from 'next/font/google'
import { books, booksPopular } from '@/utils'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log("book",books)
  const imageStyle = {
    height: '60%',
    width: '100%',
    borderRadius: '5px'
  }
  const imageStyleGrid = {
    height: '60%',
    width: '100%',
    borderRadius: '5px',
    margin: '10px'
  }
  return (
    <>
    <div className='content item-center p-8 h-full'>
      <div className='container-card-audiobook' id='newest-section'>
        <div className='flex flex-col'>
          <span className='section-name-audiobook'><b>Audiobook Terbaru</b></span>
          <div className='container-card-audiobook-sm'>
            <div className='card-audiobook'>
                {books.map((item,index)=>{
                  return(
                    <Link className='max-w-xs card-audiobook-title ' key={index} href='#'>
                      <Image src={item.image} width='100' height='60' style={imageStyle} alt={item.title} ></Image>
                        {/* <img className='card-audiobook-image ' src={item.image}></img> */}
                          <div className='card-audiobook-caption'>
                            {item.title}
                              <span className='card-audiobook-desc'>{item.description.substring(0,20)}</span>
                          </div>
                    </Link>)
                })}
                </div>
          </div>
          </div>
      </div>
      <div className='container-card-audiobook' id='popular-section'>
        <div className='flex flex-col'>
          <span className='section-name-audiobook'><b>Audiobook Terpopuler</b></span>
          <div className='container-card-audiobook-sm'>
            <div className='card-audiobook'>
                {booksPopular.map((item,index)=>{
                  return(
                    <Link className='max-w-xs card-audiobook-title ' key={index} href='#'>
                      <Image src={item.image} width='100' height='60' style={imageStyle} alt={item.title} ></Image>
                        {/* <img className='card-audiobook-image ' src={item.image}></img> */}
                          <div className='card-audiobook-caption'>
                            {item.title}
                              <span className='card-audiobook-desc'>{item.description.substring(0,20)}</span>
                          </div>
                    </Link>)
                })}
                </div>
          </div>
          </div>
      </div>
      <div className='container-card-audiobook' id='andalan-section'>
          <div className='flex flex-col'>
            <span className='section-name-audiobook'><b>Audiobook Andalan Dimulai</b></span>
            <div className='container-card-audiobook-sm'>
              <div className='container-card-audiobook-grid'>
                  {booksPopular.map((item,index)=>{
                    return(
                      // <div className='flex'>
                        <Link className='max-w-xs card-audiobook-grid-flex' key={index} href='#'>
                          <Image src={item.image} width='100' height='100' style={imageStyleGrid} alt={item.title} ></Image>
                            {/* <img className='card-audiobook-image ' src={item.image}></img> */}
                              <div className='card-audiobook-caption'>
                                {item.title}
                                  <span className='card-audiobook-desc'>{item.description.substring(0,20)}</span>
                              </div>
                        </Link>
                      // </div>
                     )
                  })}
                  </div>
            </div>
            </div>        
      </div>
    </div>
    </>
  )
}
