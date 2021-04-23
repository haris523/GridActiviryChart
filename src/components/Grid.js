import React, { useEffect, useState,memo } from 'react'
import Cell from './Cell'
import dataSet from '../dataSet.json'

const rows=new Array(20).fill(0)

for(let i=0;i<rows.length;i++){
    rows[i]=new Array(20).fill(0)
}
const Grid = () => {
    const [brojaci,setBrojaci]=useState([])

    const checkCell=()=>{
        let b=0
        let happy=0
        let weird=0
        let data =[]
        for(let k=0;k<dataSet.length;k++){
            if(dataSet[k].happy>=0){
                happy=(dataSet[k].happy*10)+8
            }
            else{
                happy=((dataSet[k].happy*10)+1)*-1
            }
            if(dataSet[k].weird>=0){
                weird=(dataSet[k].weird*10)-1
            }
            else{
                weird=20+((dataSet[k].weird*10)+1)
                console.log('uslo na ')
                console.log(k)
            }
            data.push({
                happy,
                weird
            })
        }
        let finalArrBrojaci=[]
        for(let i=0;i<data.length;i++){
            let postoji=false
            let idx=-1
            for(let j=0;j<finalArrBrojaci.length;j++){
                if(finalArrBrojaci[j].happy===data[i].happy && finalArrBrojaci[j].weird===data[i].weird){
                    postoji=true
                    idx=j
                }
            }
            if(postoji){
                finalArrBrojaci[idx].amount++
            }
            else{
                finalArrBrojaci.push({
                    happy:data[i].happy,
                    weird:data[i].weird,
                    amount:1
                })
            }
        }
        setBrojaci([...finalArrBrojaci])
        console.log('data: ',finalArrBrojaci)
    }
    useEffect(()=>{
        checkCell()
    },[])
    return (
        <div>
           {rows.map((row,i)=>{
               return <div style={{flexDirection:'row',width:20*50,display:'flex'}} key={i}>
                   {row.map((_,j)=>{
                       return <Cell key={j} i={i} j={j} brojaci={brojaci}/>
                   })}
               </div>
           })}
        </div>
    )
}

export default memo(Grid)
