import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Ioeform = () => {
  const [loading, setLoading] = useState(false)
  const [formno, setFormno] = useState("");
  const [details, setDetails] = useState({
    FormNo: "",
    Applicant: "",
    Rank: "",
    District: "",
    Remarks: "",
    Gender: "",
  });
  const handleOnChange = async (e) => {
    setFormno({ ...formno, [e.target.name]: e.target.value });
    setLoading(true);
  };
  const handleOnSubmit = async (e) => {};
  const spinner = () => {};
  useEffect(() => {
    const fetchresult = async () => {
      const response = await fetch(`https://ioeresult/api/result/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          formno: formno.formno,
        },
      });
      const json = await response.json();
      // console.log(json);
      if (json.length) {
        setLoading(false);
        const FormNo = json[0].FormNo;
        const Rank = json[0].Rank;
        const Name = json[0].Name;
        const Gender = json[0].Gender;
        const District = json[0].District;
        const Remarks = json[0].Remarks;
        setDetails({
          FormNo: FormNo,
          Rank: Rank,
          Name: Name,
          District: District,
          Remarks: Remarks,
          Gender: Gender,
        });
        if (Gender === "Male") {
          const yesBtn = document.getElementById("dot-1");
          yesBtn.checked = true;
        } else if (Gender === "Female") {
          const yesBtn = document.getElementById("dot-2");
          yesBtn.checked = true;
        } else {
          // const yesBtn = document.getElementById("dot-3");
          // yesBtn.checked = true;
        }
      }else{
        setLoading(false);
      }
    };
    fetchresult();
  }, [formno]);
  return (
    <>
      <div class="container">
        <div class="title">IoE Result Checker {loading && <Spinner />}</div>
        <div class="content">
          <form>
            <div class="user-details">
              <div class="input-box">
                <span class="details">Form No:</span>
                <input
                  type="string"
                  placeholder="Enter your form no."
                  className={spinner}
                  required
                  name="formno"
                  onChange={handleOnChange}
                />
              </div>
              <div class="input-box">
                <span class="details">Rank</span>
                <input
                  type="text"
                  placeholder="Your Rank"
                  required
                  disabled
                  value={details.Rank}
                />
              </div>
              <div class="input-box">
                <span class="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  disabled
                  value={details.Name}
                />
              </div>
              <div class="input-box">
                <span class="details">Address</span>
                <input
                  type="text"
                  placeholder="Your District"
                  required
                  disabled
                  value={details.District}
                />
              </div>
              <div class="input-box">
                <span class="details">Remarks</span>
                <input
                  type="text"
                  placeholder="Remarks"
                  disabled
                  value={details.Remarks}
                />
              </div>
              <div className="container">
                <input
                  type="radio"
                  name="gender"
                  id="dot-1"
                  disabled
                  selected
                />
                <input type="radio" name="gender" id="dot-2" disabled />
                <input type="radio" name="gender" id="dot-3" disabled />
                <span class="details">Gender:</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">Female</span>
                  </label>
                  <label for="dot-3">
                    <span class="dot three"></span>
                    <span class="gender">Other</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ioeform;
