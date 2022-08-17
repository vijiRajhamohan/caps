import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminNav from "../../components/AdminNav";

const OrdersAdmin = () => {
  const navigate = useNavigate();
  const authToken = window.localStorage.getItem("authToken");

  const [orders, setOrder] = useState({});

  const getorder = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/order", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      setOrder(res.data);
       console.log(res.data);
    } catch {
      console.error(500);
    }
  };
  getorder();

  useEffect(() => {
    getorder();
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="container p-3 m-3 mx-auto d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>OrderId</th>
              <th>ProductName</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>

          <tbody>
            {orders.map &&
              orders.map((data) => {
                return (
                  <tr>
                    <td>{data.userId}</td>
                    <td>{data._id}</td>
                    <td>{data.product[0].name}</td>
                    <td>{data.product[0].category}</td>
                    <td>{data.product[0].quantity}</td>
                    <td>{data.product[0].price}</td>
                    <td>{data.total}</td>
                    <td>Delivered</td>
                    {/* <td>
                      <button
                      className="btn btn-outline-white border-0"
                      onClick={() => navigate("/userorderinfo/" + data.userId)}
                    >
                      <span
                        class="iconify text-info"
                        data-icon="bi:info-circle-fill"
                      ></span>
                    </button>
                    </td> */}
                    
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersAdmin;
