import React from 'react'

const Produto = () => {
  React.useEffect(() => {
    function handleScroll2(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2)
    }
  })
  return (
    <div style={{ height: '200vh'}}>
        <p>Meu produto</p>
    </div>
  )
}

export default Produto