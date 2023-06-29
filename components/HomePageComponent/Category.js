import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = props => {
    const { title, id, description } = props.cat;
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey={id}>
                    <Accordion.Header>
                        <FontAwesomeIcon className="mx-2" icon={faPlayCircle} />
                        <span className="fs-5">{title}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p>{description}</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Category;
