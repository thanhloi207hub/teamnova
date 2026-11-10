const questions = [
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Bạn thường chọn cách nào để thư giãn sau một ngày dài?",
    hint: "Hãy chọn hoạt động giống bạn nhất.",
    options: [
      { text: "Ở nhà, tận hưởng sự yên bình", score: { pho: 2 } },
      { text: "Đi chơi, gặp gỡ bạn bè", score: { pizza: 2 } },
      { text: "Khám phá một điều mới", score: { sushi: 2 } },
      { text: "Xem phim hoặc chơi game", score: { burger: 2 } }
    ]
  },
  {
    type: "multi",
    label: "CÂU HỎI CHỌN NHIỀU ĐÁP ÁN",
    title: "Bạn yêu thích điều gì nhất?",
    hint: "Có thể chọn tối đa 2 đáp án.",
    max: 2,
    options: [
      { text: "Sự quan tâm và ấm áp", score: { pho: 2 } },
      { text: "Niềm vui và tiếng cười", score: { pizza: 2 } },
      { text: "Sự tinh tế và khác biệt", score: { sushi: 2 } },
      { text: "Tự do và năng động", score: { burger: 2 } }
    ]
  },
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Khi làm việc nhóm, bạn thường là người như thế nào?",
    hint: "Chọn vai trò phù hợp nhất với bạn.",
    options: [
      { text: "Quan tâm, hỗ trợ mọi người", score: { pho: 2 } },
      { text: "Kết nối, tạo không khí vui vẻ", score: { pizza: 2 } },
      { text: "Cẩn thận, chú ý từng chi tiết", score: { sushi: 2 } },
      { text: "Chủ động, thích hành động nhanh", score: { burger: 2 } }
    ]
  },
  {
    type: "image",
    label: "CÂU HỎI HÌNH ẢNH · CHỌN 1 HÌNH",
    title: "Hình ảnh nào thu hút bạn nhất?",
    hint: "Chọn hình bạn thích ngay từ cái nhìn đầu tiên.",
    options: [
      { text: "Bữa ăn ấm cúng", image: "images/phovietnam.jpg", score: { pho: 2 } },
      { text: "Bữa tiệc vui vẻ", image: "images/pizza.jpg", score: { pizza: 2 } },
      { text: "Ẩm thực tinh tế", image: "images/sushi.jpg", score: { sushi: 2 } },
      { text: "Đồ ăn nhanh hấp dẫn", image: "images/Hamburger.jpg", score: { burger: 2 } }
    ]
  },
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Khi gặp một vấn đề khó, bạn sẽ làm gì?",
    hint: "Không cần suy nghĩ quá lâu.",
    options: [
      { text: "Bình tĩnh, giải quyết từng bước", score: { pho: 2 } },
      { text: "Trao đổi với bạn bè để tìm ý tưởng", score: { pizza: 2 } },
      { text: "Phân tích kỹ nguyên nhân", score: { sushi: 2 } },
      { text: "Thử ngay một phương án", score: { burger: 2 } }
    ]
  },
  {
    type: "multi",
    label: "CÂU HỎI CHỌN NHIỀU ĐÁP ÁN",
    title: "Bạn muốn có những phẩm chất nào?",
    hint: "Chọn tối đa 2 phẩm chất bạn mong muốn.",
    max: 2,
    options: [
      { text: "Kiên nhẫn và chân thành", score: { pho: 2 } },
      { text: "Hài hước và thân thiện", score: { pizza: 2 } },
      { text: "Thông minh và tinh tế", score: { sushi: 2 } },
      { text: "Mạnh mẽ và quyết đoán", score: { burger: 2 } }
    ]
  },
  {
    type: "image",
    label: "CÂU HỎI HÌNH ẢNH · CHỌN 1 HÌNH",
    title: "Nếu được chọn một chuyến đi, bạn thích nơi nào?",
    hint: "Chọn phong cảnh bạn muốn đặt chân đến.",
    options: [
      { text: "Thị trấn yên bình", image: "images/Yenbinh.jpg", score: { pho: 2 } },
      { text: "Thành phố sôi động", image: "images/Thanhpho.jpg", score: { pizza: 2 } },
      { text: "Biển xanh trong lành", image: "images/bien.jpg", score: { sushi: 2 } },
      { text: "Núi rừng phiêu lưu", image: "images/rungnui.jpg", score: { burger: 2 } }
    ]
  },
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Bạn bè thường nhận xét bạn là người thế nào?",
    hint: "Chọn lời nhận xét gần với bạn nhất.",
    options: [
      { text: "Đáng tin cậy và ấm áp", score: { pho: 2 } },
      { text: "Vui vẻ và hòa đồng", score: { pizza: 2 } },
      { text: "Sâu sắc và có gu riêng", score: { sushi: 2 } },
      { text: "Năng động và thẳng thắn", score: { burger: 2 } }
    ]
  },
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Bạn thích phong cách sống nào?",
    hint: "Hãy chọn phong cách bạn muốn hướng đến.",
    options: [
      { text: "Đơn giản, ổn định và cân bằng", score: { pho: 2 } },
      { text: "Nhiều trải nghiệm và kết nối", score: { pizza: 2 } },
      { text: "Chỉn chu, có kế hoạch", score: { sushi: 2 } },
      { text: "Tự do, thử thách và bứt phá", score: { burger: 2 } }
    ]
  },
  {
    type: "image",
    label: "CÂU HỎI HÌNH ẢNH · CHỌN 1 HÌNH",
    title: "Bạn thích lựa chọn món ăn nào ngay lúc này?",
    hint: "Hãy chọn món khiến bạn thấy hấp dẫn nhất!",
    options: [
      { text: "Phở Việt Nam", image: "images/phovietnam.jpg", score: { pho: 3 } },
      { text: "Pizza", image: "images/pizza.jpg", score: { pizza: 3 } },
      { text: "Sushi Nhật Bản", image: "images/sushi.jpg", score: { sushi: 3 } },
      { text: "Hamburger", image: "images/Hamburger.jpg", score: { burger: 3 } }
    ]
  },
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Khi mua sắm hoặc lựa chọn đồ dùng, tiêu chí đầu tiên của bạn là gì?",
    hint: "Chọn lý do khiến bạn đưa ra quyết định mua sắm.",
    options: [
      { text: "Sự quen thuộc, thoải mái và bền vững", score: { pho: 2 } },
      { text: "Mẫu mã bắt mắt, thời trang và hợp xu hướng", score: { pizza: 2 } },
      { text: "Chất lượng cao, thiết kế chỉn chu và tinh tế", score: { sushi: 2 } },
      { text: "Tính tiện lợi, nhanh chóng và đa năng", score: { burger: 2 } }
    ]
  },
  {
    type: "multi",
    label: "CÂU HỎI CHỌN NHIỀU ĐÁP ÁN",
    title: "Những điều nào giúp bạn nhanh chóng lấy lại năng lượng sau căng thẳng?",
    hint: "Có thể chọn tối đa 2 đáp án.",
    max: 2,
    options: [
      { text: "Quây quần bên mâm cơm ấm cúng cùng gia đình", score: { pho: 2 } },
      { text: "Tụ tập chém gió, hát ca cùng hội bạn thân", score: { pizza: 2 } },
      { text: "Dành thời gian riêng tư nghỉ ngơi trong không gian yên tĩnh", score: { sushi: 2 } },
      { text: "Tham gia các hoạt động thể thao hoặc chơi game giải trí bứt phá", score: { burger: 2 } }
    ]
  },
  {
    type: "image",
    label: "CÂU HỎI HÌNH ẢNH · CHỌN 1 HÌNH",
    title: "Không gian làm việc/học tập nào truyền nhiều cảm hứng cho bạn nhất?",
    hint: "Chọn góc không gian mang lại cho bạn cảm giác tuyệt vời nhất.",
    options: [
      { text: "Góc phòng ấm cúng mộc mạc", image: "images/gocphong.jpg", score: { pho: 2 } },
      { text: "Quán cà phê sôi động náo nhiệt", image: "images/quancafe.jpg", score: { pizza: 2 } },
      { text: "Bàn làm việc tối giản gọn gàng", image: "images/banlamviec.jpg", score: { sushi: 2 } },
      { text: "Văn phòng sáng tạo hiện đại", image: "images/vanphong.jpg", score: { burger: 2 } }
    ]
  },
  {
    type: "single",
    label: "CÂU HỎI VĂN BẢN · CHỌN 1 ĐÁP ÁN",
    title: "Khi đứng trước một sự thay đổi lớn trong cuộc sống, bạn chọn thái độ nào?",
    hint: "Hãy lắng nghe phản ứng tự nhiên nhất của bản thân.",
    options: [
      { text: "Bình tĩnh thích nghi, giữ tâm thế an yên và chu đáo", score: { pho: 2 } },
      { text: "Hào hứng rủ rê mọi người cùng đón nhận điều thú vị mới", score: { pizza: 2 } },
      { text: "Phân tích từng khía cạnh kỹ lưỡng để có chiến lược hoàn hảo", score: { sushi: 2 } },
      { text: "Sẵn sàng lao vào trải nghiệm ngay không ngại thử thách", score: { burger: 2 } }
    ]
  },
  {
    type: "image",
    label: "CÂU HỎI HÌNH ẢNH · CHỌN 1 HÌNH",
    title: "Cuối cùng, món đồ uống lý tưởng hoàn hảo đi kèm với bạn là gì?",
    hint: "Đây là câu hỏi quyết định bài trắc nghiệm!",
    options: [
      { text: "Trà ấm thanh thanh", image: "images/tra.jpg", score: { pho: 3 } },
      { text: "Nước ngọt có ga sảng khoái", image: "images/nuocngot.jpg", score: { pizza: 3 } },
      { text: "Trà xanh Matcha chuẩn gu", image: "images/matcha.jpg", score: { sushi: 3 } },
      { text: "Nước ép tươi năng lượng", image: "images/nuocep.jpg", score: { burger: 3 } }
    ]
  }
];

