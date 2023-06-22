import React, { useEffect, useState } from 'react';
import app_config from '../../config';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';

const AddNewTool = () => {
  const [inputs, setInputs] = useState([
    {
      name: 'Input Range',
      category: 'Input',
      type: 'array',
      description: 'values',
      placeholder: 'Enter Range Here',
      required: true
    }
  ]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const { apiUrl } = app_config;

  const toolForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      type: '',
      formula: '',
      user: currentUser._id,
      createdAt: new Date()
    },
    onSubmit: async (values) => {
      values.inputs = inputs;
      try {
        const response = await fetch(`${apiUrl}/tool/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        console.log(response.status);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  });

  const addInput = () => {
    setInputs([...inputs, { name: '', category: '', type: '', description: '', placeholder: '', required: false }]);
  };

  return (
    
    <div className="container " style={{backgroundImage:"url('/hhh.jpg')", minHeight:'100vh',marginTop:'50px',padding:"5px"}}>
      <div className="row d-flex justify-content-center align-items-center " style={{minHeight:'90vh'}}>
        <div className="col-md-6">
        <form onSubmit={toolForm.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control mb-3" id="name" onChange={toolForm.handleChange} value={toolForm.values.name} placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="description"
                  onChange={toolForm.handleChange}
                  value={toolForm.values.description}
                  placeholder="Enter description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select className="form-control" id="type" onChange={toolForm.handleChange} value={toolForm.values.type}>
                  <option value="statistical">Statistical</option>
                  <option value="statistical">Statistical</option>
                  <option value="statistical">Statistical</option>
                  <option value="statistical">Statistical</option>
                </select>
              </div>
              <div className="mt-4">
                <label>No. of Inputs</label>
                <div className="d-flex">
                  {inputs.map((input, index) => (
                    <input className="form-control me-3" disabled />
                  ))}
                </div>
                <button className="btn btn-primary mt-2" onClick={addInput}>
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="formula">Formula</label>
                <textarea
                  type="text"
                  className="form-control mb-3"
                  id="formula"
                  onChange={toolForm.handleChange}
                  value={toolForm.values.formula}
                  placeholder="Enter formula"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-5">
                Submit
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

const ManageTools = () => {
  const [toolList, setToolList] = useState([]);

  const { apiUrl } = app_config;

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const fetchTools = async () => {
    try {
      const response = await fetch(`${apiUrl}/tool/getbyuser/${currentUser._id}`);
      const data = await response.json();
      console.log(data);
      setToolList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  const deleteTool = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`${apiUrl}/tool/delete/${id}`, {
        method: 'DELETE'
      });
      console.log(response.status);
      if (response.status === 200) {
        fetchTools();
        toast.success('Tool deleted successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const displayTools = () => {
    return (
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>No. of Inputs</th>
            <th>Formula</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toolList.map((tool) => (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <p className="fw-bold mb-1">{tool.name}</p>
                </div>
              </td>
              <td>
                <p className="fw-bold mb-1">{tool.type}</p>
              </td>
              <td>
                <p className="fw-bold mb-1">{tool.inputs && tool.inputs.length}</p>
              </td>
              <td>
                <p className="fw-bold mb-1">{tool.formula}</p>
              </td>
              <td>
                <button className="btn btn-danger" onClick={(e) => deleteTool(tool._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <AddNewTool />
      <div className="container mt-5">
        <h2 className="mb-5">Manage Tools</h2>
        {displayTools()}
      </div>
    </div>
  );
};

export default ManageTools;
