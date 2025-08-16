import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IconBox } from '@tabler/icons-react';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const currency = '₹';

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    if(!token){
      toast.error("Admin token missing")
      return
    }
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
        toast.success('Status updated')
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="grid grid-cols-1 sm:grid-cols-[0.6fr_2fr_1fr_1fr] gap-4 items-start border rounded p-4">
              <div className="flex items-center">
                <IconBox stroke={2}  className="w-14 h-14 object-contain" />
              </div>

              <div>
                <div className="space-y-1">
                  {order.items?.map((it, i) => (
                    <p key={i} className="text-sm">
                      {it.name} x {it.quantity} {it.size && <span className="text-xs text-gray-500">({it.size})</span>}
                      {i !== order.items.length - 1 && ','}
                    </p>
                  ))}
                </div>
                <p className="mt-2 font-medium">{order.address?.firstname} {order.address?.lastname}</p>
                <p className="text-sm text-gray-600">{order.address?.street}</p>
                <p className="text-sm text-gray-600">{order.address?.city}, {order.address?.state}, {order.address?.country} - {order.address?.pincode}</p>
                <p className="text-sm text-gray-600">Phone: {order.address?.phonenumber}</p>
              </div>

              <div className="text-sm">
                <p>Items: {order.items?.length || 0}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date: {order.date ? new Date(order.date).toLocaleDateString() : 'N/A'}</p>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <p className="font-semibold">{currency}{order.amount}</p>

                <select value={order.status} onChange={(e) => statusHandler(e, order._id)} className="border px-2 py-1 rounded">
                  <option>Order Placed</option>
                  <option>Packing</option>
                  <option>Shipped</option>
                  <option>Out for Delivery</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
