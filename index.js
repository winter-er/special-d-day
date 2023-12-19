// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "어느새 와버린 12월, 언제 왔지 어리둥절해지는 1일!" },
  { "number": 2, "message": "행복한 토요일, 침대에서 나오지 않는 2일." },
  { "number": 3, "message": "다 같이 즐겁게 보냈다면, 이제 출근을 합시다. 일요일 3일!" },
  { "number": 4, "message": "12월인데 왜 아직도 이렇게 따뜻할까요?" },
  { "number": 5, "message": "아 화요일은 쉽지 않네요. 아아를 마셔보죠!" },
  { "number": 6, "message": "어느새 수요일이 왔어요. 현안을 쓸 시간이네요." },
  { "number": 7, "message": "12월의 첫 번째 목요일, 회의 끝나고 보아요~." },
  { "number": 8, "message": "금요일은 항상 행복한 순간이 가득한 요일이에요." },
  { "number": 9, "message": "토요일인데 그래도 전시회라도 보러 가볼까요?" },
  { "number": 10, "message": "안돼... 벌써 일요일이에요 ㅠㅠ." },
  { "number": 11, "message": "It's a gloomy monday... nothing more to say" },
  { "number": 12, "message": "그래도 월요일이 끝나고 화요일이네요. 1/3을 지났어요!" },
  { "number": 13, "message": "아직 수요일이라니... 누가 달력 안 넘긴 거 아닌가요?" },
  { "number": 14, "message": "현안의 시간이 왔어요~ 오늘은 일퇴 각인가요?" },
  { "number": 15, "message": "금요일 ^^ 뭐 더 무슨 말이 필요한가요?" },
  { "number": 16, "message": "토요일! 그런데 날씨가 너무 춥네요. 요즘 볼 만한 영화가..." },
  { "number": 17, "message": "벌써 일요일이라니... 주말을 최대한 즐겨 보아요!" },
  { "number": 18, "message": "12월의 세번째 월요일, 이제 곧 2024년이네요..." },
  { "number": 19, "message": "날씨가 미쳤어요. 다들 감기 조심하는 화요일이 됩시다!" },
  { "number": 20, "message": "드디어... 한 주의 중간이 왔네요. 다들 내일... 아시죠?" },
  { "number": 21, "message": "밖은 춥지만 마음은 따땃해지는 월급날이에요. 통장 보고 한 번 행복해지고 올까요?" },
  { "number": 22, "message": "원래 월급 다음날은 일퇴하는 거랬어요. 블프 준비 말고 소비하러 가봅시다" },
  { "number": 23, "message": "이제 다음 주부터는 대망의 성탄절 휴가네요. 휴가 때는 비행기 모드닷." },
  { "number": 24, "message": "스페인에서도 깜짝 선물과 함께 혼자서도 즐거운 크리스마스 되길~" }
];