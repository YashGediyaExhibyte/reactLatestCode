import { useState, useEffect } from "react";
import axios from "axios";

interface UseApiResponse {
  status: number;
  totalData: any;
  error: any;
  loading: boolean;
}

export const useApi = (url: string): UseApiResponse => {
  const [response, setResponse] = useState<UseApiResponse>({
    status: 0,
    totalData: null,
    error: null,
    loading: false,
  });

  const fetchData = async (): Promise<void> => {
    setResponse({ ...response, loading: true });
    try {
      const res = await axios.get(url);
      setResponse({
        ...response,
        status: res.status,
        totalData: res.data,
        loading: false,
      });
    } catch (error: any) {
      setResponse({
        ...response,
        error: error.message,
        loading: false,
      });
    }
  };

  useEffect(() => {
    void fetchData();
  }, [url]);

  return response;
};
