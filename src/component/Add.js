function Add(props) {
    return (
        <>
            <h3 id="add-h3">TẠO SẢN PHẨM MỚI</h3>
            <div className="add-product">
                <form>
                    <div>
                        <label>Tên sản phẩm :</label>
                        <input type="text" placeholder="Nhập tên sản phẩm" name="name" />
                    </div>
                    <div>
                        <label>Giá sản phẩm :</label>
                        <input type="text" placeholder="Nhập giá sản phẩm" name="price" />
                    </div>
                    <div>
                        <label>Chọn màu sản phẩm :</label>
                        <select>
                            <option value="Đà Nẵng">Trắng</option>
                            <option value="Hà Nội">Xanh</option>
                            <option value="Hồ Chí Minh">Xám</option>
                        </select>
                    </div>
                    <div>
                        <label>Chọn hãng sản phẩm :</label>
                        <select>
                            <option value="Đà Nẵng">Samsung</option>
                            <option value="Hà Nội">Apple</option>
                            <option value="Hồ Chí Minh">Xiaomi</option>
                            <option value="Hồ Chí Minh">Oppo</option>
                            <option value="Hồ Chí Minh">Huawei</option>
                        </select>
                    </div>
                    <div>
                        <label>Màn hình</label>
                        <input type="text" placeholder="Nhập thông số màn hình" name="monitor" />
                    </div>
                    <div>
                        <label>Camera trước :</label>
                        <input type="text" placeholder="Nhập thông số camera trước" name="front-camera" />
                    </div>
                    <div>
                        <label>Camera sau :</label>
                        <input type="text" placeholder="Nhập thông số camera sau" name="camera" />
                    </div>
                    <div>
                        <label>Chip xử lý :</label>
                        <input type="text" placeholder="Nhập thông số chip xử lý" name="chip" />
                    </div>
                    <div>
                        <label>Bộ nhớ :</label>
                        <input type="text" placeholder="Nhập thông số bộ nhớ" name="memory" />
                    </div>
                    <div>
                        <label>Dung lượng pin :</label>
                        <input type="text" placeholder="Nhập dung lượng pin" name="memory-pin" />
                    </div>
                    <div>
                        <label>Ảnh sản phẩm :</label>
                        <input type="file" name="image" />
                    </div>
                    <button type="submit" id="but-res">Thêm sản phẩm</button>
                </form>
            </div>
        </>
    )
}
export default Add;