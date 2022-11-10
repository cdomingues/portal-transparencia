import axios from "axios";

export const getFile = async (file: string) => {
  try {
    const { data } = await axios.get(
      `https://storage.googleapis.com/storage/v1/b/ligapmmc/o/${file}?alt=media`
    );
    return { data };
  } catch (error) {
    return { error };
  }
};
