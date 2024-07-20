import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterChild from "./RegisterChild";
import RegisterMother from "./RegisterMom";
import MotherList from "./MotherList";
import ChildList from "./ChildList";
import Postnatal from "./Postnatal";
import Antenatal from "./Antenatal";
import InfantForm from "./InfantForm";
import BasicInfoForm from "./BasicInfoForm";

const SurveyRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/register-child" element={<RegisterChild />} />
        <Route path="/register-mother" element={<RegisterMother />} />
        <Route path="/mother-list/:type" element={<MotherList />} />
        <Route path="/child-list" element={<ChildList />} />
        <Route path="/postnatal/:id/:name" element={<Postnatal />} />
        <Route path="/antenatal/:id/:name" element={<Antenatal />} />
        <Route path="/infant-form/:id/:name" element={<InfantForm />} />
        <Route path='/basic-info' element={<BasicInfoForm/>}/>
      </Routes>
    </div>
  );
};

export default SurveyRouting;
