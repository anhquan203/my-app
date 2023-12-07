import React from 'react'
import style from './TableScore.module.css'

type Props = {
    text?: string;
    textRight?: string;
    textLeft?: string;
    textscore?: string;
    imgLeft?: string;
    imgRight?: string;
    
}

export default function TableScore({text='0',textLeft='',textRight='',textscore='0:0',imgLeft='',imgRight=""}: Props) {
  return (
    <div className={style.container}>
       <div className={style.headerCard}>
            <div className={style.textMinutes}>
                {text}
            </div>
            <div className={style.vector}>
                <div className={style.icon}>
                    ...
                </div>
            </div>
       </div>
       <div className={style.containerBody}>
            <div className={style.textTeam}>
                   <p> {textLeft} </p>
                   <img className={style.logo} src={imgLeft}alt="" />
            </div>
            <div className={style.textItemScore}>
                    {textscore}
            </div>
            <div className={style.textTeam}>
                  
                   <img  className={style.logo} src={imgRight} alt="" />
                   <p> {textRight}</p>
            </div>
       </div>
    </div>
  )
}