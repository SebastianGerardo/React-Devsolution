const Button = ({ children }) => {
  return (
    <button type="submit" className="w-full bg-[#1976D2] text-white text-sm 
                          tracking-wide p-1 hover:bg-[#1565C0] hover:shadow-md 
                          transition-all duration-150" >
      {children}
    </button>
  )
}

export default Button
