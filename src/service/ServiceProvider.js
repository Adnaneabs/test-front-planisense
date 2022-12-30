import httpCommon from "../http-common.js";

const getTreesByArrondissement =() => {
    return httpCommon.get('/api/treesByArrondissement');
}

const getTreesByGenre = () => {
    return httpCommon.get(`/api/treesByGenre`);
}

export default {getTreesByArrondissement,getTreesByGenre};