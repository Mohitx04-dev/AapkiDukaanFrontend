import React from "react";
import { Link } from "react-router-dom";
const Dummy = [
    {
        Id : "324",
        Date : "24/3/20",
        Amt :5435
    },
    {
        Id : "324",
        Date : "24/3/20",
        Amt :5435
    },
    {
        Id : "324",
        Date : "24/3/20",
        Amt :5435
    }
]
function OrderHistory() {
  return (
    <div>
        <p className="text-left text-2xl mb-5">Order History</p>
      <table class="table-auto shadow overflow-hidden sm:rounded-md p-2 text-black text-opacity-80 min-w-full">
        <thead>
     
          <tr>
            <Link to="#"><th>OrderId</th></Link>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {
            Dummy.map(el=>
                {
                    return (
                        <tr>
                        <Link to={"/OrderHistory/"+el.Id}><th className="underline text-theme">{el.Id}</th></Link>
                        <th>{el.Date}</th>
                        <th>{el.Amt}</th>
                        </tr>
                    )
                }
                )
        }
         
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