const results = {
  pho: {
    title: "PHỞ - TÂM HỒN ẤM ÁP & ĐÁNG TIN CẬY",
    subtitle: "Hương vị truyền thống sâu lắng, gần gũi và đầy gắn kết",
    image: "images/phovietnam.jpg",
    description: "Bạn giống như một bát Phở truyền thống nóng hổi: dung dị, đậm đà, mang lại cảm giác bình yên và sự tin tưởng tuyệt đối cho mọi người xung quanh.",
    strengths: "Chu đáo, lắng nghe tốt, kiên nhẫn, điềm tĩnh trước áp lực và luôn đặt tình cảm gia đình, bạn bè lên hàng đầu.",
    advice: "Đôi khi hãy cởi mở hơn với những thay đổi mới lạ và đừng ngần ngại bước ra khỏi vùng an toàn để bứt phá bản thân!",
    reason: "Lựa chọn của bạn thể hiện xu hướng ưu tiên sự cân bằng, chân thành và chiều sâu tâm hồn. Bạn chính là chỗ dựa tinh thần tuyệt vời cho tập thể."
  },
  pizza: {
    title: "PIZZA - NGƯỜI KẾT NỐI & LAN TỎA NĂNG LƯỢNG",
    subtitle: "Món ăn của sự chia sẻ, ngập tràn sắc màu và tiếng cười",
    image: "images/pizza.jpg",
    description: "Bạn là chiếc Pizza ngập tràn topping rực rỡ: luôn sôi nổi, vui vẻ, sáng tạo và là chất keo kết nối mọi thành viên trong mỗi cuộc gặp gỡ.",
    strengths: "Hòa đồng, giao tiếp giỏi, lạc quan, khả năng tạo niềm vui và truyền cảm hứng tích cực tới đám đông.",
    advice: "Dành chút thời gian tĩnh lặng cho riêng mình để nạp lại năng lượng và lắng nghe sâu hơn những mong muốn cá nhân.",
    reason: "Bạn thường chọn sự tương tác năng động, những trải nghiệm tập thể và tinh thần sẵn sàng chia sẻ niềm vui đến tất cả mọi người."
  },
  sushi: {
    title: "SUSHI - TÂM HỒN TINH TẾ & CHỈN CHU",
    subtitle: "Đỉnh cao của sự tỉ mỉ, gu thẩm mỹ cao và tư duy sâu sắc",
    image: "images/sushi.jpg",
    description: "Bạn mang phong thái của Sushi Nhật Bản: cầu toàn, chú trọng chất lượng, tinh tế trong cách ứng xử và luôn giữ cho mình một cá tính độc đáo.",
    strengths: "Quan sát sắc bén, tư duy logic, thẩm mỹ cao, cẩn trọng trong công việc và giữ uy tín cá nhân vượt trội.",
    advice: "Thả lỏng bản thân một chút, đừng quá áp đặt sự hoàn hảo lên mọi việc để tận hưởng cuộc sống nhẹ nhàng hơn.",
    reason: "Những câu trả lời của bạn phản ánh sự cẩn trọng, trân trọng chất lượng cốt lõi và khả năng đánh giá vấn đề rất thấu đáo."
  },
  burger: {
    title: "HAMBURGER - NGƯỜI NĂNG ĐỘNG & BỨT PHÁ",
    subtitle: "Hiện đại, bứt phá, tốc độ và tràn đầy quyết đoán",
    image: "images/Hamburger.jpg",
    description: "Bạn là chiếc Hamburger đầy năng lượng: cá tính, hiện đại, luôn sẵn sàng xông pha và đưa ra những quyết định nhanh chóng, táo bạo.",
    strengths: "Quyết đoán, chủ động, dám nghĩ dám làm, linh hoạt thích ứng và không ngại thử thách giới hạn mới.",
    advice: "Hãy kết hợp sự tốc độ với một chút kiên nhẫn quan sát để đạt được kết quả bền vững và trọn vẹn nhất.",
    reason: "Bạn ưu tiên sự chủ động, quyết liệt và tốc độ trong hành động. Sự tự tin của bạn chính là ngọn lửa dẫn đường vượt qua thách thức."
  }
};

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);

