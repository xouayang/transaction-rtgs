import axios from "axios";

export const display = async () => {
  try {
    const response = await axios.get("http://10.1.12.37:4040/api/transactions");
    if (response.data.data != null) {
      console.log("from actions", response.data);
      return { success: true, data: response.data };
    } else {
      return { success: false, data: [] };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayRTGS_ILPFT = async () => {
  try {
    const result = await axios.get("http://10.1.12.37:5000/api/transaction");
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayIOTFT_IOWFT = async () => {
  try {
    const result = await axios.get(
      "http://10.1.12.37:5000/api/transaction/iotft-iowft"
    );
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayIEDFT_IROFT_IWTFT_ITAES = async () => {
  try {
    const result = await axios.get(
      "http://10.1.12.37:5000/api/transaction/IEDFT_IROFT_IWTFT_ITAES"
    );
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayIFLFX = async () => {
  try {
    const result = await axios.get(
      "http://10.1.12.37:5000/api/transaction/IFLFX"
    );
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayILSKB_ILSKS = async () => {
  try {
    const result = await axios.get(
      "http://10.1.12.37:5000/api/transaction/ILSKB_ILSKS"
    );
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayIMMON_IUMON = async () => {
  try {
    const result = await axios.get(
      "http://10.1.12.37:5000/api/transaction/IMMON_IUMON"
    );
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
export const displayIPELC_IPETP_IPEUT_IPOLC = async () => {
  try {
    const result = await axios.get(
      "http://10.1.12.37:5000/api/transaction/IPELC_IPETP_IPEUT_IPOLC"
    );
    if (result.data !== null) {
      return result.data;
    } else {
      console.log("not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message || error.message;
      return { success: false, message: msg };
    }
  }
};
