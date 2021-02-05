import { useEffect, useState } from 'react'

import './index.scss'
const HouseList = () => {
    const [houseData, setHouseData] = useState([
        {
            title: '襄阳绿地空间站'
        }
    ])
    return (
        <>
            <div className="house-list">
                {
                    houseData.map((item) => (
                        <div className="house-list-li">
                            <div className="house-content">
                                <div className="house-image">
                                    <image src=""></image>
                                </div>
                                <div className="house-text">
                                    <div className="text-item title mb8">
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HouseList