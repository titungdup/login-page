import Image from 'next/image'

const LoginHero = () => {
  return (
    <div className='relative flex-grow hidden md:block'>
      <Image
        fill={true}
        src={'/bg-image.jpg'}
        alt='Man working on the field with machines'
        className='object-cover'
        priority={true}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
      <div className='w-full h-full bg-blue-500 bg-opacity-60 absolute top-0 left-0'></div>
      <div className='flex flex-col justify-center h-full'>
        <div className='py-28 px-10 md:px-16 lg:px-28 relative text-white'>
          <p className='mb-28 tracking-widest uppercase'>JobFind</p>
          <h1 className='text-4xl font-bold mb-8'>Start your journey here</h1>
          <p className='opacity-90 max-w-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            eaque deserunt saepe expedita non officia fuga voluptatibus
            reiciendis cumque veniam? Possimus sint iste nesciunt voluptatum.
            Porro eum ullam iure aspernatur!
          </p>
        </div>
      </div>
    </div>
  )
}
export default LoginHero
