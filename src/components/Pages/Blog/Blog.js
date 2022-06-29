import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row py-5">
                    <div className="col-md-8 offset-md-2 col-xs-12">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                            <Accordion.Body>
                            Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                            <Accordion.Body>
                            Nearly every app requires an authorization system on top of an authentication system. We often need a fine-grained permissions model to allow only specific users to access certain resources while simultaneously restricting access for everyone else. In this tutorial, Toptal Freelance Firebase Developer Joaquin Cid teaches how to build just such a system.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                            <Accordion.Body>
                            Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;