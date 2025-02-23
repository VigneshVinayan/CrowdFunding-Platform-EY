const backendURL = "http://localhost:4000/";

// API Endpoints
const API_ENDPOINTS = {
  campaigns: {
    getAll: `${backendURL}api/campaign/all`,
    getById: (id) => `${backendURL}api/campaign/${id}`,
    create: `${backendURL}api/user/create`,
    update: (id) => `${backendURL}api/user/${id}/update`,
    delete: (id) => `${backendURL}api/user/${id}/delete`,
  },
  admin: {
    register: `${backendURL}api/user/addAdmin`,
    login: `${backendURL}api/user/login`,
  },
  donations: {
    donateTo: (id) => `${backendURL}api/donate/${id}/payment`,
    donationData: (id) => `${backendURL}api/donation/success/${id}`,
  },
  queries: {
    getAll: `${backendURL}api/query/all`,
    create: `${backendURL}api/query/create`,
    delete: (id) => `${backendURL}api/query/${id}/delete`,
  },
};

// Exporting API Endpoints
export default API_ENDPOINTS;
