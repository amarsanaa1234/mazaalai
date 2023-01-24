import Image from "next/image";
import logo from '../public/Frame.png'
import deel from '../public/Rectangle 3612.png'
import logo1 from '../public/Lucide Icon.png'
import img1 from '../public/Rectangle 3621.png'
import img2 from '../public/Group.png'
import img3 from '../public/Rectangle 3619.png'
import img4 from '../public/Ellipse 2.png'
import fb from '../public/facebook.png'
import insta from '../public/instagram.png'
import mess from '../public/Subtract.png'
import tiktok from '../public/tik_tok.png'
import group from '../public/Group 523.png'
import icon from '../public/Icon.png'
import { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";

export default function Home() {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadingFunction = async () => {
    try{
      await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-24&sortBy=publishedAt&apiKey=de013d61d2c6460caba4d302f75d7f9b`)
      .then((res) =>
        setItem(res.data.articles)
      )
      setLoading(true)
    } catch(e){
      console.log(e)
    }
  }


  useEffect(() => {
    loadingFunction()
  }, [])
  

  return (
    <>
    {!loading ? 
      <div className="w-screen h-screen">
            <div className='flex flex-col justify-center items-center h-[90%]'>
                <div className=''>
                    <Image src={logo} alt=''/>
                </div>
            </div>
            <Link href="/main " passHref className='w-screen h-[10%] flex justify-center items-center'>
                <button className='w-[300px] h-[55px] bg-[#CD5152] flex justify-center items-center rounded-md'>Уншиж байна...</button>
            </Link>
        </div>
      : <div className="w-screen flex justify-center">
      <div className="w-[90%] flex flex-col items-center">
          <div className="flex justify-center items-center h-[130px]">
              <Image src={logo} className="w-[120px] h-[36px]"/>
          </div>
          <div className="header_title">
              <h1 className="font-bold text-[24px]">Сайн байна уу?</h1>
              <p className="text-[16px] text-gray-500 leading-[17px] mt-5">Та Монголын анхны виртуал дээлийн эзэмшигч боллоо.
                  Монгол өв соёлоо шинэчлэн хадгалж үлдсэн таньд баярлалаа.</p>
          </div>
          <div className="section">
              <div className="relative">
                  <Image src={deel} alt='' className="section_img"/>
                  <div className="w-[330px] flex items-center justify-around absolute top-[5px]">
                      <div className="w-[172px] h-[40px] rounded-3xl flex items-center border-[1px] border-[#a2a2a2] bg-[#a2a2a2] justify-around">
                          <Image src={group} className='w-[30px] h-[30px]'/>
                          <p className="font-bold text-[16px]">MONGOL UUJ 1</p>
                      </div>
                      <div className="section_image_title">
                          <Image src={icon} className='w-[24px]'/>
                      </div>
                  </div>
              </div>
              <div className="p-[25px] text-[14px] font-normal text-[#AAAAAA]">
                  <p>Биет дээлтэй хослуулан эдлэх гоёлын зориулалттай ууж. 
                      Зөв талдаа зөрсөн захтай, наран хормой, хөндлөн ширээстэй 
                      бүсэлхий болон гоёлын бүснээс бүтсэн, мөнгөлөг чимэглэл бүхий энгэртэй ууж.
                      </p>

                  <p className="mt-3">
                  Нүүдэлчин түмэн дээлийг хүндэтгэн дээдлэх болсон шалтгаан нь мөнх өвлийг 
                  давахад нөмөр нөөлөг болж, ертөнцийн хахир хатууд оюун санааны хүч өгч 
                  байсныг билэгдэн хадгалсаар ирсэн. Дээл нь уушги, зүрх, элэг гэх эрүүл 
                  мэндийн дотоод эрхтнийг хамгаалагчийн хувьд хэм хэмжээ хязгаар, цадах, 
                  нөөлөгдөх, хайрлах гэх утгыг илтгэх билэгддэг хувцас болон хөгжжээ. 
                  Иймээс дээлийн зах, өврийг эрх мэдлийн, хормойг хайр энэрлийн, ханцуй ур
                  ухааны билэг тэмдэг хэмээн хэсэгчлэн ёсчлох болсон. Бид дээлийг бэлгэд
                    авбал эн тэнцүү хайрлалцах, түших, нөмөрлөх утга агуулсан бэлэг хэмээн
                    хүндэтгэдэг.

                  </p>
              </div>
          </div>
          <div className="frame">
              <div className="w-[278px] mt-5">
                  <p className="font-bold text-[24px]">Хаана ч хамт явах виртуал өмч</p>
              </div>
              <div className="relative">
                  <Image src={img1}/>
                  <Image src={img2} className='absolute bottom-[4px] left-[9px]'/>
              </div>
              <div className="w-[296px] text-[14px] text-[#AAAAAA] mb-4">
                  <p>Та уг бүтээгдэхүүнийг зөвхөн Hyborg tag-н ашиглан өмсөх 
                      боломжтой. Уг tag-н тусгай код хадгалж байгаа тул та 
                      хүчтэй нугалж гэмтээхгүй байх хэрэгтэй.</p>
              </div>
          </div>
          <div className="frame">
              <div className="w-[278px] mt-5">
                  <p className="font-bold text-[24px]">Дээлээрээ хэрхэн гангарах вэ?</p>
              </div>
              <div className="relative">
                  <Image src={img3}/>
                  <Image src={img4} className='absolute bottom-[9px] left-[9px]'/>
              </div>
              <div className="w-[296px] text-[14px] text-[#AAAAAA] mb-4">
                  <p>Та эзэмшиж буй дээлээ өөрийн бие дээрээ өмсөхийн 
                      тулд AR технологийг ашиглах хэрэгтэй тул та
                      Snapchat аппликэйшинийг татах шаардлагтай.</p>
                  <button className="mt-4 w-[295px] h-[50px] rounded-3xl bg-[#CD5152] flex justify-center items-center">
                      <Image src={logo1}/>
                      <p className="text-white text-[16px] ml-3">Дээл өмсөх</p>
                  </button>
              </div>
          </div>
          <div className="frame">
              <div className="w-[296px] mt-5">
                  <p className="font-bold text-[24px]">Бүү хоцроорой!</p>
              </div>
              <div className="w-[296px] text-[14px] text-[#AAAAAA]">
                  <p>
                      Бидний шинэ бүтээгдэхүүнүүдийн мэдээллийг цаг
                      алдалгүй авахыг хүсвэл имэйл хаягаа бидэнд үлдээгээрэй.
                  </p>
              </div>
              <div className="mb-5">
                  <input type="text" placeholder="Имэйл хаяг" className="rounded-3xl mt-4 w-[295px] h-[50px] pl-[15px] border-none outline-none" />
                  <button className="mt-4 w-[295px] h-[50px] rounded-3xl bg-[#7a3030] flex justify-center items-center">
                      <p className="text-white text-[16px]">Илгээх</p>
                  </button>
              </div>
          </div>
          <div className="footer">
              <div className="footer_logo">
                  <Image src={logo}/>
              </div>
              <div>
                  <ul className="flex gap-4">
                      <li>
                          <Image src={fb}/>
                      </li>
                      <li>
                          <Image src={insta}/>
                      </li>
                      <li>
                          <Image src={mess}/>
                      </li>
                      <li>
                          <Image src={tiktok}/>
                      </li>
                  </ul>
              </div>
              <div className="text-[12px] text-[#BCBCBC] mx-10 text-center">
                  <p>
                      Бүтээгдэхүүний бүх хэсэг оюуны өмчөөр хамгаалагдсан.
                  </p>
                  <p className="uppercase my-6">
                      ХАЙБОРГ ХХК ©2023 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН
                  </p>
              </div>
          </div>
      </div>
  </div>}
  </>
  )
}
