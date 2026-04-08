import React from 'react'
import TargetCursor from './../components/TargetCursor';

const Target = () => {
    return (
        <div>
            <TargetCursor
                spinDuration={2.4}
                hideDefaultCursor
                parallaxOn
                hoverDuration={0.2}
            />

            <h1>Hover over the elements below</h1>
            <button className="cursor-target">Click me!</button>
            <div className="cursor-target">Hover target</div>
        </div>
    )
}

export default Target