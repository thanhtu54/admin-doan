import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
function Profile(props) {
    return (
        <>
            <div className="function">
                <div className="new-profile">
                    <div>
                        <img id='ava1' src={require("../assets/tuphan.jpg")}></img>
                    </div>
                    <div className="profile">
                        <h3>Thông tin tài khoản</h3>
                        <form>
                            <div>
                                <label>Tên đăng nhập:</label>
                                <input type="text" placeholder="Nhập tên đăng nhập" name="user" />
                            </div>
                            <div>
                                <label>Mật khẩu:</label>
                                <input type="text" placeholder="Nhập mật khẩu" name="password" />
                            </div>
                            <div>
                                <label>Nhập lại mật khẩu:</label>
                                <input type="text" placeholder="Nhập lại mật khẩu" name="repassword" />
                            </div>
                            <div>
                                <label>Họ và tên:</label>
                                <input type="text" placeholder="Nhập họ và tên" name="name" />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="text" placeholder="Nhập Email" name="email" />
                            </div>
                            <div>
                                <label>Số điện thoại:</label>
                                <input type="text" placeholder="Nhập số điện thoại" name="phone" />
                            </div>
                            <div>
                                <label>Địa chỉ:</label>
                                <input type="text" placeholder="Nhập địa chỉ" name="address" />
                            </div>
                            <div>
                                <label>Avatar:</label>
                                <input type="file" name="avatar" />
                            </div>
                            <Link to="/profile">
                                <button type="submit" className="button-res">Lưu chỉnh sửa</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;