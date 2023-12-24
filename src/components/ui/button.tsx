import { cn } from '@/lib/utils'
import React, {forwardRef} from 'react'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    }

const Button = forwardRef<HTMLButtonElement,ButtonProps> (({
    className, children,disabled, type="button", ...props
},ref)=>{
    return <button ref={ref} className={cn(`
    w-auto
    rounded-full
    bg-black
    border-transparent
    text-white
    font-semibold
    disabled:opacity-50
    disabled:cursor-not-allowed
    font-semibold,
    hover:opacity-75
    transition
    p-2
    `,className)} {...props}>{children}</button>
})

Button.displayName = 'Button'

export default Button