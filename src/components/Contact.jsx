import React from 'react';


const Contact = props => {
    return (
        <section className="mb-4 text-white">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <blockquote className="w-responsive mb-5 offset-1">
                - To Protect lives from chemical fertilizers & pesticides which has dangerous side effects
                <br />
                - To save Environment from pollution, rising temp. ......
            </blockquote>
        
            <div className="row">
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>Pune, Maharashtra, India</p>
                        </li>

                        <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>+ 91 7738252969</p>
                        </li>

                        <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>contactus@llivelong.com</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" />
                                    <label htmlFor="name" className="">Your name</label>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" />
                                    <label htmlFor="email" className="">Your email</label>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                    <label htmlFor="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label htmlFor="message">Your message</label>
                                </div>

                            </div>
                        </div>

                    </form>

                    <div className="text-center text-md-left">
                        <a className="btn btn-primary" >Send</a>
                    </div>
                    <div className="status"></div>
                </div>
            </div>

        </section>
    )
}

export default Contact;