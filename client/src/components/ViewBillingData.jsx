import React from "react";

export const BillingItem = ({dt}) => {
    return (
        <div>
            {dt.text}
            {`${dt.completed}`}
        </div>
    )
}