import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion } from 'react-bootstrap';

const FAQ = props => {
    const { ques, ans, id, link, click, here } = props.faq;
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey={id}>
                    <Accordion.Header>
                        {/* <FontAwesomeIcon className="mx-2" icon={faPlayCircle} /> */}
                        <span className="fs-5">{ques}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p>{ans}</p>
                            <p>
                                <a target="_blank" href={link} rel="noreferrer">
                                    {click}
                                </a>{' '}
                                {here}
                            </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
