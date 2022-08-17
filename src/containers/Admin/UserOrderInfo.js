import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminNav from "../../components/AdminNav";


// user individual orders Information
export function UserOrderInfo() {
    // navigate to page
   

    // state management
    const { id } = useParams();
    const [orders, setOrders] = useState({});
     const [isLoading, setIsLoading] = useState(true);

    // get order details and api call
    const getOrderInfo = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/order/${id}`);
            setOrders(data);
           
             setIsLoading(false);
            
        } catch (error) {
            console.log(error.message);
        }
    };

    // useEffect use refresh data
    useEffect(() => {
        getOrderInfo();
    }, [id]);

    return (
        <div className="container">
            <AdminNav />
           
            <div className="row table-responsive">
                <table className="text-center table">
                    <thead >
                        <tr>
                            <th>ProductId</th>
                            {/* <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantityty</th>
                            <th>Total</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.product &&
                            orders.product.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{p._id}</td>
                                        {/* <td>{p.name}</td>
                                        <td>{p.price}</td> */}
                                        {/* <td>{p.quantity}</td>
                                        <td>{p.price * p.quantity}</td> */}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}