import React, { useEffect, useState,memo } from 'react'
import dataSet from '../dataSet.json'

const processBackgroundColor=(i,j,brojaci)=>{
    let foundIdx=-1
    for(let k=0;k<brojaci.length;k++){
        if(brojaci[k].happy===i && brojaci[k].weird===j)
        {
            foundIdx=k
            break
        }
    }

    switch(brojaci[foundIdx]?.amount){
        case 1: return '#0473B6'
        case 2: return '#0081A1'
        case 3: return '#008281'
        case 4: return '#4DA652'
        case 5: return '#89C643'
        case 6: return '#D8CE14'
        case 7: return '#E0BE01'
        case 8: return '#F4B011'
        case 9: return '#EC8919'
        case 10: return '#ED6C1F'
        case 11: return '#E94521'
        case 11: return '#E72223'
        case 11: return '#262626'
        case 12: return '#0D0D0D'
        default: return '#243885'
    }
}
 

const Cell = ({i,j,brojaci}) => {
    return (
        <div style={{height:50,width:50,backgroundColor:processBackgroundColor(i,j,brojaci),borderColor:'white',borderWidth:1,borderStyle:'solid'}}>
            {/* <span style={{color:'white'}}>{i},{j}</span> */}
        </div>
    )
}

export default memo(Cell)
