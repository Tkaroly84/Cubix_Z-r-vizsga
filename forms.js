import { fetchData } from "./covid";


export const initForm= ()=> {
    const form=document.getElementById('dataForm');
    form.addEventListener('submit' ,() => {
    const country=document.getElementById('country-input').value;
})
}

fetchData();