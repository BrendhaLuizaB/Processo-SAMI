import axios from "axios";
import base_url from "../constants/url";
import React from "react";

let listHeroes = axios.get(`${base_url}`);
