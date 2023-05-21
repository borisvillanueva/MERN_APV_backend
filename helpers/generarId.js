const generarId = () => {
    return Date.now().toString(32) + Math.random().toString(33).substring(2);
};
export default generarId;