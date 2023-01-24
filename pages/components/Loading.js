import Image from "next/image";
import Link from "next/link";
import loo from '../../public/Frame.png'

function Loading() {
    return (
        <div className="w-screen h-screen">
            <div className='flex flex-col justify-center items-center h-[90%]'>
                <div className=''>
                    <Image src={loo} alt=''/>
                </div>
            </div>
            <Link href="/main " passHref className='w-screen h-[10%] flex justify-center items-center'>
                <button className='w-[300px] h-[55px] bg-[#CD5152] flex justify-center items-center rounded-md'>Уншиж байна...</button>
            </Link>
        </div>
    );
  }
  
  export default Loading;
  