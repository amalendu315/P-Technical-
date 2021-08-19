import React,{useState} from 'react';

export default function Contact() {
    const[data, setData] = useState({
        fname: " ",
        phone: " ",
        mail: " ",
        message: " ",
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fname}. My mobile number is ${data.phone} and my email is ${data.mail}. Here is my message ${data.message}`);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="mail" value={data.mail} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                        </form>
                        <div className="col-12">
                            <button className="btn btn-outline-primary" onClick={formSubmit} type="submit">Submit form</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}