import React from 'react';

export const Addtodo = () => {
    (<div className='container my-3'>
        <h3 className='text-center'>Add a Todo</h3>
        <form>

            <div className="mb-3">
                <label for="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form></div>);
};



