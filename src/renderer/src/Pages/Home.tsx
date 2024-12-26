import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col">
      Home
      <Link to="/markdown">go</Link>
    </div>
  )
}

export default Home
