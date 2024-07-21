import React, { useEffect, useState } from "react";
import FormWrapper from "./ui/FormWrapper";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "@/components/hooks/useDjango";
import RegisterButtons from "./RegisterButtons";
import RegisterMother from "./RegisterMom";
import RegisterChild from "./RegisterChild";

let mystyle = { 
  position: 'fixed',
   top: '0px',
    width:'100%',
    zIndex:'200'
   }
let btnStyle={
  position:'fixed',
  top:'20px',
  right:'20px'
}
const BasicInfoSubmitted = () => {

  const [momOpen, setMomOpen] = useState(false)
  const [childOpen, setChildOpen] = useState(false)

  const toggleMother = () => {
    setMomOpen(prev => prev == false ? true : false)
    setChildOpen(false)
  }
  const toggleChild = () => {
    setChildOpen(prev => prev == false ? true : false)
    setMomOpen(false)
  }


  const navigate = useNavigate();

  const { id } = useParams();

  const handleAddChild = () => {
    navigate(`/surveyor/register-child/${id}`);
  };
  const handleAddMother = () => {
    navigate(`/surveyor/register-mother/${id}`);
  };

  const [info, setInfo] = useState(null);

  const { data, error: queryError } = useGet(
    "fetchData",
    "basicinfos/basic_information/"
  );

  function filterId(arr) {
    return arr.filter((item) => item.id == id);
  }

  useEffect(() => {
    if (data) {
      console.log("GET request response:", data);
      console.log(filterId(data.data.results));
      setInfo(filterId(data.data.results));
    }
    if (queryError) {
      console.error("GET request error:", queryError);
    }
  }, [data, queryError]);

  return (
    <div>
      <FormWrapper title="Basic Information Submitted">
        {(location, styles) => (
          <div>
            {info && info.map((item, index) => (
              <div key={index} className="">
                <p><strong>Country:</strong> {item.country}</p>
                <p><strong>Head of Household Name:</strong> {item.head_of_household_name}</p>
                <p><strong>Head of Household Phone Number:</strong> {item.head_of_household_phone_number}</p>
                <p><strong>House Number:</strong> {item.house_number}</p>
                <p><strong>ID:</strong> {item.id}</p>
                <p><strong>Kebele:</strong> {item.kebele}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Nearest Health Facility:</strong> {item.nearest_health_facility}</p>
                <p><strong>Region:</strong> {item.region}</p>
                <p><strong>Submission Date:</strong> {item.submission_date}</p>
                <p><strong>Surveyor:</strong> {item.surveyor}</p>
                <p><strong>Woreda:</strong> {item.woreda}</p>
                <p><strong>Zone:</strong> {item.zone}</p>
              </div>
            ))}
            <div className="flex gap-5 h-[400px] pt-6">
              <Button onClick={toggleMother}>Add Mother</Button>
              <Button onClick={toggleChild}>Add Child</Button>
            </div>

          </div>
        )}
      </FormWrapper>
      <div>
        {momOpen && <div style={mystyle}><RegisterMother id={id} /><Button style={btnStyle} onClick={toggleMother}>X</Button></div>}
        {childOpen && <div style={mystyle}> <RegisterChild id={id} /><Button style={btnStyle} onClick={toggleChild}>X</Button></div>}
      </div>
    </div>
  );
};

export default BasicInfoSubmitted;
