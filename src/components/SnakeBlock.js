import React from 'react'
import snk from './SnakeandLadder.module.css'

const SnakeBlock = ({cnt}) => {

  return (
    
        
        <div className={`${snk.block} block${cnt}`}>
            {cnt}
            <span className= {`${snk.piece} ${snk.redpiececolor}`}></span>
            <span className= {`${snk.piece} ${snk.bluepiececolor}`}></span>
            <span className= {`${snk.piece} ${snk.yellowpiececolor}`}></span>
            <span className= {`${snk.piece} ${snk.greenpiececolor}`}></span>
        </div>


  )
}

export default SnakeBlock
