const Header = () => {
  return (  
    <header className="flex container m-auto justify-between text-white text-2xl p-4 items-center">
        <div>
            <h1>Logo</h1>
        </div>
        <nav>
            <ul className="flex gap-5 text-[1.1rem]">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}   

export default Header