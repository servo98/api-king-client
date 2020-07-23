import { services as axios } from '../utils/service';

const LOADING = "projects/LOADING";

const GET_PROJECTS_SUCCESS = "projects/GET_PROJECTS_SUCCESS";
const GET_PROJECTS_ERROR = "projects/GET_PROJECTS_ERROR";

const GET_PROJECT_SUCCESS = "projects/GET_PROJECT_SUCCESS";
const GET_PROJECT_ERROR = "projects/GET_PROJECT_ERROR";

const CREATE_PROJECTS_SUCCESS = "projects/CREATE_PROJECTS_SUCCESS";
const CREATE_PROJECTS_ERROR = "projects/CREATE_PROJECTS_ERROR";

const UPDATE_PROJECT_SUCCESS = "projects/UPDATE_PROJECT_SUCCESS";
const UPDATE_PROJECT_ERROR = "projects/UPDATE_PROJECT_ERROR";

const initialState = {
  items: [],
  itemsDetail: [],
  status: "",
  error: undefined,
  project: {
    database: {}
  }

};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case LOADING:
      return { ...state, status: "pending" };

    case GET_PROJECTS_SUCCESS:
      return { ...state, status: "success", items: { ...action.payload } };
    case GET_PROJECTS_ERROR:
      return { ...state, status: "error", error: action.error };

    case GET_PROJECT_SUCCESS:
      return { ...state, status: "success", project: { ...action.payload } };
    case GET_PROJECT_ERROR:
      return { ...state, status: "error", error: action.error };

    case CREATE_PROJECTS_SUCCESS:
      return {
        ...state,
        status: "success",
        items: { ...state.items, [action.payload._id]: action.payload },
      };
    case CREATE_PROJECTS_ERROR:
      return { ...state, status: "error", error: action.error };

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        status: "success",
        items: { ...state.items },
      };
    case UPDATE_PROJECT_ERROR:
      return { ...state, status: "error", error: action.error };

    default:
      return state;
  }
}

export const loadingProjects = () => ({
  type: LOADING,
});

export const getProjectsSuccess = (payload) => ({
  type: GET_PROJECTS_SUCCESS,
  payload,
});
export const getProjectsError = (error) => ({
  type: GET_PROJECTS_ERROR,
  error,
});

export const getProjectSuccess = (payload) => ({
  type: GET_PROJECT_SUCCESS,
  payload,
});
export const getProjectError = (error) => ({
  type: GET_PROJECT_ERROR,
  error,
});

export const createProjectSuccess = (payload) => ({
  type: CREATE_PROJECTS_SUCCESS,
  payload,
});
export const createProjectError = (error) => ({
  type: CREATE_PROJECTS_ERROR,
  error,
});

export const updateProjectSuccess = (payload) => ({
  type: UPDATE_PROJECT_SUCCESS,
  payload,
});
export const updateProjectError = (error) => ({
  type: UPDATE_PROJECT_ERROR,
  error,
});

export const fetchProjects = () => (dispatch) => {
  dispatch(loadingProjects());
  return axios
    .get("/projects")
    .then((res) => {
      dispatch(getProjectsSuccess(res.data.projects));
    })
    .catch((err) => {
      console.log(err, 'dale');
      dispatch(getProjectsError(err));
    });
};

export const fetchProject = (projectId) => (dispatch) => {
  dispatch(loadingProjects());
  return axios
    .get(`/projects/${projectId}`)
    .then((res) => {
      dispatch(getProjectSuccess(res.data.project));
    })
    .catch((err) => {
      dispatch(getProjectError(err));
    });
};


export const createProject = (data, push) => (dispatch) => {
  dispatch(loadingProjects());
  return axios
    .post("/projects", data, {
    })
    .then((res) => {
      push('/dashboard/projects');
      dispatch(createProjectSuccess(res.data.project));
    })
    .catch((err) => {
      dispatch(createProjectError(err));
    });;
};

export const updateProject = (projectId, data, push) => (dispatch) => {
  dispatch(loadingProjects());
  return axios
    .put(`/projects/${projectId}`, data, {
    })
    .then((res) => {
      push('/dashboard/projects');
      console.log(res.data.project);
      dispatch(updateProjectSuccess(res.data.project));
    })
    .catch((err) => {
      dispatch(updateProjectError(err));
    });;
};