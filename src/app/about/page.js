import BasicExampleAccordion from '@/Accordion/Accordion'
import { AccordianMine } from '@/Accordion/AccodionMine'
import React from 'react'
import data from './data.json'
const About = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>About</h1>
            <AccordianMine data={data.players} title="players"/>
            <BasicExampleAccordion data={data.students} title="students"/>
            <BasicExampleAccordion data={data.players} title="players"/>
        </div>
    )
}

export default About
 