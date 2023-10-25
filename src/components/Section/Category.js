import React from 'react'
import News from './News'

const Category = (props) => {
  return (
    <>
        <News category={props.category}/>
    </>
  )
}

export default Category
