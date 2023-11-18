import { initForm } from "./forms";
import "./styles.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'zizi-card';

window.addEventListener('DOMContentLoaded', () => {
    initForm();
    fetchData();
})