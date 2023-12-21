'use client'

import { priceFormatter } from '@/lib/utils'
import React, {useEffect, useState} from 'react'

interface CurrencyProps {
    value?: number | string
}

const Currency:React.FC<CurrencyProps> = ({value}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if (!isMounted) {
        return value
    };

  return (
    <div className='font-semibold'>
        {priceFormatter.format(Number(value))}
    </div>
  )
}

export default Currency