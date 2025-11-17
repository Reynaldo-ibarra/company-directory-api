import axios from 'axios';
import { ref } from 'vue';

const instance = axios.create({
    baseURL: 'https://node-app-2-a7jo.onrender.com/',
})

const employees = ref([]);
const loading = ref(false);

export default function useAPI() {
    const getEmployees = async () => {
        loading.value = true;
        if (employees.value.length === 0) {
            const response = await instance.get('api/employee/fetch')
            employees.value = response.data
        }
        loading.value = false;
    }
    return { instance, employees, loading, getEmployees }
}