import React from 'react';
import T from 'prop-types';

import Experience from 'components/molecules/experience';

function Experiences(props) {
    return props
        .values
        .map((value) => {
            return (
                <div className='lr-u-soft-bottom' key={value.key}>
                    <Experience
                        timeframe={value.timeframe}
                        title={value.title}
                        subtitle={value.subtitle}
                        body={value.body}/>
                </div>
            )
        })
}

Experiences.propTypes = {
    values: T.arrayOf(T.shape({
        ...Experience.propTypes,
        key: T.number.isRequired
    }))
}

export default Experiences;