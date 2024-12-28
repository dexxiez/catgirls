/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { HttpClient } from "../src/lib/http-client";

// Mock axios since we don't want actual HTTP calls in tests
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("HttpClient", () => {
  const baseURL = "https://api.example.com";
  const headers = {
    Authorization: "Bearer test-token",
    "Content-Type": "application/json",
  };

  let client: HttpClient;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Create axios instance mock
    mockedAxios.create.mockReturnValue({
      post: jest.fn(),
      get: jest.fn(),
    } as any);

    client = new HttpClient(baseURL, headers);
  });

  describe("constructor", () => {
    it("should create axios instance with correct config", () => {
      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL,
        headers,
      });
    });
  });

  describe("post", () => {
    const url = "/test";
    const data = { foo: "bar" };
    const config = { timeout: 5000 };

    it("should make POST request with correct parameters", async () => {
      const expectedResponse = { data: { success: true } };
      const axiosInstance = mockedAxios.create();
      (axiosInstance.post as jest.Mock).mockResolvedValue(expectedResponse);

      const result = await client.post(url, data, config);

      expect(axiosInstance.post).toHaveBeenCalledWith(url, data, config);
      expect(result).toEqual(expectedResponse);
    });

    it("should propagate axios post errors", async () => {
      const error = new Error("Network error");
      const axiosInstance = mockedAxios.create();
      (axiosInstance.post as jest.Mock).mockRejectedValue(error);

      await expect(client.post(url, data)).rejects.toThrow("Network error");
    });
  });

  describe("get", () => {
    const url = "/test";

    it("should make GET request with correct parameters", async () => {
      const expectedResponse = { data: { success: true } };
      const axiosInstance = mockedAxios.create();
      (axiosInstance.get as jest.Mock).mockResolvedValue(expectedResponse);

      const result = await client.get(url);

      expect(axiosInstance.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(expectedResponse);
    });

    it("should propagate axios get errors", async () => {
      const error = new Error("Network error");
      const axiosInstance = mockedAxios.create();
      (axiosInstance.get as jest.Mock).mockRejectedValue(error);

      await expect(client.get(url)).rejects.toThrow("Network error");
    });
  });
});
