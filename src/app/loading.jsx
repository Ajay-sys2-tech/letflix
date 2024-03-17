import Image from "next/image"

export default function Loading
() {
  return (
    <div className='flex justify-center m-10'>
        <Image width={150} height={150} className='h-46' src='spinner.svg' alt='laoding...' />
    </div>
  )
}
