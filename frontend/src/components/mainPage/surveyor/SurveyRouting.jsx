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
import BasicInfoSubmitted from "./BasicInfoSubmitted";

const SurveyRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/register-child/:id" element={<RegisterChild />} />
        <Route path="/register-mother/:id" element={<RegisterMother />} />
        <Route path="/mother-list/:type" element={<MotherList />} />
        <Route path="/child-list" element={<ChildList />} />
        <Route path="/postnatal/:id/:name" element={<Postnatal />} />
        <Route path="/antenatal/:id/:name" element={<Antenatal />} />
        <Route path="/infant-form/:id/:name" element={<InfantForm />} />
        <Route path='/basic-info' element={<BasicInfoForm/>}/>
        <Route path="/basic-info-submitted/:id" element={<BasicInfoSubmitted/>}/>
      </Routes>
    </div>
  );
};

export default SurveyRouting;
