function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
<>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal fade" id="modalLRForm.Group" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog cascading-modal" role="document">
                            <div className="modal-content">
                                <div className="modal-c-tabs">
                                    <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#panel1" id="loginTab" role="tab"><i className="fas fa-user mr-1"></i>Sign in</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" id="registerTab" href="#panel2" role="tab"><i className="fas fa-user-plus mr-1"></i>Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade in show active" id="panel1" role="tabpanel">
                                            <Form.Group className="text-center border border-light p-5" action="#!">
                                                <div className="h4 mb-4">Sign in</div>
                                                <InputGroup type="email" id="emaillogin" className="Form.Group-control mb-4" placeholder="E-mail">
                                                    <InputGroup type="password" id="passlogin" className="Form.Group-control mb-4" placeholder="Password">
                                                        <div className="d-flex justify-content-around">
                                                            <div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <InputGroup type="checkbox" className="custom-control-InputGroup" id="consent">
                                                                        <label className="custom-control-label" for="consent">Remember me</label>
</div>
                                                                </div>
                                                                <div>
                                                                    <a href="#">Forgot password?</a>
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-#1B75BB btn-block my-4" id="login" type="submit">Log in</button>
                                                            <div>Not a member?
<a id="register" href="#">Create a new account now!</a>
                                                            </div>
</Form.Group>
</div>
                                                    <div className="tab-pane fade" id="panel2" role="tabpanel">
                                                        <Form.Group className="text-center border border-light p-5" action="#!">
                                                            <div className="h4 mb-4">Create a new account</div>
                                                            <div className="Form.Group-row mb-4">
                                                                <div className="col">
                                                                    <InputGroup type="text" id="firstName" className="Form.Group-control" placeholder="First name">
</div>
                                                                    <div className="col">
                                                                        <InputGroup type="text" id="lastName" className="Form.Group-control" placeholder="Last name">
</div>
                                                                    </div>
                                                                    <InputGroup type="email" id="email" className="Form.Group-control mb-4" placeholder="E-mail">
                                                                        <InputGroup type="password" id="password" className="Form.Group-control mb-4" placeholder="Password" aria-describedby="defaultRegisterForm.GroupPasswordHelpBlock">
                                                                            <InputGroup type="password" id="rep-password" className="Form.Group-control mb-4" placeholder="Re-enter Password" aria-describedby="efaultRegisterForm.GroupPasswordHelpBlock">
                                                                                <InputGroup type="text" id="birthdate" className="Form.Group-control mb-4" placeholder="00/00/0000" aria-describedby="defaultRegisterForm.GroupBirthdateHelpBlock">
                                                                                    <div className="custom-control custom-checkbox">
                                                                                        <InputGroup type="checkbox" className="custom-control-InputGroup" id="check1">
                                                                                            <label className="custom-control-label" for="check1">Check here to for email updates on new products</label>
                                                                                            <hr>
                                                                                                <div>Please visit "My Profile" to create your customized experience.</div>
</div>
                                                                                            <button className="btn my-4 btn-block" type="submit" id="signup">Sign in</button>
</Form.Group>
                                                                                    </div>
</div>
</div>
</div>
</div>
                                                                </div>
                                                                <div className="centered loginbox">
                                                                    <a href="" className="btn btn-rounded btn-lgmy-3" id="index-login" data-toggle="modal" data-target="#modalLRForm.Group">WELCOME</a>
                                                                </div>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
</Button>
                                                                    <Button variant="primary" onClick={handleClose}>
                                                                        Save Changes
</Button>
                                                                </Modal.Footer>
</Modal>
</>
                                                        );
                                                        }
                                                        
                                                        render(
<Example />);