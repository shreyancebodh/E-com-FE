
const Button = ({children, onClick, className}) => {
  return (
    <span onClick={onClick} className={`bg-blue-600 text-md text-white inline-block py-1.5 px-2 rounded-sm hover:cursor-pointer select-none ${className}`}>{children}</span>
  )
}

export default Button