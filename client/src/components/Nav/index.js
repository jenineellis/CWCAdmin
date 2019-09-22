import React from "react";
import Login from '../LoginForm/';

function LoginModal() {
    const [show, setShow] = useState(false);
    const handleLoginClose = () => setShow(false);
    const handleLoginShow = () => setShow(true);
}

function Nav(props) {
    return (
        <div>
            {/* Modal stuff here */}
            <div>
                <Button variant="primary" onClick={handleShow}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <div className="modal fade" id="modalLRForm">
                        <Login updateGlobalState={props.updateGlobalState} />
                    </div>
                    <Modal.Footer>
                        <Button className="btn btn-#1B75BB btn-block my-4" id="login" type="submit" onClick={this.loginUser}>Login</Button>
                    </Modal.Footer>
                </Modal>
            </div>
    );
}

export default Nav;
