import React from 'react'
import { useParams } from "react-router-dom"

export default function Collection() {
    let { slug } = useParams();
    return (
        <div>Collection {slug}</div>
    )
}
