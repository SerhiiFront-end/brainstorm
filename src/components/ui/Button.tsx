import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const button = cva(['font-bold', 'hover:ease-linear', 'hover:duration-500'], {
	variants: {
		intent: {
			primary: ['bg-[#B7E4C7]', 'hover:bg-slate-500', 'text-[#95D5B2]'],
			secondary: ['bg-black', 'text-[#1B4332]', 'hover:bg-gray-100'],
		},
		size: {
			small: ['rounded', 'text-sm', 'py-1', 'px-2'],
			medium: ['rounded-md', 'text-base', 'py-2', 'px-4'],
		},
	},
	compoundVariants: [{ intent: 'primary', size: 'medium' }],
	defaultVariants: {
		intent: 'primary',
		size: 'medium',
	},
})

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
	className,
	intent,
	size,
	...props
}) => <button className={button({ intent, size, className })} {...props} />
