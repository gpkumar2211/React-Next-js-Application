"use client"
import Accordion from 'react-bootstrap/Accordion';
import data from './data.json'
import { Fragment } from 'react';
function BasicExampleAccordion({data,title}) {
  return <Fragment>
    <h1>{title}</h1>
    <Accordion defaultActiveKey="0">
        {
            data.map(({heading,content},ind)=>{
                return <Accordion.Item key={`accItem_${ind}`} eventKey={ind}>
                <Accordion.Header>{heading}</Accordion.Header>
                <Accordion.Body>
                    {content}
                </Accordion.Body>
            </Accordion.Item>
            })
        };
    </Accordion>
    </Fragment>
}

export default BasicExampleAccordion;