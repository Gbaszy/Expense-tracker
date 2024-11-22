export const getUserFromStorage = () => {
    const token = JSON.parse(localStorage.getItem("userInfo") || null); // getting jwt from localstorsge.
    return token?.token;
  };
  

  