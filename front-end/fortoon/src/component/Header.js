import logo from './img/포툰로고3-removebg-preview.png';

const Header = () => {
    return (
        <header className='header'>
            <div style={
                {display:'flex', 
                justifyContent:'flex-start', 
                width: "100%",
                height: "8vh",
                marginTop:"2vh",
                marginLeft: "1rem",
                }}> 
                
                <img style={{height:"70px"}}  src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header;