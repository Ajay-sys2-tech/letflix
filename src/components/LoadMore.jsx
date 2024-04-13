'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Results from './Results';
import getMovie from '@/app/action';

let page = 2;
export default function LoadMore({genre, oldData}) {
    const { ref, inView } = useInView();
    const [ data, setData ] = useState([]);
    
    useEffect( () => {
        if(inView){
            getMovie(genre, page).then((res) => {
                setData([...data, ...res]);
                page++;
            })
        }
       
    }, [inView, data, genre])

  return (
    <>  
        <Results results={data}/>
        <div ref={ref} className='flex justify-center'>
            <Image src={`/spinner.svg`}  width={100} height={100} alt='laoding'/>
        </div>
    </>
   
  )
}
