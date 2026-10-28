import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = InputHTMLAttributes<HTMLInputElement> & {

}

export default function FormSubmit(props: Props) {

    const { className } = props
    return (
        <input type="submit"
            {...props}
            className={clsx(" bg-pink-600 text-white cursor-pointer w-full p-2 uppercase font-black mt-5", className)}
        />
    )
}
