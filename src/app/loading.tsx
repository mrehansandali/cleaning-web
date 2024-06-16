import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <>
        <div className="loader_container">
            <span className="loader"></span>
        </div>
    </>
  )
}

export default loading