import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket;
}

const service = new Service();

export default service;
