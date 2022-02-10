// import React from 'react';
import { useState } from "react"
import React from "react";
import { useDispatch } from "react-redux";
import { MDBInput } from "mdbreact";

import { addTodo } from "../action";


const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("Title And Description Should Not Be Empty")
        }

        else {
            // addTodo(title, desc);
            // dispatch(addTodo(title,desc))
            props.addTodo(title,desc)
            

            setTitle("")
            setDesc("")
        }


    }
    const inputStyle = {
        backgroundColor: "#EEEEEE",
        // height:"10px"

    }
    // return (<div className='container my-3'>
    //     <h3 className='text-center'>Add a Todo</h3>
    {/* <form onSubmit={submit}>

            <div className="mb-3">
                <label for="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div> */}
    {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
    {/* <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form></div>); */}

    return (
        <form onSubmit={submit}>
            <div className="form-group container" style={inputStyle}>
                <h2 className="text-center">Add a Todo</h2>
                <h3 className="container">Title</h3>
                <MDBInput className="container text-center" size="lg" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <h3>Description</h3>
                <MDBInput className="container"  size='lg' value={desc} onChange={(e) => setDesc(e.target.value)}/>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>

                {/* <MDBInput label="Small input" size="sm" />  */}
            </div>
        </form>
    )
};


export default AddTodo;