import React from 'react'
import BasicExampleAccordion from '@/Accordion/Accordion'
import { AccordianMine } from '@/Accordion/AccodionMine'
import data from './data.json'
const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Home</h1>
            <BasicExampleAccordion data={data} title="My data"/>
            <AccordianMine data={data} title="players"/>
        </div>
    )
}

export default Home
