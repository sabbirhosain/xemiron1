import React from 'react'
import CounterUp from '../../Components/CounterUp/CounterUp'

const BlogDetails = () => {
  return (
    <>
      <h1><CounterUp start={0} end={100} duration={5} /></h1>
    </>
  )
}

export default BlogDetails