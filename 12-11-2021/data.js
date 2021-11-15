const saveData = (data) => {
  const str = JSON.stringify(data);
  localStorage.setItem("data", str);
};

const getData = () => {
  const value = localStorage.getItem("data") || "";
  return JSON.parse(value);
};

export { saveData, getData };
