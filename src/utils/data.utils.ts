export const getData = async <T>(API_URL: string): Promise<T> => {
  try {
    const response = await fetch(API_URL);
    const monstersData = await response.json();
    return monstersData;
  } catch (error) {
    console.log("Error msg: ", error);
  }
};
