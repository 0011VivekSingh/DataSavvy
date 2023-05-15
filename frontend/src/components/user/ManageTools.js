import React from 'react'

const AddNewTool = () => {
  return (
    <>
    <title>Bootstrap Form</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* Bootstrap CSS */}
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\t\tbody {\n\t\t\tbackground-color: #f8f9fa; /* Set the background color */\n\t\t}\n\t"
      }}
    />
    <div className="container">
      <div className="row justify-content-center">
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
            <div className="form-group">
              <label htmlFor="data">Data:</label>
              <input
                type="text"
                className="form-control"
                id="data"
                placeholder="Enter data"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formula">Formula:</label>
              <input
                type="text"
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
    {/* Bootstrap JS */}
  </>
  

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