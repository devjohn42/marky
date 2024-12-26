import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

// const Button = ({ className, type, title }) => {
//   return (
//     <button
//       type={type}
//       className={cn(
//         `${type === 'add' ? 'border-moonstone text-moonstone' : 'border-carmine text-carmine'}`,
//         'font-semibold hover:rounded-[2px] hover:bg-raisin_dark border-[2px] px-3 py-1 duration-200',
//         className,
//       )}
//     >
//       {title}
//     </button>
//   )
// }

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="marky logo" />
      <p className="text-alice font-primary font-bold text-[96px] -translate-x-3">
        arky
      </p>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <div className="w-full h-screen home_bg"></div>
      <div className="w-full h-screen z-10 flex flex-col items-center justify-center gap-4">
        <Logo />
        <span className="text-alice/90 text-sm font-semibold">
          A simple desktop tool for you to practice your markdown skills
        </span>
        <Link to="/markdown" className="mt-3 cursor-pointer">
          <span className="text-alice text-base bg-raisin border border-moonstone px-3 py-2 hover:bg-raisin_dark hover:rounded-md hover:shadow-[#0000004d] hover:shadow-lg duration-300">
            Go to Application
          </span>
        </Link>
      </div>
    </>
  )
}

export default Home
