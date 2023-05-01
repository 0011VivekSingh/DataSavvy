import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { toast } from "react-hot-toast";

const ManageDataset = () => {
  const { apiUrl } = app_config;
  const [loading, setLoading] = useState(false);
  const [datasetList, setDatasetList] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selFile, setSelFile] = useState('');

  const getDatasetList = async () => {
    setLoading(true);
    const response = await fetch(
      `${apiUrl}/dataset/getbyuser/${currentUser._id}`
    );
    const data = await response.json();
    console.log(data);
    setDatasetList(data.result);
    setLoading(false);
  };

  const deleteDataset = async (id) => {
    setLoading(true);
    const response = await fetch(`${apiUrl}/dataset/delete/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      console.log("Dataset Deleted");
      toast.success("Dataset Deleted");
    }
    const data = await response.json();
    console.log(data);
    setLoading(false);
    getDatasetList();
  };

  useEffect(() => {
    getDatasetList();
  }, []);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(apiUrl + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success("File Uploaded!!");
      }
    });
  }

  const displayDatasets = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">File</th>
            <th scope="col">Type</th>
            <th scope="col">Uploaded</th>
            <th scope="col" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {datasetList.map((dataset, index) => {
            return (
              <tr key={dataset._id}>
                <td>{index + 1}</td>
                <td>{dataset.name}</td>
                <td>{dataset.description}</td>
                <td>{dataset.user}</td>
                <td>{new Date(dataset.createdOn).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDataset(dataset._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <header>
        <div className="container py-5">
          <p className="display-1 fw-bold">Manage Datasets</p>
          <hr />
        </div>
      </header>
      <div className="container">
        <label htmlFor="upload-dataset" className="d-block my-4 btn btn-outline-info">Upload New Dataset</label>
        <input hidden type="file" id="upload-dataset" onChange={uploadFile} />
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          displayDatasets()
        )}
      </div>
    </div>
  );
};

export default ManageDataset;
