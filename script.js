const infoForm = document.getElementById('info-form');
const surveyContainer = document.getElementById('survey-container');

infoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Lấy thông tin tiểu sử
    const fullname = document.getElementById('fullname').value;
    const dob = document.getElementById('dob').value;
    const cccd = document.getElementById('cccd').value;
    const address = document.getElementById('address').value;

    // Lưu trữ thông tin tiểu sử (ví dụ: localStorage)

    // Ẩn form thông tin
    infoForm.classList.add('hidden');

    // Hiển thị container khảo sát
    surveyContainer.classList.remove('hidden');

    // Hiển thị 40 câu hỏi
    // ...
});
