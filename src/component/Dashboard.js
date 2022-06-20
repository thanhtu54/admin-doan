import { AiOutlineDollarCircle, AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai'
function Dashboard(props) {
    return (
        <>
            <h2 id="h2">THỐNG KÊ DOANH SỐ BÁN HÀNG</h2>
            <div className="date">
                <label>Từ ngày :</label>
                <input type="date"></input>
                <label>Đến ngày :</label>
                <input type="date"></input>
                <button>Tìm kiếm</button>
            </div>
            <div className='chart'>
                <div className='order-chart'>
                    <i className='icons'><AiOutlineShoppingCart /></i>
                    <span>Đơn hàng :</span>
                    <span className='number'>275</span>
                </div>
                <div className='delete-order'>
                    <i className='icons'><AiOutlineDelete /></i>
                    <span>Đơn bị hủy :</span>
                    <span className='number'>3</span>
                </div>
                <div className='total-chart'>
                    <i className='icons'><AiOutlineDollarCircle /></i>
                    <span>Doanh thu :</span>
                    <span className='number'>200.000.000</span>
                </div>
            </div>
        </>
    )
}
export default Dashboard;