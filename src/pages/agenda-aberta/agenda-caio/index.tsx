import moment from "moment";
import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import { removeDuplicates } from "../../../utils/removeDuplicate";
import Screen from "./screen";

function AgendaCaio() {
  const handler = {
   };
  return <Screen handler={handler} />;
}

export default AgendaCaio;