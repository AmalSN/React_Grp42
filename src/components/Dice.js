import React from 'react'
import snk from './SnakeandLadder.module.css'

const Dice = ({num}) => {
  return (
    <div className={`${snk.dice} ${num===1?"mx-auto dce1":"dce1"}`} id={num===1?snk.dice1:snk.dice2} style={{width: 100+"px", height: 100+"px"}}>
                        <div className={`${snk.side} one`}>
                            <div className={`${snk.dot} ${snk.one1}`}></div>
                        </div>
                        <div className={`${snk.side} two`}>
                            <div className={`${snk.dot} ${snk.two1}`}></div>
                            <div className={`${snk.dot} ${snk.two2}`}></div>
                        </div>
                        <div className={`${snk.side} three`}>
                            <div className={`${snk.dot} ${snk.three1}`}></div>
                            <div className={`${snk.dot} ${snk.three2}`}></div>
                            <div className={`${snk.dot} ${snk.three3}`}></div>
                        </div>
                        <div className={`${snk.side} four`}>
                            <div className={`${snk.dot} ${snk.four1}`}></div>
                            <div className={`${snk.dot} ${snk.four2}`}></div>
                            <div className={`${snk.dot} ${snk.four3}`}></div>
                            <div className={`${snk.dot} ${snk.four4}`}></div>
                        </div>
                        <div className={`${snk.side} five`}>
                            <div className={`${snk.dot} ${snk.five1}`}></div>
                            <div className={`${snk.dot} ${snk.five2}`}></div>
                            <div className={`${snk.dot} ${snk.five3}`}></div>
                            <div className={`${snk.dot} ${snk.five4}`}></div>
                            <div className={`${snk.dot} ${snk.five5}`}></div>
                        </div>
                        <div className={`${snk.side} six`}>
                            <div className={`${snk.dot} ${snk.six1}`}></div>
                            <div className={`${snk.dot} ${snk.six2}`}></div>
                            <div className={`${snk.dot} ${snk.six3}`}></div>
                            <div className={`${snk.dot} ${snk.six4}`}></div>
                            <div className={`${snk.dot} ${snk.six5}`}></div>
                            <div className={`${snk.dot} ${snk.six6}`}></div>
                        </div>
                    </div>
  )
}

export default Dice
