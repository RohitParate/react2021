import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container">

                <div className="py-4">
                    <h1> Contact Page</h1>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputPassword1">Query</label>
                            <input type="text" className="form-control my-1" id="exampleInputPassword1" placeholder="Type your query" />
                        </div>
                        {/* <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div> */}
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
