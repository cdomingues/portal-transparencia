import React, { useState } from "react";
import Screen from "./screen";
import { getLicitacoes } from "../../../calls/expenses/licitacoes";
import moment from "moment";

function Controller() {
  
  const handler = {};

  return <Screen handler={handler} />;
}

export default Controller;