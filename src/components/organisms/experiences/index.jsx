import React from 'react'
import T from 'prop-types'

import Card from 'components/atoms/card'
import Grid from 'components/layout/grid'

import Experience from 'components/molecules/experience'

function Experiences(props) {
    const experiences = props.experiences.map((value) => {
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

    return (
        <Card className='lr-c-card--grey'>
            <Grid.Wrapper className='lr-o-grid--spaced'>
                <Grid.Item>
                    <h1 className="lr-u-text-align-center">{props.title}</h1>
                </Grid.Item>
                <Grid.Item>
                    {experiences}
                </Grid.Item>
            </Grid.Wrapper>
        </Card>
    )
}

Experiences.propTypes = {
    title: T.string.isRequired,
    experiences: T.arrayOf(T.shape({
        ...Experience.propTypes,
        key: T.number.isRequired
    }))
}

export default Experiences;