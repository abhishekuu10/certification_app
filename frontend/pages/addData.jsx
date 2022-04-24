import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
import Select from "react-select";

const addData = () => {
  const [sem, setSem] = useState([1]);
  const [isLoading, setIsLoading] = useState(false);
  let [data, setData] = useState({});

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  const program = [
    { value: "btech", label: "btech" },
    { value: "bsc", label: "bsc" },
    { value: "Mba", label: "Mba" },
  ];

  const uni = [
    { value: "dcrust", label: "DCRUST" },
    { value: "du", label: "DU" },
    { value: "ipu", label: "IPU" },
  ];

  const college = [
    { value: "a", label: "College A" },
    { value: "b", label: "College B" },
    { value: "c", label: "College C" },
  ];

  const handleClick = () => {
    let a = parseInt(sem[sem.length - 1]) + 1;
    let arr = [...sem, a];
    setSem(arr);
    console.log(arr);
  };

  const handleSelect = (selectedChoice, name) => {
    setData((prev) => {
      prev[name] = selectedChoice.value;
      return prev;
    });
  };

  const handleClic = (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:8846/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  };

  return (
    <Layout login={true} head="Search">
      <div className="w-1/3 m-auto p-4">
        <div className="text-center	text-4xl font-bold mb-2">Add Data</div>

        <form onSubmit={handleClic}>
          <div className="w-3/4 m-auto mt-2">
            <Input
              child={"Enter your name"}
              type="text"
              name="name"
              data
              setData={setData}
            />
            <Input
              child={"Enter your roll No"}
              type="number"
              name="rollNo"
              setData={setData}
            />

            <div className="text-xl mt-4 mb-2">Gender</div>
            <Select
              onChange={(selected) => handleSelect(selected, "gender")}
              options={gender}
            />

            <div className="text-xl mt-6 mb-2">University</div>
            <Select
              onChange={(selected) => handleSelect(selected, "university")}
              options={uni}
            />

            <div className="text-xl mt-6 mb-2">College</div>
            <Select
              onChange={(selected) => handleSelect(selected, "college")}
              options={college}
            />

            <div className="text-xl mt-6 mb-2">Program</div>
            <Select
              onChange={(selected) => handleSelect(selected, "program")}
              options={program}
            />

            <div className="text-xl mt-6">Marks</div>

            {sem.map((s) => (
              <>
                <Input
                  setData={setData}
                  key={sem}
                  child={`Enter your sem${s} result`}
                  type="number"
                  name={`sem${s}`}
                />
              </>
            ))}
            <div className="text-blue-500 cursor-pointer" onClick={handleClick}>
              Add next sem result
            </div>

            <Input
              child={"Enter your CGPA"}
              type="text"
              name="cgpa"
              setData={setData}
            />
          </div>

          <div className="w-3/4 m-auto">
            <input
              className="w-full p-2 text-lg border-solid border-2 border-black"
              type="submit"
              disabled={isLoading}
              value={isLoading ? "Loading..." : "Add"}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default addData;
