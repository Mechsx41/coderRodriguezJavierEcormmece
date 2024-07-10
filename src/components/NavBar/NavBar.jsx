import { CartWidget } from "../CartWidget/CartWidget"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function NavBar (){ 
    return(
<>
<nav className="navbar">
    <a href="" className="logoName"> <img src="src/assets/img/icons8-jira.svg" className="logo" alt="logo"/><h3>WindOS</h3></a>
    <div className="navbar-center">
        <a href="">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#0f172a"} fill={"none"}>
    <path d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
             </svg>
         </a>
    </div>
    <div className="background-image"></div>
    <div className="navbar-right">
    <li className="navbar-item">
          Servicios
          <ul className="dropdown-menu">
            <li className="dropdown-item list1">Productos</li>
            <li className="dropdown-item list2">Asistencia</li>
            <li className="dropdown-item list3">Dudas</li>
          </ul>
        </li>
        <a href="">
            <CartWidget />
         <span>1</span>
        </a>
        <button className="btnBlack">
            <a className="Bold" href="">Sign in</a>
        </button>
    </div>
</nav>
</>
)
}
export default NavBar