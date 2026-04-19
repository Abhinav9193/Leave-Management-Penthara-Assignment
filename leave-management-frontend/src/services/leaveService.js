import axios from 'axios';

// base URL of Spring boot backend
const API_URL = 'http://localhost:8080/api/leaves';

//fetches leaves fromn the database
export const getLeaves = async () => {
    try {
        const response = await axios.get(API_URL);
        // returns the list of leaves from the backend
        return response.data;
    } catch (error) {
        console.error("Could not fetch leaves:", error);
        return [];
    }
};

//sends new leave request to the backend
export const addLeave = async (leaveData) => {
    try {
        const response = await axios.post(API_URL, leaveData);
        return response.data;
    } catch (error) {
        console.error("Failed to submit leave application:", error);
        throw error;
    }
};

//updates the status of the leave as in approved/rejected
export const updateStatus = async (id, status) => {
    try {
        // We send a PUT request with the new status in the body
        const response = await axios.put(`${API_URL}/${id}`, { status });
        return response.data;
    } catch (error) {
        console.error("Error while updating leave status:", error);
        throw error;
    }
};

