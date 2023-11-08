import React, {useEffect, useRef, useState} from "react"
import Block from "./Block"

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([])

    useEffect(
        () => {
            fetch('https://109.71.9.102:5000/get-recommendations', {
                method: 'GET',
            }).then(resp => resp.json()).then(data => setRecommendations(data))
        }, []
    )

    return (
        <section className="text-gray-600 body-font mt-16 pt-16">
            {recommendations.map(rc => {
                return <Block title={rc[0]} description={rc[1]}/>
            })}
        </section>
    )
}

export default Recommendations
