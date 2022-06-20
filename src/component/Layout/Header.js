import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { AiOutlineHome, AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaRegRegistered } from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';
function Header(props) {
    return (
        <>
            <div className="header">
                <div className="sidetop">
                    <div className="wrapper">
                        <Link to="/"> <img src={require("../../assets/logo.png")}></img></Link>
                        <Link to="/profile">
                            <div className='side-right'>
                                <span>Phan Thanh Tú</span>
                                <img id='avatar' src={require("../../assets/tuphan.jpg")}></img>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <div>
                                    <i><AiOutlineHome /></i>
                                    <span>TỔNG QUAN</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <div>
                                    <i><CgProfile /></i>
                                    <span>TRANG CÁ NHÂN</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div>
                                <Link to="/order">
                                    <i><AiOutlineShoppingCart /></i>
                                    <span>ĐƠN HÀNG</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/add">
                                    <i><MdOutlineAddBox /></i>
                                    <span>THÊM SẢN PHẨM</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link to='/login'>
                                <div>
                                    <i><AiOutlineLogin /></i>
                                    <span>ĐĂNG NHẬP</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;