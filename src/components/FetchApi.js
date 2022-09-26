import React, { useState } from "react";
import axios from "axios";

function FetchApi() {
  const [users, setUser] = useState("");
  const [input, setInput] = useState("");
  const [isError, setisError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const url = "https://reqres.in/api/users/".concat(input);

    axios
      .get(`${url}`)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
      })

      .catch((error) => {
        setisError(error.message);
      });

    setUser("");
    setisError("");
  };

  return (
    <div className="App">
      <div className="container my-4">
        <input
          type="number"
          name="search"
          placeholder="Input User Id"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="button"
          className="btn btn-primary m-2 py-1"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="container">
        {isError !== "" && <h2 className="text-white">{isError}</h2>}

        <div className="d-flex justify-content-center">
          {users !== "" ? (
            <div className="card cbg" key={users.id} style={{ width: "20rem" }}>
              <img
                className="card-img-top rounded"
                key={users.avatar}
                src={users.avatar}
                alt="Avatar"
              />
              <div className="card-body pt-0 pb-0">
                <div class="row">
                  <div class="col-4 border-end">
                    <h5 className="pt-2">Name :- </h5>
                    <h5 className="mt-1 pb-3">Desc. :- </h5>
                    <h5 className="mt-5 pt-4">Email :- </h5>
                  </div>

                  <div class="col-8">
                    <div className="mt-1">
                      <span className="card-title fs-4">
                        {users.first_name}{" "}
                      </span>
                      <span className="card-subtitle text-muted fs-5">
                        {users.last_name}
                      </span>
                    </div>

                    <p class="card-text text-wrap mt-1">
                      I am always looking for an opportunity to do better and
                      achieve greatness.
                    </p>

                    <a href={users.email} className="card-link text-reset">
                      {users.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // <h4 className="text-secondary fw-bold fs-3 mt-5">
            //   Please Enter User's Id !
            // </h4>

            <figure class="text-center">
              <figcaption class="blockquote-footer fs-4 mt-5 fw-bolder">
                Please Enter <cite title="Source Title">User's ID</cite>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}

export default FetchApi;
