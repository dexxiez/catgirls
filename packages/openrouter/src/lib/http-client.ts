/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "../types";

export class HttpClient implements IHttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string, headers: Record<string, string>) {
    this.client = axios.create({
      baseURL,
      headers,
    });
  }

  async post(url: string, data: any, config?: any) {
    return this.client.post(url, data, config);
  }

  async get(url: string) {
    return this.client.get(url);
  }
}
