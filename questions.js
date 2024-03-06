const questions = [
    // Nhóm 1: Lựa chọn đúng/sai
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 1: Hà Nội là thủ đô của Việt Nam.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 2: Sông Mekong chảy qua lãnh thổ của Việt Nam.",
        answer: false
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 3: Mount Everest là ngọn núi cao nhất thế giới.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 4: Thái Bình Dương là biển lớn nhất trên Trái Đất.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 5: Địa cầu có 8 lục địa.",
        answer: false
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 6: Nước Nga có diện tích lớn nhất thế giới.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 7: Hồ Chí Minh là tên của một thành phố ở Việt Nam.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 8: Amazon là tên của một sông ở Châu Phi.",
        answer: false
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 9: Núi Kilimanjaro nằm ở Tanzania.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Câu 10: Thái Lan có biên giới với Campuchia.",
        answer: true
    },
    // Add more questions for Nhóm 1...

    // Nhóm 2: Chọn 1 trong 4 đáp án
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 11: Ai là người đầu tiên đặt chân lên mặt trăng?",
        options: ["A. Neil Armstrong", "B. Buzz Aldrin", "C. Yuri Gagarin", "D. Alan Shepard"],
        answer: 0 // Index of the correct answer in options array
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 12: Cuốn sách nào được viết bởi J.K. Rowling?",
        options: ["A. To Kill a Mockingbird", "B. Harry Potter and the Philosopher's Stone", "C. The Great Gatsby", "D. Pride and Prejudice"],
        answer: 1
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 13: Tác giả của cuốn sách 'The Lord of the Rings' là ai?",
        options: ["A. J.R.R. Tolkien", "B. C.S. Lewis", "C. George R.R. Martin", "D. J.K. Rowling"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 14: Ai là nhà khoa học nổi tiếng với lý thuyết tương đối của mình?",
        options: ["A. Isaac Newton", "B. Albert Einstein", "C. Galileo Galilei", "D. Stephen Hawking"],
        answer: 1
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 15: Ai là vận động viên giành được nhiều huy chương vàng nhất trong lịch sử Olympic?",
        options: ["A. Usain Bolt", "B. Michael Phelps", "C. Carl Lewis", "D. Simone Biles"],
        answer: 1
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 16: Ai là người đầu tiên mô tả chuỗi DNA?",
        options: ["A. James Watson", "B. Francis Crick", "C. Rosalind Franklin", "D. Linus Pauling"],
        answer: 2
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 17: Ai là nhà văn viết 'Romeo và Juliet'?",
        options: ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. F. Scott Fitzgerald"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 18: Tác giả của cuốn sách '1984' là ai?",
        options: ["A. George Orwell", "B. Aldous Huxley", "C. Ray Bradbury", "D. Arthur C. Clarke"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 19: Tác giả của cuốn sách 'The Catcher in the Rye' là ai?",
        options: ["A. J.D. Salinger", "B. F. Scott Fitzgerald", "C. Ernest Hemingway", "D. Mark Twain"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: "Câu 20: Cuốn sách 'The Hunger Games' được viết bởi ai?",
        options: ["A. Suzanne Collins", "B. J.K. Rowling", "C. Veronica Roth", "D. George R.R. Martin"],
        answer: 0
    },
    // Add more questions for Nhóm 2...

    // Nhóm 3: Chọn nhiều đáp án
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 21: Các màu cơ bản trong quang phổ là gì?",
        options: ["Đỏ", "Xanh dương", "Vàng", "Xanh lá", "Tím"],
        answer: [0, 1, 3] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 22: Các hành động sau đây được coi là biểu hiện của sự cảm thông. Chọn các hành động cảm thông:",
        options: ["Hiểu và chia sẻ cảm xúc với người khác", "Giúp đỡ người khác khi họ gặp khó khăn", "Thúc đẩy người khác vào tình huống khó khăn", "Khuyến khích người khác thực hiện hành động thiện lành"],
        answer: [0, 1] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 23: Các nước sau đây nằm ở châu lục Châu Á. Chọn các nước nằm ở châu lục Châu Á:",
        options: ["Brazil", "Nhật Bản", "Pháp", "Ấn Độ", "Nigeria"],
        answer: [1, 3] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 24: Những mô hình kinh doanh sau đây được phát triển trên mạng internet. Chọn những mô hình kinh doanh trên mạng internet:",
        options: ["Bán lẻ trực tuyến", "Dịch vụ tư vấn tài chính online", "Sản xuất mỹ phẩm tự nhiên", "Kinh doanh nhà hàng"],
        answer: [0, 1] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 25: Các loại cây sau đây là cây trồng lúa. Chọn các loại cây trồng lúa:",
        options: ["Đậu", "Rau muống", "Ngô", "Mía", "Lúa"],
        answer: [3, 4] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 26: Các loại động vật sau đây là động vật có vú. Chọn các loại động vật có vú:",
        options: ["Cá", "Chim", "Khỉ", "Cá heo", "Chó"],
        answer: [2, 3, 4] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 27: Các hành động sau đây có thể giúp bảo vệ môi trường. Chọn các hành động bảo vệ môi trường:",
        options: ["Tái chế", "Littering", "Tiết kiệm nước", "Xây dựng thêm nhà máy sản xuất chất thải"],
        answer: [0, 2] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 28: Các quốc gia sau đây nằm ở châu lục châu Âu. Chọn các quốc gia nằm ở châu lục châu Âu:",
        options: ["Pháp", "Mông Cổ", "Thụy Điển", "Tây Ban Nha", "Nga"],
        answer: [0, 2, 3] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 29: Các loại thực phẩm sau đây là thực phẩm giàu chất dinh dưỡng. Chọn các loại thực phẩm giàu chất dinh dưỡng:",
        options: ["Kẹo", "Rau cải", "Thịt", "Hamburger", "Hoa quả"],
        answer: [1, 2, 4] // Indexes of the correct answers in options array
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: "Câu 30: Các quốc gia sau đây là thành viên của Liên Hiệp Quốc (United Nations). Chọn các quốc gia là thành viên của Liên Hiệp Quốc:",
        options: ["Thụy Sĩ", "Canada", "Mexico", "Brazil", "Nga"],
        answer: [1, 2, 4] // Indexes of the correct answers in options array
    },
    // Add more questions for Nhóm 3...

    // Nhóm 4: Trả lời tự luận
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 31: Viết một đoạn văn ngắn về ảnh hưởng của công nghệ thông tin đối với xã hội hiện đại."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 32: Phân tích vai trò của giáo dục trong xã hội hiện nay."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 33: Đánh giá ảnh hưởng của biến đổi khí hậu đối với môi trường sống của con người."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 34: Trình bày quan điểm của bạn về vai trò của phụ nữ trong xã hội hiện đại."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 35: Nhận định về tầm quan trọng của việc duy trì và phát triển văn hóa và truyền thống trong một quốc gia."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 36: Phân tích các biện pháp để giảm thiểu sự ô nhiễm môi trường trong đô thị."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 37: Đánh giá tác động của cuộc cách mạng công nghiệp 4.0 đối với nền kinh tế toàn cầu."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 38: Trình bày quan điểm của bạn về vai trò của truyền thông đại chúng trong định hình ý thức công dân."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 39: Phân tích các biện pháp để xử lý vấn đề ô nhiễm không khí trong các thành phố lớn."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: "Câu 40: Trình bày quan điểm của bạn về tầm quan trọng của nghệ thuật và văn hóa trong cuộc sống con người."
    }    
    // Add more questions for Nhóm 4...
];
