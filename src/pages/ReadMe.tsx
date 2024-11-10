import React from 'react'
import Menu from '../components/Menu'
import Apps from '../components/Apps'
import ReadMeWindow from '../components/ReadMeWindow'

const ReadMe = () => {
    return (
        <div className='relative h-full'>
            <Menu />
            <Apps />
            <ReadMeWindow />
        </div>
    )
}

export default ReadMe