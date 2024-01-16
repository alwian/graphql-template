import type { Request } from "express";
import { ExampleDataSource } from "../dataSources";

export interface Context {
  req: Request;
  dataSources: {
    exampleDataSource: ExampleDataSource;
  };
}
