
interface FormErrorProps {
    children: React.ReactNode
}

export default function FormError({ children }: FormErrorProps) {
    return (
        <p className='border-2
                      p-2 
                      font-bold 
                      bg-red-100
                      border-red-600
                      text-red-600
                      text-sd
                      '>{children}</p>
    )
}