const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

function showScreen(screen) {
  homeScreen.classList.add("d-none");
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");
  screen.classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  showScreen(homeScreen);
}

function startQuiz() {
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("questionCounter").textContent =
    `Câu ${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("progressBar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  // Hiển thị 
  document.getElementById("questionHeader").textContent = `Câu ${currentQuestion + 1}`;
  
  const badgeEl = document.getElementById("questionBadge");
  if (question.type === "multi") {
    badgeEl.textContent = "Chọn nhiều";
    badgeEl.style.background = "#e0e7ff";
    badgeEl.style.color = "#4338ca";
  } else if (question.type === "image") {
    badgeEl.textContent = "Chọn hình";
    badgeEl.style.background = "#fef3c7";
    badgeEl.style.color = "#d97706";
  } else {
    badgeEl.textContent = "1đ";
    badgeEl.style.background = "#ffedd5";
    badgeEl.style.color = "#c2410c";
  }

  document.getElementById("questionTitle").textContent = question.title;
  document.getElementById("questionHint").textContent = question.hint;
  document.getElementById("errorMessage").classList.add("d-none");

  document.getElementById("backButton").disabled = currentQuestion === 0;
  document.getElementById("backButton").style.opacity =
    currentQuestion === 0 ? ".4" : "1";

  document.getElementById("nextButton").textContent =
    currentQuestion === questions.length - 1 ? "Xem kết quả →" : "Tiếp tục →";

  const area = document.getElementById("answerArea");
  area.innerHTML = "";

  if (question.type === "image") {
    renderImageOptions(question, area);
  } else {
    renderTextOptions(question, area);
  }
}

function renderTextOptions(question, area) {
  question.options.forEach((option, index) => {
    const selected = question.type === "multi"
      ? (answers[currentQuestion] || []).includes(index)
      : answers[currentQuestion] === index;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option" + (question.type === "multi" ? " multi-option" : "") + (selected ? " selected" : "");
    
    const radioIcon = document.createElement("span");
    radioIcon.className = "radio-icon";

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = option.text;

    button.appendChild(radioIcon);
    button.appendChild(textSpan);
    button.onclick = () => selectAnswer(index);
    area.appendChild(button);
  });

  if (question.type === "multi") {
    const note = document.createElement("p");
    note.className = "small-note mt-2 fw-medium";
    note.textContent = `Đã chọn ${(answers[currentQuestion] || []).length}/${question.max} đáp án.`;
    area.appendChild(note);
  }
}

function renderImageOptions(question, area) {
  const row = document.createElement("div");
  row.className = "row g-3";

  question.options.forEach((option, index) => {
    const col = document.createElement("div");
    col.className = "col-6";

    const card = document.createElement("div");
    const selected = answers[currentQuestion] === index;
    card.className = "image-option" + (selected ? " selected" : "");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", option.text);

    const img = document.createElement("img");
    img.src = option.image;
    img.alt = option.text;
    img.loading = "lazy";

    const name = document.createElement("div");
    name.className = "option-name";
    
    const radioIcon = document.createElement("span");
    radioIcon.className = "radio-icon";

    const textSpan = document.createElement("span");
    textSpan.textContent = option.text;

    name.appendChild(radioIcon);
    name.appendChild(textSpan);

    card.appendChild(img);
    card.appendChild(name);
    card.onclick = () => selectAnswer(index);
    card.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectAnswer(index);
      }
    };

    col.appendChild(card);
    row.appendChild(col);
  });

  area.appendChild(row);
}

function selectAnswer(index) {
  const question = questions[currentQuestion];

  if (question.type === "multi") {
    let selected = answers[currentQuestion] || [];

    if (selected.includes(index)) {
      selected = selected.filter(item => item !== index);
    } else if (selected.length < question.max) {
      selected.push(index);
    }

    answers[currentQuestion] = selected;
  } else {
    answers[currentQuestion] = index;
  }

  renderQuestion();
}

function nextQuestion() {
  const answer = answers[currentQuestion];
  const question = questions[currentQuestion];

  const hasAnswer = question.type === "multi"
    ? Array.isArray(answer) && answer.length > 0
    : answer !== null;

  if (!hasAnswer) {
    document.getElementById("errorMessage").classList.remove("d-none");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function calculateScores() {
  const scores = { pho: 0, pizza: 0, sushi: 0, burger: 0 };

  questions.forEach((question, questionIndex) => {
    const answer = answers[questionIndex];
    if (answer === null) return;

    const selectedIndexes = Array.isArray(answer) ? answer : [answer];

    selectedIndexes.forEach(index => {
      const option = question.options[index];
      if (!option) return;

      Object.keys(option.score).forEach(food => {
        scores[food] += option.score[food];
      });
    });
  });

  return scores;
}

function showResult() {
  const scores = calculateScores();

  // Tìm nhóm món ăn có tổng điểm cao nhất.
  const winner = Object.keys(scores).reduce((best, food) =>
    scores[food] > scores[best] ? food : best
  , "pho");

  const result = results[winner];

  document.getElementById("resultImage").src = result.image;
  document.getElementById("resultImage").alt = result.title;
  document.getElementById("resultTitle").textContent = result.title;
  
  if (document.getElementById("resultSubtitle")) {
    document.getElementById("resultSubtitle").textContent = result.subtitle || "";
  }
  
  document.getElementById("resultDescription").textContent = result.description;
  
  if (document.getElementById("resultStrengths")) {
    document.getElementById("resultStrengths").textContent = result.strengths || "";
  }
  
  if (document.getElementById("resultAdvice")) {
    document.getElementById("resultAdvice").textContent = result.advice || "";
  }
  
  document.getElementById("resultReason").textContent = result.reason;

  showScreen(resultScreen);
}

function restartQuiz() {
  startQuiz();
}