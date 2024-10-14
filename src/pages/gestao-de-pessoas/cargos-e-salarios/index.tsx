import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getContracts } from "../../../calls/expenses/contractsMinutes";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller( ) {
  
  const handler = {
   
  };

  return <Screen handler={handler} />;
}

export default Controller;


