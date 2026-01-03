import React from 'react'

// styles
import './m-pages-headers.css'
import './d-pages-headers.css'

const PagesHeaders = (props) => { 

    return (
        <div className='title-container'>
            <h2 className='title'>
                <span>{props.titleCol1}
                <br/>
                </span>{props.titleCol2}
            </h2>
            <h3 className='sub-title'>
                {props.subTitle1}
            </h3>
            <div className='underline under1'></div>
            <div id='para' className='paragraph'>
                {props.text1}
                {props.br1}
                {props.text2}
                {props.br2}
                {props.text3}
                {props.br3}
                {props.text4}
                {props.br4}
                {props.text5}
            </div>
            <br/>
        </div>
    )        
}

export default PagesHeaders