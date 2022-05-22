import './appHeader.scss';
import logo from '../../resources/svg/Logo.svg'


const AppHeader = () => {
    return (
        <header>
        <div className="container">
            <div className="header">
                <nav className="header__nav">
                
                   <img className="header__nav__img" src={logo} alt="vel" />
                
                <div className="header__nav__btn">
                   <button className="btn">Users</button>
                    <button className="btn">Sign up</button>
                </div>
                
                </nav>
            <div className="header__about">
                <h1 className="header__about__header">Test assignment for front-end developer</h1>
                <h3 className="header__about__subheader">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</h3>
                 <button className="header__about__btn btn">Sign up </button>

            </div>
            </div>
           
        </div>
    </header>
    )
}

export default AppHeader;