import React from 'react'

const AddNewTool = () => {

  

  return (
    
    <div className="container " style={{backgroundImage:"url('/hhh.jpg')", minHeight:'100vh',marginTop:'50px',padding:"5px"}}>
      <div className="row d-flex justify-content-center align-items-center " style={{minHeight:'90vh'}}>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter description"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="data">Data:</label>
              <input
                type="text"
                className="form-control"
                id="data"
                placeholder="Enter data"
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="formula">Formula:</label>
              <input
                type="textArea"
                className="form-control"
                id="formula"
                placeholder="Enter formula"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const ManageTools = () => {
  return (
    <div>
      <AddNewTool />

      {/* card row design */}

    </div>
  )
}

export default ManageTools