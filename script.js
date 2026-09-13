/* =========================================================
   THE WORLD RPG
   BUILD ARCHIVE
   REAL CRAFTING TREE
   ========================================================= */

/* =========================================================
   FILES
   ========================================================= */

const BUILD_FILE = "./builds.json";

const ITEM_FILE = "./items.json";

const BOSS_FILE = "./bosses.json";

/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "tw_rpg_equipment_materials_v7";
const IMAGE_URL =
  "https://tltmafvhmevavbehrypl.supabase.co/storage/v1/object/public/images/";

/* =========================================================
   GLOBAL DATA
   ========================================================= */

const GRADE_KO = {
  1: "델티라마",
  2: "넵티노스",
  3: "그노시스",
  4: "알테이아",
  5: "아르카나",
};
const RANK_KO = {
  normal: "노멀",
  magic: "매직",
  rare: "레어",
};
// 💡 [여기 추가] 레이드 티어별로 입힐 정밀 고유 인게임 색상 데이터셋입니다.
const GRADE_COLOR = {
  1: "#C39BE1", // 델티라마: 보라색
  2: "#9BE1E1", // 넵티노스: 민트색/청록색
  3: "#DC143C", // 그노시스: 크림슨/빨간색
  4: "#99FF99", // 알테이아: 연두색
  5: "#733CBE", // 아르카나: 진보라색
};

const COLOR_REG = {
  epic: "#9BE1E1",
  magic: "#AFC3FF",
  rare: "#EBD787",
  normal: "#AFAFAF",
  none: "#afafaf",
};

const TYPE_KO = {
  // 기본 장비 타입
  Weapon: "무기",
  Headwear: "머리장신구",
  Helmet: "투구",
  Headgear: "머리장신구",
  "Head Gear": "머리장신구",
  Armor: "방어구",
  Chest: "갑옷",
  "Body Armor": "방어구",
  Wings: "날개",
  Accessory: "장신구",
  Ring: "반지",
  Necklace: "목걸이",
  Earrings: "귀걸이",
  Gloves: "장갑",
  Boots: "신발",
  Belt: "허리띠",
  Shield: "방패",
  Offhand: "보조장비",
  Consumable: "소모품",
  Material: "재료",

  // 💡 [여기 추가] 세부 무기 종류 한글화 매칭 규칙
  "Weapon (Shared)": "무기 (공용)",
  "Weapon (Melee)": "무기 (근접)",
  "Weapon (Staff)": "무기 (지팡이)",
  "Weapon (Bow)": "무기 (활)",
  "Weapon (Gun)": "무기 (총)",
  "Weapon (Bag)": "무기 (배낭)",

  // 기타 유틸리티 및 특수 타입
  Pickaxe: "곡괭이",
  Token: "토큰",
  Icon: "아이콘",
  Misc: "기타 재료",
  Food: "음식/소모품",
  Special: "특수 아이템",
};

/* =========================================================
   MAIN SLOT ORDER
   ========================================================= */

const SLOT_ORDER = ["weapon", "armor", "headgear", "accessory", "wings"];

const SLOT_KO = {
  weapon: "무기",
  armor: "방어구",
  headgear: "머리장신구",
  accessory: "장신구",
  wings: "날개",
};

/* =========================================================
   보스 영한 변환 딕셔너리
   ========================================================= */

const bossNameDict = {
  spider: "스파이더",
  "giant spider": "자이언트 스파이더",
  wolf: "늑대",
  "dark wolf": "검은 늑대",
  "silverback wolf": "실버팽 늑대",
  "shadow wolf": "그림자 늑대",
  troll: "트롤",
  "troll lord": "트롤 로드",
  "troll shaman": "트롤 샤먼",
  "troll berserker": "트롤 버서커",
  furbolg: "펄보그",
  "furbolg tracker": "펄보그 트래커",
  "furbolg shaman": "펄보그 샤먼",
  "furbolg giant": "자이언트 펄보그",
  "protector of nature": "자연의 수호자",
  "white murloc": "화이트 멀록",
  "green murloc": "그린 멀록",
  "orange murloc": "오렌지 멀록",
  "blue murloc": "블루 멀록",
  "purple murloc": "퍼플 멀록",
  "dragon turtle": "드래곤 터틀",
  "king crab": "킹 크랩",
  walrus: "바다코끼리",
  "ice troll": "아이스 트롤",
  "ice troll priest": "아이스 트롤 프리스트",
  "polar bear": "폴라베어",
  "polar bear giant": "자이언트 폴라베어",
  mammoth: "맘모스",
  snowman: "스노우맨",
  "king kong": "킹콩",
  "duchy of wallachia soldier": "왈라키아 영지의 병사",
  "duchy of wallachia archer": "왈라키아 영지의 궁수",
  "duchy of wallachia cavalry": "왈라키아 영지의 기병대",
  "duchy of wallachia guardian": "왈라키아 영지의 방패",
  wraith: "망령",
  "blood wraith": "피의 망령",
  "soldier of blood": "피의 병사",
  "wallachia monstrosity": "왈라키아 괴인",
  "bat statue": "박쥐 석상",
  "lava hatchling": "라바 해츨링",
  "lava spawn": "라바 스폰",
  "lava worm": "라바 웜",
  "lava ancient": "라바 에이션트",
  "slave of trueflame": "진홍불꽃의 노예",
  "evil lava spawn": "이빌 라바 스폰",
  "murloc giant": "자이언트 멀록",
  "tide caller": "파도 소환사",
  "sea guardian": "바다의 수호자",
  "guardian of sea": "바다의 수호자",
  "stone golem": "스톤 골렘",
  "solid golem": "솔리드 골렘",
  "duchy of wallachia assassin": "왈라키아 영지의 암살자",
  "duchy of wallachia apostle": "왈라키아 영지의 사도",
  scarab: "스카라브",
  "wallachia wraith": "왈라키아의 망령",
  "forest spirit": "숲의 정령",
  fairy: "요정",
  "avalon defender": "아발론 디펜더",
  "avalon protector": "아발론 프로텍터",
  "castle avalon gatekeeper": "아발론 성의 문지기",
  "frost spider": "서리 거미",
  "frost skirmisher": "서리 보병",
  "frostvemon spider": "서리독 거미",
  "soul of everfrost": "만년설의 혼",
  "frozen soul": "얼어붙은 영혼",
  "frostspider lord": "서리거미 군주",
  "hell portal": "지옥의 차원문",
  "slime monster": "슬라임 몬스터",
  "golem monster": "골렘 몬스터",
  "hound monster": "하운드 몬스터",
  "hell golem": "헬 골렘",
  "fairy spirit": "요정의 정령",
  dryad: "드라이어드",
  avenger: "어벤저",
  stalker: "스토커",
  "life orb": "생명의 보주",
  hatred: "증오",
  anger: "분노",
  "flame spawn": "플레임 스폰",
  "healing turtle": "힐링 터틀",
  turtle: "거북이",
  "dragon hatchling": "드래곤 해츨링",
  "dragonic warrior": "드래곤 전사",
  "flame spirit": "화염의 정령",
  "skeletal solider": "스켈레탈 솔저",
  "worshipper of immortality": "불멸의 숭배자",
  zombie: "좀비",
  "elder ent": "엘더 엔트",
  "giant ent": "자이언트 엔트",
  ent: "엔트",
  "illusion of irbert": "이르베르트의 환영",
  "illusion of irbert (large)": "이르베르트의 환영 (대형)",
  "death huntress": "죽음의 여사냥꾼",
  "death weaver": "죽음의 짜는 자",
  "death devourer": "죽음의 포식자",
  "death hound": "데스 하운드",
  "elemental of chaos": "혼돈의 정령",
  "servant of lightning god": "뇌신의 하수인",
  "obsidian golem": "옵시디언 골렘",
  "lava spirit": "라바 스피릿",
  magma: "마그마",
  "large wavecaller": "대형 파도소환사",
  wavecaller: "파도소환사",
  "water bubble": "물방울",
  "gatekeeper of hell": "지옥의 문지기",
  "purple soul crystal": "보라색 영혼 수정",
  "green soul crystal": "초록색 영혼 수정",
  "cursed spirit": "저주받은 영혼",
  hellspawn: "헬스폰",
  "vampiric monstrosity": "흡혈 괴수",
  "blood baron": "피의 남작",
  "servant of blood": "피의 하수인",
  spike: "가시",
  "wallachia death knight lord": "왈라키아 데스나이트 로드",
  "ruler of flames ragnaar": "홍염의 지배자 라그나스",
  "tentacle lord": "촉수 지배자",
  "giant golem": "자이언트 골렘",
  "mana ancient": "마나 에이션트",
  "wallachia mad clown": "매드 클라운",
  "ruler of the lav sea hydra": "하이드라",
  "duchy of wallachia count": "왈라키아의 백작",
  "wings of death": "죽음의 날개 데드렉트",
  "jack o lantern": "잭 오 랜턴",
  "mage lord": "마법사 왕",
  "the 3rd army's guardian angel": "제 3 천군단 소속 능천사",
  "the devil's right arm corrupt angel": "마왕의 심복 타락한 천사",
  "frostspider queen": "서리거미 제왕",
  "demon lord beriel": "마왕 베리엘",
  "flame nightmare": "플레임 나이트메어",
  "spirit beast": "스피릿 비스트",
  "corruptor rectus": "커럽터 렉터스",
  "turtle lord": "터틀 로드",
  "bone dragon": "본 드래곤",
  "skeletal king desperia": "해골왕 데스페리아",
  "zombie lord": "좀비 로드",
  "ancient ent": "에인션트 엔트",
  "archangel samael": "주천사 사미엘",
  "shadow dragon irbert": "암흑룡 이르베르트",
  "death fiend": "데스 핀드",
  valtora: "뇌신 발토라",
  ifrit: "화신 이프리트",
  nereid: "해신 네레이드",
  underlord: "지하 군주",
  "underlord agareth": "지하 군주 아가레스",
  "duke lazarus": "공작 라자루스",
  gaia: "지신 가이아",
  "arcane construct": "고대 마도 기계",
  "styrix, the harvester of souls": "영혼수확자 스티릭스",
};

let buildsData = [];
let itemsData = [];
let bossesData = [];

let itemById = new Map();
let itemByName = new Map();

let bossDropIds = new Set();

let selectedClassIndex = -1;

let searchKeyword = "";

let openedEquipmentKey = null;

let equipmentChecks = {};

/* =========================================================
   DOM
   ========================================================= */

const classSearch = document.getElementById("classSearch");

const classList = document.getElementById("classList");

const classCount = document.getElementById("classCount");

const selectedClass = document.getElementById("selectedClass");

const selectedBuildName = document.getElementById("selectedBuildName");

const buildNumber = document.getElementById("buildNumber");

const buildContainer = document.getElementById("buildContainer");

const totalChecked = document.getElementById("totalChecked");

const resetButton = document.getElementById("resetButton");

const toast = document.getElementById("toast");

/* =========================================================
   INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", init);

async function init() {
  loadCheckedState();

  bindEvents();

  await loadData();
}

/* =========================================================
   EVENTS
   ========================================================= */

function bindEvents() {
  classSearch.addEventListener("input", () => {
    searchKeyword = classSearch.value.trim().toLowerCase();

    renderClassList();
  });

  resetButton.addEventListener("click", resetAll);

  document.addEventListener("click", handleDocumentClick);
}

/* =========================================================
   LOAD DATA
   ========================================================= */

async function loadData() {
  try {
    const [buildResponse, itemResponse, bossResponse] = await Promise.all([
      fetch(BUILD_FILE),
      fetch(ITEM_FILE),
      fetch(BOSS_FILE),
    ]);

    if (!buildResponse.ok) {
      throw new Error("builds.json 로드 실패");
    }

    if (!itemResponse.ok) {
      throw new Error("items.json 로드 실패");
    }

    if (!bossResponse.ok) {
      throw new Error("bosses.json 로드 실패");
    }

    buildsData = await buildResponse.json();

    itemsData = await itemResponse.json();

    bossesData = await bossResponse.json();

    if (!Array.isArray(buildsData)) {
      throw new Error("builds.json 데이터 형식이 배열이 아닙니다.");
    }

    if (!Array.isArray(itemsData)) {
      throw new Error("items.json 데이터 형식이 배열이 아닙니다.");
    }

    if (!Array.isArray(bossesData)) {
      throw new Error("bosses.json 데이터 형식이 배열이 아닙니다.");
    }

    createItemMaps();

    createBossDropMap();

    renderClassList();

    if (buildsData.length > 0) {
      selectClass(0);
    }

    updateTotalChecked();
    dismissLoadingScreen();
  } catch (error) {
    console.error(error);
    dismissLoadingScreen();
    buildContainer.innerHTML = `
      <div class="empty-state">
        데이터를 불러오지 못했습니다.<br />
        ${escapeHtml(error.message)}
      </div>
    `;
  }
}
function dismissLoadingScreen() {
  const loader = document.getElementById("appLoadingScreen");
  if (!loader) return;

  // 부드러운 사라짐 처리를 위해 클래스 부여 후 디졸브 삭제
  loader.classList.add("fade-out");
  setTimeout(() => {
    loader.remove(); // DOM 트리에서 완전 격리
  }, 400); // CSS transition 시간(0.4초)과 일치시킵니다.
}
/* =========================================================
   ITEM MAP
   ========================================================= */

function createItemMaps() {
  itemById.clear();

  itemByName.clear();

  itemsData.forEach((item) => {
    if (!item) {
      return;
    }

    const id = String(item.id || "").trim();

    if (id) {
      itemById.set(id, item);
    }

    const english = normalizeName(item.name || "");

    const korean = normalizeName(item.koreanname || "");

    if (english) {
      itemByName.set(english, item);
    }

    if (korean) {
      itemByName.set(korean, item);
    }
  });
}

/* =========================================================
   BOSS DROP MAP
   ========================================================= */

function createBossDropMap() {
  bossDropIds.clear();

  bossesData.forEach((boss) => {
    if (!boss || !Array.isArray(boss.drops)) {
      return;
    }

    boss.drops.forEach((itemId) => {
      if (itemId === null || itemId === undefined) {
        return;
      }

      bossDropIds.add(String(itemId));
    });
  });
}

/* =========================================================
   NORMALIZE
   ========================================================= */

function normalizeName(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

/* =========================================================
   CLASS LIST
   ========================================================= */

function renderClassList() {
  classList.innerHTML = "";

  const filtered = buildsData
    .map((entry, index) => ({
      entry,
      index,
    }))
    .filter(({ entry }) => {
      if (!searchKeyword) {
        return true;
      }

      return getClassName(entry).toLowerCase().includes(searchKeyword);
    });

  classCount.textContent = filtered.length;

  if (filtered.length === 0) {
    classList.innerHTML = `
      <div class="empty-state">
        검색 결과가 없습니다.
      </div>
    `;

    return;
  }

  filtered.forEach(({ entry, index }) => {
    const button = document.createElement("button");

    button.type = "button";

    button.className =
      "class-item" + (selectedClassIndex === index ? " active" : "");

    const builds = getBuilds(entry);

    button.innerHTML = `

        <span class="class-item-name">
          ${escapeHtml(getClassName(entry))}
        </span>

        <span class="class-item-count">
          ${builds.length}
        </span>

      `;

    button.addEventListener("click", () => selectClass(index));

    classList.appendChild(button);
  });
}

/* =========================================================
   CLASS NAME
   ========================================================= */

function getClassName(entry) {
  if (!entry) {
    return "Unknown";
  }

  return (
    entry.className ||
    entry.class ||
    entry.name ||
    entry.koreanname ||
    "Unknown"
  );
}

/* =========================================================
   SELECT CLASS
   ========================================================= */

function selectClass(index) {
  selectedClassIndex = index;

  openedEquipmentKey = null;

  const entry = buildsData[index];

  selectedClass.textContent = getClassName(entry);

  renderClassList();

  renderBuilds();
}

/* =========================================================
   GET BUILDS
   ========================================================= */

function getBuilds(entry) {
  if (!entry) {
    return [];
  }

  if (Array.isArray(entry.builds)) {
    return entry.builds;
  }

  if (Array.isArray(entry.build)) {
    return entry.build;
  }

  return [];
}

/* =========================================================
   RENDER BUILDS
   ========================================================= */

function renderBuilds() {
  buildContainer.innerHTML = "";

  if (selectedClassIndex < 0) {
    buildContainer.innerHTML = `
      <div class="empty-state">
        캐릭터를 선택해주세요.
      </div>
    `;

    return;
  }

  const entry = buildsData[selectedClassIndex];

  const builds = getBuilds(entry);

  if (builds.length === 0) {
    buildContainer.innerHTML = `
      <div class="empty-state">
        등록된 빌드가 없습니다.
      </div>
    `;

    return;
  }

  builds.forEach((build, buildIndex) => {
    const card = createBuildCard(build, buildIndex);

    buildContainer.appendChild(card);
  });

  /*
    상단 현재 빌드 정보
  */

  if (builds.length > 0) {
    selectedBuildName.textContent = getBuildName(builds[0]);

    buildNumber.textContent = `1 / ${builds.length}`;
  }
}

/* =========================================================
   BUILD CARD
   ========================================================= */

function createBuildCard(build, buildIndex) {
  const card = document.createElement("article");

  card.className = "build-card";

  const craftable = isBuildCraftable(build, buildIndex);

  if (craftable) {
    card.classList.add("craftable");
  }

  card.innerHTML = `

    <div class="build-header">

      <div class="build-title">

        <div class="build-index">
          ${String(buildIndex + 1).padStart(2, "0")}
        </div>

        <div class="build-name">
          ${escapeHtml(getBuildName(build))}
        </div>

      </div>


      <div
        class="build-craft-status ${craftable ? "ready" : ""}"
      >

        ${craftable ? "★ 제작 가능" : "재료 확인 필요"}

      </div>

    </div>


    <div class="equipment-grid"></div>

  `;

  const grid = card.querySelector(".equipment-grid");

  const slots = ["weapon", "headgear", "armor", "wings", "accessory"];

  slots.forEach((slot) => {
    const itemIds = getSlotItemIds(build, slot);

    if (!Array.isArray(itemIds) || itemIds.length === 0) {
      return;
    }

    itemIds.forEach((itemId) => {
      const item = findItemById(itemId);

      if (!item) {
        return;
      }

      const wrapper = createEquipmentWrapper(item, slot, buildIndex);

      grid.appendChild(wrapper);
    });
  });

  return card;
}

/* =========================================================
   BUILD NAME
   ========================================================= */

function getBuildName(build) {
  if (!build) {
    return "Unnamed Build";
  }

  return build.name || build.buildName || build.title || "Unnamed Build";
}

/* =========================================================
   SLOT ITEM IDS
   ========================================================= */

function getSlotItemIds(build, slot) {
  if (!build) {
    return [];
  }

  const value = build.items?.[slot] ?? build[slot];

  if (value === null || value === undefined) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "object" && value.id) {
    return [value.id];
  }

  return [value];
}

/* =========================================================
   FIND ITEM
   ========================================================= */

function findItemById(itemId) {
  if (itemId === null || itemId === undefined) {
    return null;
  }

  return itemById.get(String(itemId)) || null;
}

function findItem(value) {
  if (value === null || value === undefined) {
    return null;
  }

  const byId = findItemById(value);

  if (byId) {
    return byId;
  }

  return itemByName.get(normalizeName(value)) || null;
}

/* =========================================================
   EQUIPMENT KEY
   ========================================================= */

function getEquipmentKey(buildIndex, slot, itemId) {
  return [selectedClassIndex, buildIndex, slot, String(itemId)].join(":");
}

function createEquipmentWrapper(item, slot, buildIndex) {
  const wrapper = document.createElement("div");
  wrapper.className = "equipment-wrapper";

  const equipmentKey = getEquipmentKey(buildIndex, slot, item.id);
  const craftable = isEquipmentCraftable(item, equipmentKey);

  if (openedEquipmentKey === equipmentKey) {
    wrapper.classList.add("open");
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "equipment-card" +
    (openedEquipmentKey === equipmentKey ? " open" : "") +
    (craftable ? " craftable" : "");

  // 💡 [핵심] 영문 이름을 소문자로 가공하여 바깥 카드의 이미지 경로 조립
  const iconUrl = getItemImageUrl(item);

  button.innerHTML = `
    <div class="equipment-slot">
      ${escapeHtml(slot.toUpperCase())}
    </div>
    
    <!-- 💡 바깥 장비 리스트 전용 이미지/레이아웃 구조 추가 -->
    <div class="equipment-content-wrapper">
      <img src="${iconUrl}" class="equipment-card-icon" alt="${escapeAttribute(item.name)}" onerror="this.src='images/default.jpg'; this.style.opacity='0.5';" />
      <div class="equipment-name">
        ${escapeHtml(getItemDisplayName(item))}
      </div>
    </div>

    <div class="equipment-status ${craftable ? "ready" : ""}">
      <span class="status-text">
        ${craftable ? "★ 조합 완료" : "제작 트리"}
      </span>
      <span>
        ${openedEquipmentKey === equipmentKey ? "▲" : "▼"}
      </span>
    </div>
  `;

  button.addEventListener("click", () => {
    toggleEquipmentPanel(equipmentKey);
  });

  wrapper.appendChild(button);

  if (openedEquipmentKey === equipmentKey) {
    const panel = createRecipePanel(item, equipmentKey);
    wrapper.appendChild(panel);
  }

  return wrapper;
}

/* =========================================================
   상위 노드 실시간 제작 가능 상태 및 '충족' 문구 전파 검사 (고유 경로 완벽 지원 버전)
   ========================================================= */
function updateUpperNodesStatus(equipmentKey) {
  const panel = document.querySelector(`.recipe-panel`);
  if (!panel) return;

  // 패널 안에 들어있는 모든 조합 아이템 트리 구조(.tree-root)를 수집
  const treeRoots = panel.querySelectorAll(".tree-root");

  // 하위 조합 아이템의 완료 여부가 상위(부모)로 순차 전파될 수 있게 역순(아래에서 위로) 탐색
  for (let i = treeRoots.length - 1; i >= 0; i--) {
    const rootEl = treeRoots[i];

    // 현재 단계를 대표하는 노드 (.material이 아닌 CRAFT나 FINAL 노드)
    const nodeEl = rootEl.querySelector(".tree-node:not(.material)");
    if (!nodeEl) continue;

    // 💡 [수정] 내 바로 아래에 있는 직계 자식 노드들만 수집합니다 (.tree-children 바로 밑의 자식들)
    const childContainer = rootEl.querySelector(".tree-children");
    if (!childContainer) continue;

    // 직계 자식들 중 재료(.material) 버튼들과 중간 조합 노드(.tree-node)들을 모두 모읍니다.
    const childNodes = childContainer.querySelectorAll(
      ":scope > .tree-child > .tree-node.material, :scope > .tree-child > .tree-root > .tree-node",
    );
    const quantitySpan = nodeEl.querySelector(".tree-node-quantity");

    if (childNodes.length > 0) {
      // 내 바로 밑의 자식들이 전부 체크되었거나(checked) 제작 가능한 상태(craftable)인지 검사
      const allChecked = Array.from(childNodes).every(
        (child) =>
          child.classList.contains("checked") ||
          child.classList.contains("craftable"),
      );

      if (allChecked) {
        nodeEl.classList.add("craftable");

        if (quantitySpan) {
          quantitySpan.textContent = "충족";
          quantitySpan.style.color = "#6ee7b7"; // 에메랄드 그린 색상 강조
        }

        // 상단 배지 옆에 ★ 제작 가능 레이블 추가 (중복 방지)
        let badge = nodeEl.querySelector(".tree-badge");
        if (badge && !nodeEl.querySelector(".craft-ready-indicator")) {
          badge.insertAdjacentHTML(
            "afterend",
            '<span class="craft-ready-indicator">★ 제작 가능</span>',
          );
        }
      } else {
        nodeEl.classList.remove("craftable");

        if (quantitySpan) {
          const backupText = quantitySpan.dataset.originalQuantity;
          quantitySpan.textContent = backupText ? backupText : "필요 1개";
          quantitySpan.style.color = "var(--yellow)"; // 원래의 노란색 복구
        }

        const indicator = nodeEl.querySelector(".craft-ready-indicator");
        if (indicator) indicator.remove();
      }
    }
  }

  // 💡 [핵심] 바깥 메인 장비 카드의 텍스트와 클래스를 실시간으로 연동합니다.
  const currentWrapper = document.querySelector(`.equipment-wrapper.open`);
  if (currentWrapper) {
    // 트리 내부의 가장 꼭대기에 있는 최종 노드(.tree-node.final)를 찾습니다.
    const finalNode = panel.querySelector(".tree-node.final");
    const isFinalCraftable = finalNode
      ? finalNode.classList.contains("craftable")
      : false;

    const card = currentWrapper.querySelector(".equipment-card");
    const statusText = currentWrapper.querySelector(".status-text");

    if (isFinalCraftable) {
      if (card) card.classList.add("craftable");
      if (statusText) statusText.textContent = "★ 조합 완료";
    } else {
      if (card) card.classList.remove("craftable");
      if (statusText) statusText.textContent = "제작 트리";
    }
  }
}

/* =========================================================
   TOGGLE EQUIPMENT PANEL (장비 오픈 시 상태 동기화 보완)
   ========================================================= */
function toggleEquipmentPanel(equipmentKey) {
  if (openedEquipmentKey === equipmentKey) {
    openedEquipmentKey = null;
  } else {
    openedEquipmentKey = equipmentKey;
  }

  // 화면을 완전히 새로 그립니다.
  renderBuilds();

  // 💡 [변경] 트리가 완전히 새로 그려진 후, 드래그 이벤트를 바인딩하고 바깥 장비 카드의 완료 상태 텍스트를 연동합니다.
  setTimeout(() => {
    const activePanel = document.querySelector(".recipe-panel");
    if (activePanel) {
      // 1. 트리 마우스 드래그 기능 실행
      initTreeDrag(activePanel);

      // 2. 초기 렌더링 상태 기준으로 상위 및 바깥 장비 완료 텍스트 연동 작동
      updateUpperNodesStatus(equipmentKey);
    }
  }, 50);
}

/* =========================================================
   RECIPE PANEL
   ========================================================= */

function createRecipePanel(item, equipmentKey) {
  const panel = document.createElement("div");

  panel.className = "recipe-panel";

  panel.innerHTML = `

    <div class="recipe-header">

      <div class="recipe-header-title">

        <span>
          CRAFTING TREE
        </span>

        <strong>
          ${escapeHtml(getItemDisplayName(item))}
        </strong>

      </div>

      <div class="recipe-hint">
        재료를 클릭하면 보유 처리
      </div>

    </div>


    <div class="recipe-tree">

      ${renderCraftTree(item, equipmentKey, true)}

    </div>

  `;

  return panel;
}
// 기존 renderCraftTree의 매개변수 구조를 활용하여 고유 경로를 HTML에 심어줍니다.
function renderCraftTree(
  item,
  equipmentKey,
  isRoot = false,
  quantity = 1,
  path = new Set(),
) {
  if (!item) return "";

  const itemId = String(item.id || `unknown:${normalizeName(item.name || "")}`);

  // 💡 [추가] 현재 노드까지의 고유 경로를 생성합니다 (예: "최종장비ID > 진용검ID > 오리하르콘ID")
  const currentPathArray = Array.from(path).concat(itemId);
  const itemPath = currentPathArray.join(">");

  if (path.has(itemId))
    return createMaterialNode(item, quantity, equipmentKey, itemPath);

  const nextPath = new Set(path);
  nextPath.add(itemId);

  if (isLeafMaterial(item))
    return createMaterialNode(item, quantity, equipmentKey, itemPath);

  const children = getRecipeChildren(item);
  if (children.length === 0)
    return createMaterialNode(item, quantity, equipmentKey, itemPath);

  const nodeClass = isRoot ? "tree-node final" : "tree-node intermediate";
  const childHtml = children
    .map(
      (child) => `
    <div class="tree-child">
      ${renderCraftTree(child.item, equipmentKey, false, child.quantity, nextPath)}
    </div>
  `,
    )
    .join("");

  // (아래 이어서 고유 경로를 활용해 상태 검사하도록 수정)
  const isAlreadyCraftable = false; // 상위 노드 체크 로직은 updateUpperNodesStatus에서 실시간 처리되므로 무관합니다.

  const activeClass = nodeClass;
  const quantityText = `필요 ${formatNumber(quantity)}개`;
  const quantityStyle = 'style="color: var(--yellow);"';

  const iconUrl = getItemImageUrl(item);

  return `
    <div class="tree-root" data-item-id="${escapeAttribute(itemId)}" data-item-path="${escapeAttribute(itemPath)}">
      <div class="${activeClass}">
        <div class="tree-node-top">
          <span class="tree-node-type">${isRoot ? "FINAL EQUIPMENT" : "CRAFT ITEM"}</span>
          <span class="tree-badge craft">${isRoot ? "EQUIPMENT" : "CRAFT"}</span>
        </div>
        
        <div class="tree-node-content-wrapper">
          <img src="${iconUrl}" class="tree-node-icon" alt="${escapeAttribute(item.name)}" onerror="this.src='images/default.jpg'; this.style.opacity='0.5';" />
          <div class="tree-node-name">
            ${escapeHtml(getItemDisplayName(item))}
          </div>
        </div>

        <div class="tree-node-meta">
          <span class="tree-node-quantity" data-original-quantity="필요 ${formatNumber(quantity)}개" ${quantityStyle}>
            ${quantityText}
          </span>
        </div>
      </div>
      <div class="tree-children">
        ${childHtml}
      </div>
    </div>
  `;
}

/* =========================================================
   RECIPE CHILDREN
   ========================================================= */

function getRecipeChildren(item) {
  if (!item || !Array.isArray(item.recipe)) {
    return [];
  }

  const children = [];

  item.recipe.forEach((recipePart) => {
    /*
        객체:

        {
          "I123": 2
        }

        또는

        {
          "Prius Gold Coin": 3
        }
      */

    if (
      recipePart &&
      typeof recipePart === "object" &&
      !Array.isArray(recipePart)
    ) {
      Object.entries(recipePart).forEach(([key, value]) => {
        const quantity = parseQuantity(value);

        const childItem = findItem(key);

        children.push({
          item: childItem || createUnknownItem(key),

          quantity,
        });
      });

      return;
    }

    /*
        문자열
      */

    if (typeof recipePart === "string") {
      const childItem = findItem(recipePart);

      children.push({
        item: childItem || createUnknownItem(recipePart),

        quantity: 1,
      });

      return;
    }

    /*
        배열:

        [
          "I123",
          3
        ]
      */

    if (Array.isArray(recipePart)) {
      const name = recipePart[0];

      const quantity = parseQuantity(recipePart[1]);

      const childItem = findItem(name);

      children.push({
        item: childItem || createUnknownItem(name),

        quantity,
      });
    }
  });

  return children;
}

/* =========================================================
   UNKNOWN ITEM
   ========================================================= */

function createUnknownItem(name) {
  return {
    id: `unknown:${normalizeName(name)}`,

    name: String(name || "Unknown Material"),

    koreanname: String(name || "Unknown Material"),

    type: "Material",

    recipe: [],
  };
}

// 💡 4번째 인자로 itemPath를 받도록 수정합니다.
function createMaterialNode(item, quantity, equipmentKey, itemPath = "") {
  const materialId = String(
    item.id || `unknown:${normalizeName(item.name || "")}`,
  );

  // 💡 [수정] 이제는 단순 materialId가 아니라 고유한 트리의 위치(itemPath)로 보유 체크를 수행합니다.
  const checked = isMaterialChecked(equipmentKey, itemPath || materialId);

  const type = getMaterialType(item);
  let source = getMaterialSource(item);
  const badge = getMaterialBadge(item);

  if (
    source &&
    source !== "직접 획득" &&
    source !== "재화" &&
    source !== "BOSS DROP"
  ) {
    source = source
      .split(", ")
      .map((src) => bossNameDict[src.trim().toLowerCase()] || src)
      .join(", ");
  }

  let typeDisplay =
    item && item.type && TYPE_KO[item.type] ? TYPE_KO[item.type] : type;
  const quantityText = checked ? "보유 중" : `필요 ${formatNumber(quantity)}개`;
  const quantityStyle = checked
    ? 'style="color: #6ee7b7;"'
    : 'style="color: var(--yellow);"';

  const iconUrl = getItemImageUrl(item);

  // 💡 data-item-path 속성을 HTML에 추가로 심어줍니다.
  return `
    <button
      type="button"
      class="tree-node material ${checked ? "checked" : ""}"
      data-material-id="${escapeAttribute(materialId)}"
      data-item-path="${escapeAttribute(itemPath)}"
      data-equipment-key="${escapeAttribute(equipmentKey)}"
    >
      <div class="tree-node-top">
        <span class="tree-node-type">${escapeHtml(typeDisplay.toUpperCase())}</span>
        <span class="tree-node-check">${checked ? "✓" : ""}</span>
      </div>
      
      <div class="tree-node-content-wrapper">
        <img src="${iconUrl}" class="tree-node-icon" alt="${escapeAttribute(item.name)}" onerror="this.src='images/default.jpg'; this.style.opacity='0.5';" />
        <div class="tree-node-name">
          ${escapeHtml(getItemDisplayName(item))}
        </div>
      </div>

      <div class="tree-node-meta">
        <span class="tree-node-quantity" ${quantityStyle}>${quantityText}</span>
        <span class="tree-badge ${badge.className}">${escapeHtml(badge.label)}</span>
      </div>
      <div class="tree-node-source">
        ${checked ? "보유" : escapeHtml(source)}
      </div>
    </button>
  `;
}

/* =========================================================
   ITEM DISPLAY NAME
   ========================================================= */

function getItemDisplayName(item) {
  if (!item) {
    return "Unknown";
  }

  return item.koreanname || item.name || item.id || "Unknown";
}

/* =========================================================
   QUANTITY
   ========================================================= */

function parseQuantity(value) {
  const number = Number(value);

  if (Number.isFinite(number) && number > 0) {
    return number;
  }

  return 1;
}

/* =========================================================
   LEAF CLASSIFICATION
   ========================================================= */

function isLeafMaterial(item) {
  if (!item) {
    return true;
  }

  const itemId = String(item.id || "");

  /*
    COIN
  */

  if (isCoinItem(item)) {
    return true;
  }

  /*
    BOSS DROP

    recipe가 있어도
    보스에서 직접 떨어지는 아이템이면
    최종 재료로 취급
  */

  if (bossDropIds.has(itemId)) {
    return true;
  }

  /*
    DROPPED BY
  */

  if (Array.isArray(item.dropped_by) && item.dropped_by.length > 0) {
    return true;
  }

  /*
    NO RECIPE
  */

  if (!Array.isArray(item.recipe) || item.recipe.length === 0) {
    return true;
  }

  /*
    REAL CRAFT ITEM
  */

  return false;
}

/* =========================================================
   COIN
   ========================================================= */

function isCoinItem(item) {
  if (!item) {
    return false;
  }

  const type = normalizeName(item.type || "");

  if (type === "coin") {
    return true;
  }

  const names = [
    "prius silver coin",
    "prius gold coin",
    "coin of effort",

    "프리우스 은화",
    "프리우스 금화",
    "노력의 재화",
  ];

  const english = normalizeName(item.name || "");

  const korean = normalizeName(item.koreanname || "");

  return names.includes(english) || names.includes(korean);
}

/* =========================================================
   MATERIAL TYPE
   ========================================================= */

function getMaterialType(item) {
  if (isCoinItem(item)) {
    return "COIN";
  }

  if (item && bossDropIds.has(String(item.id || ""))) {
    return "BOSS DROP";
  }

  if (item && Array.isArray(item.dropped_by) && item.dropped_by.length) {
    return "DROP";
  }

  return "MATERIAL";
}

/* =========================================================
   MATERIAL BADGE
   ========================================================= */

function getMaterialBadge(item) {
  if (isCoinItem(item)) {
    return {
      label: "COIN",
      className: "coin",
    };
  }

  if (item && bossDropIds.has(String(item.id || ""))) {
    return {
      label: "BOSS",
      className: "boss",
    };
  }

  return {
    label: "MATERIAL",
    className: "material",
  };
}

/* =========================================================
   MATERIAL SOURCE
   ========================================================= */

function getMaterialSource(item) {
  if (!item) {
    return "UNKNOWN";
  }

  if (isCoinItem(item)) {
    return "재화";
  }

  if (Array.isArray(item.dropped_by) && item.dropped_by.length) {
    return item.dropped_by.join(", ");
  }

  if (bossDropIds.has(String(item.id || ""))) {
    const bosses = bossesData.filter(
      (boss) =>
        Array.isArray(boss.drops) &&
        boss.drops.some((id) => String(id) === String(item.id)),
    );

    if (bosses.length) {
      return bosses
        .map((boss) => boss.koreanname || boss.name || "BOSS")
        .join(", ");
    }

    return "BOSS DROP";
  }

  return "직접 획득";
}

/* =========================================================
   EQUIPMENT CRAFTABLE (초기 로드 및 빌드 검사용 수정 버전)
   ========================================================= */
function isEquipmentCraftable(item, equipmentKey) {
  // 트리를 탐색하며 모든 최하위 재료들의 고유 경로(itemPath)를 수집하는 헬퍼 함수
  function getLeafPaths(currentItem, currentPath = []) {
    if (!currentItem) return [];

    const itemId = String(
      currentItem.id || `unknown:${normalizeName(currentItem.name || "")}`,
    );
    const nextPath = currentPath.concat(itemId);

    if (isLeafMaterial(currentItem)) {
      return [nextPath.join(">")];
    }

    const children = getRecipeChildren(currentItem);
    if (children.length === 0) {
      return [nextPath.join(">")];
    }

    let paths = [];
    children.forEach((child) => {
      paths = paths.concat(getLeafPaths(child.item, nextPath));
    });
    return paths;
  }

  const leafPaths = getLeafPaths(item);

  if (leafPaths.length === 0) {
    return true;
  }

  // 모든 고유 경로의 재료들이 스토리지에 체크되어 있는지 검사합니다.
  return leafPaths.every((path) => {
    return Boolean(equipmentChecks[equipmentKey]?.[path]);
  });
}

/* =========================================================
   COLLECT LEAF MATERIALS
   ========================================================= */

function collectLeafMaterials(item, visited = new Set(), result = new Map()) {
  if (!item) {
    return result;
  }

  const itemId = String(item.id || `unknown:${normalizeName(item.name || "")}`);

  /*
    순환 레시피 방지
  */

  if (visited.has(itemId)) {
    return result;
  }

  const nextVisited = new Set(visited);

  nextVisited.add(itemId);

  /*
    최종 재료
  */

  if (isLeafMaterial(item)) {
    result.set(itemId, item);

    return result;
  }

  /*
    조합 아이템
  */

  const children = getRecipeChildren(item);

  children.forEach((child) => {
    collectLeafMaterials(child.item, nextVisited, result);
  });

  return result;
}

/* =========================================================
   BUILD CRAFTABLE
   ========================================================= */

function isBuildCraftable(build, buildIndex) {
  const slots = ["weapon", "headgear", "armor", "wings", "accessory"];

  let hasEquipment = false;

  for (const slot of slots) {
    const itemIds = getSlotItemIds(build, slot);

    if (!itemIds.length) {
      continue;
    }

    for (const itemId of itemIds) {
      const item = findItemById(itemId);

      if (!item) {
        continue;
      }

      hasEquipment = true;

      const equipmentKey = getEquipmentKey(buildIndex, slot, item.id);

      if (!isEquipmentCraftable(item, equipmentKey)) {
        return false;
      }
    }
  }

  return hasEquipment;
}

/* =========================================================
   MATERIAL CHECK
   ========================================================= */

function isMaterialChecked(equipmentKey, materialId) {
  return Boolean(equipmentChecks[equipmentKey]?.[materialId]);
}

/* =========================================================
   TOGGLE MATERIAL
   ========================================================= */

/* =========================================================
   TOGGLE MATERIAL (재료 클릭 시 새로고침/위치 튀는 현상 해결)
   ========================================================= */
// function toggleMaterial(equipmentKey, materialId) {
//   if (!equipmentChecks[equipmentKey]) {
//     equipmentChecks[equipmentKey] = {};
//   }

//   const current = Boolean(equipmentChecks[equipmentKey][materialId]);
//   equipmentChecks[equipmentKey][materialId] = !current;

//   // 로컬 스토리지 저장 및 최상단 총 개수 업데이트
//   saveCheckedState();
//   updateTotalChecked();

//   // 1. 클릭한 모든 동일 재료 노드 UI를 실시간 동기화 (전체 리렌더링 X)
//   const materialButtons = document.querySelectorAll(
//     `.tree-node.material[data-equipment-key="${equipmentKey}"][data-material-id="${materialId}"]`,
//   );

//   materialButtons.forEach((btn) => {
//     if (!current) {
//       btn.classList.add("checked");
//       const checkMark = btn.querySelector(".tree-node-check");
//       if (checkMark) checkMark.textContent = "✓";
//       const sourceDiv = btn.querySelector(".tree-node-source");
//       if (sourceDiv) sourceDiv.textContent = "보유";
//     } else {
//       btn.classList.remove("checked");
//       const checkMark = btn.querySelector(".tree-node-check");
//       if (checkMark) checkMark.textContent = "";
//       // 원본 source 텍스트 복구 (DOM 구조에 맞춰 복구하고 싶다면 원본 데이터를 바인딩해둘 수 있습니다)
//       const sourceDiv = btn.querySelector(".tree-node-source");
//       if (sourceDiv) sourceDiv.textContent = "확인 필요";
//     }
//   });

//   // 2. 재료 변화에 따른 상위 조합 아이템(CRAFT, FINAL)의 실시간 제작 가능 상태 체크
//   updateUpperNodesStatus(equipmentKey);

//   showToast(
//     !current
//       ? "재료를 보유 상태로 변경했습니다."
//       : "재료 보유 상태를 해제했습니다.",
//   );
// }

/* =========================================================
   TOGGLE MATERIAL (화면 지우고 다시 그리기 버그 완전 제어 버전)
   ========================================================= */
function toggleMaterial(equipmentKey, materialId, clickedElement) {
  if (!equipmentChecks[equipmentKey]) {
    equipmentChecks[equipmentKey] = {};
  }

  const current = Boolean(equipmentChecks[equipmentKey][materialId]);
  equipmentChecks[equipmentKey][materialId] = !current;

  // 상태 보존용 스토리지 저장 처리
  saveCheckedState();
  updateTotalChecked();

  // 💡 [수정] 전체 문서(document)가 아닌, 현재 활성화된 장비 패널 내부에서만 같은 재료들을 찾아냅니다.
  const activePanel = clickedElement
    ? clickedElement.closest(".recipe-panel")
    : null;
  const targetScope = activePanel ? activePanel : document;

  const materialButtons = targetScope.querySelectorAll(
    `.tree-node.material[data-equipment-key="${equipmentKey}"][data-material-id="${materialId}"]`,
  );

  materialButtons.forEach((btn) => {
    if (!current) {
      btn.classList.add("checked");
    } else {
      btn.classList.remove("checked");
    }
  });

  // 상위 아이템 노드 '충족' 문구 및 바깥 카드 동기화 점검
  updateUpperNodesStatus(equipmentKey);

  showToast(
    !current
      ? "재료를 보유 상태로 변경했습니다."
      : "재료 보유 상태를 해제했습니다.",
  );
}

/* =========================================================
   상위 노드 실시간 제작 가능 상태 및 '충족' 문구 전파 검사 (수정 버전)
   ========================================================= */
function updateUpperNodesStatus(equipmentKey) {
  const panel = document.querySelector(`.recipe-panel`);
  if (!panel) return;

  // 패널 안에 들어있는 모든 조합 아이템 트리 구조(.tree-root)를 수집
  const treeRoots = panel.querySelectorAll(".tree-root");

  // 하위 조합 아이템의 완료 여부가 상위(부모)로 순차 전파될 수 있게 역순으로 탐색
  for (let i = treeRoots.length - 1; i >= 0; i--) {
    const rootEl = treeRoots[i];

    // 현재 조합 박스(.tree-node) 요소를 선택 (.material이 아닌 것)
    const nodeEl = rootEl.querySelector(".tree-node:not(.material)");
    if (!nodeEl) continue;

    // 💡 중요: 현재 내 조합 단계 하위 하위 자식 노드들 중 최하위 재료(.material) 버튼들만 골라냅니다.
    const childMaterials = rootEl.querySelectorAll(".tree-node.material");
    const quantitySpan = nodeEl.querySelector(".tree-node-quantity");

    if (childMaterials.length > 0) {
      // 내 하위 재료 버튼들이 전부 'checked' 클래스를 가지고 있는지 검사
      const allChecked = Array.from(childMaterials).every((mat) =>
        mat.classList.contains("checked"),
      );

      if (allChecked) {
        // 1) 모든 재료가 모여 충족되었을 때
        nodeEl.classList.add("craftable");

        if (quantitySpan) {
          quantitySpan.textContent = "충족";
          quantitySpan.style.color = "#6ee7b7"; // 에메랄드 그린 색상 강조
        }

        // 상단 배지 옆에 ★ 제작 가능 레이블 추가 (중복 방지)
        let badge = nodeEl.querySelector(".tree-badge");
        if (badge && !nodeEl.querySelector(".craft-ready-indicator")) {
          badge.insertAdjacentHTML(
            "afterend",
            '<span class="craft-ready-indicator">★ 제작 가능</span>',
          );
        }
      } else {
        // 2) 재료가 하나라도 모자라거나 체크가 해제되었을 때 원상 복구
        nodeEl.classList.remove("craftable");

        if (quantitySpan) {
          // HTML에 심어둔 원본 수량 백업 텍스트를 읽어와 원상 복구합니다.
          const backupText = quantitySpan.dataset.originalQuantity;
          quantitySpan.textContent = backupText ? backupText : "필요 1개";
          quantitySpan.style.color = "var(--yellow)"; // 원래의 노란색 복구
        }

        // 제작 가능 안내 배지 제거
        const indicator = nodeEl.querySelector(".craft-ready-indicator");
        if (indicator) indicator.remove();
      }
    }
  }

  // 3) 바깥 메인 장비 카드 텍스트 실시간 연동 처리
  const currentWrapper = document.querySelector(`.equipment-wrapper.open`);
  if (currentWrapper) {
    const finalNode = panel.querySelector(".tree-node.final");
    const isFinalCraftable = finalNode
      ? finalNode.classList.contains("craftable")
      : false;

    const card = currentWrapper.querySelector(".equipment-card");
    const statusText = currentWrapper.querySelector(".status-text");

    if (isFinalCraftable) {
      if (card) card.classList.add("craftable");
      if (statusText) statusText.textContent = "★ 조합 완료";
    } else {
      if (card) card.classList.remove("craftable");
      if (statusText) statusText.textContent = "제작 트리";
    }
  }
}

/* =========================================================
   CRAFTING TREE DRAG TO SCROLL (트리 마우스 드래그 기능)
   ========================================================= */
function initTreeDrag(recipePanelElement) {
  if (!recipePanelElement) return;

  let isDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;

  recipePanelElement.addEventListener("mousedown", (e) => {
    // 버튼이나 입력 폼을 클릭했을 때는 드래그 발동 방지
    if (e.target.closest("button") || e.target.closest("input")) return;

    isDown = true;
    recipePanelElement.classList.add("dragging-active");
    startX = e.pageX - recipePanelElement.offsetLeft;
    startY = e.pageY - recipePanelElement.offsetTop;
    scrollLeft = recipePanelElement.scrollLeft;
    scrollTop = recipePanelElement.scrollTop;
  });

  recipePanelElement.addEventListener("mouseleave", () => {
    isDown = false;
    recipePanelElement.classList.remove("dragging-active");
  });

  recipePanelElement.addEventListener("mouseup", () => {
    isDown = false;
    recipePanelElement.classList.remove("dragging-active");
  });

  recipePanelElement.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - recipePanelElement.offsetLeft;
    const y = e.pageY - recipePanelElement.offsetTop;
    const walkX = (x - startX) * 1.5; // 드래그 감도 조절 (1.5배속)
    const walkY = (y - startY) * 1.5;
    recipePanelElement.scrollLeft = scrollLeft - walkX;
    recipePanelElement.scrollTop = scrollTop - walkY;
  });
}

// 기존 toggleEquipmentPanel 함수를 찾아 아래와 같이 수정하여
// 패널이 열릴 때 드래그 이벤트를 바인딩할 수 있도록 유도합니다.
const originalToggleEquipmentPanel = toggleEquipmentPanel;
toggleEquipmentPanel = function (equipmentKey) {
  originalToggleEquipmentPanel(equipmentKey);

  // 패널이 렌더링된 직후 드래그 기능 부여
  setTimeout(() => {
    const activePanel = document.querySelector(".recipe-panel");
    if (activePanel) {
      initTreeDrag(activePanel);
      // 최초 실행 시 한 번 상위 노드들 상태 시각화 동기화
      updateUpperNodesStatus(equipmentKey);
    }
  }, 50);
};
function handleDocumentClick(event) {
  const material = event.target.closest(".tree-node.material");
  if (!material) return;

  event.preventDefault();
  event.stopPropagation();

  const equipmentKey = material.dataset.equipmentKey;
  const materialId = material.dataset.materialId;
  const itemPath = material.dataset.itemPath; // 💡 고유 경로 추출

  if (!equipmentKey || !materialId) return;

  if (material.dataset.loading === "true") return;
  material.dataset.loading = "true";

  // 💡 세 번째 인자로 itemPath를 함께 던집니다.
  toggleMaterial(equipmentKey, itemPath || materialId, material);

  setTimeout(() => {
    material.dataset.loading = "false";
  }, 50);
}

function toggleMaterial(equipmentKey, storageKey, clickedElement) {
  if (!equipmentChecks[equipmentKey]) {
    equipmentChecks[equipmentKey] = {};
  }

  // 💡 이제 storageKey(고유 경로) 단위로 완전히 쪼개져 저장되므로 중복 체크가 불가능합니다.
  const current = Boolean(equipmentChecks[equipmentKey][storageKey]);
  equipmentChecks[equipmentKey][storageKey] = !current;

  saveCheckedState();
  updateTotalChecked();

  // 오직 내가 클릭한 바로 그 '고유한 버튼' 하나만 UI 토글 처리합니다.
  if (clickedElement) {
    if (!current) {
      clickedElement.classList.add("checked");
    } else {
      clickedElement.classList.remove("checked");
    }
  }

  // 상위 조합 아이템 상태 실시간 갱신 작동
  updateUpperNodesStatus(equipmentKey);

  showToast(
    !current
      ? "재료를 보유 상태로 변경했습니다."
      : "재료 보유 상태를 해제했습니다.",
  );
}

/* =========================================================
   LOAD STORAGE
   ========================================================= */

function loadCheckedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      equipmentChecks = {};

      return;
    }

    const parsed = JSON.parse(raw);

    if (parsed && typeof parsed === "object") {
      equipmentChecks = parsed;
    } else {
      equipmentChecks = {};
    }
  } catch (error) {
    console.warn("체크 상태를 불러오지 못했습니다.", error);

    equipmentChecks = {};
  }
}

/* =========================================================
   SAVE STORAGE
   ========================================================= */

function saveCheckedState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(equipmentChecks));
  } catch (error) {
    console.warn("체크 상태 저장 실패", error);
  }
}

/* =========================================================
   TOTAL CHECKED
   ========================================================= */

function updateTotalChecked() {
  let count = 0;

  Object.values(equipmentChecks).forEach((materials) => {
    if (!materials) {
      return;
    }

    count += Object.values(materials).filter(Boolean).length;
  });

  totalChecked.textContent = count;
}

/* =========================================================
   RESET
   ========================================================= */

function resetAll() {
  const confirmed = window.confirm(
    "모든 장비의 재료 체크 상태를 초기화할까요?",
  );

  if (!confirmed) {
    return;
  }

  equipmentChecks = {};

  saveCheckedState();

  openedEquipmentKey = null;

  renderBuilds();

  updateTotalChecked();

  showToast("모든 체크 상태를 초기화했습니다.");
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

/* =========================================================
   FORMAT NUMBER
   ========================================================= */

function formatNumber(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "1";
  }

  return number.toLocaleString("ko-KR");
}

/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(value) {
  return escapeHtml(value);
}
function getItemImageUrl(item) {
  if (!item || !item.name) {
    return `${IMAGE_URL}default.jpg`;
  }

  const fileName = String(item.name).trim();

  return `${IMAGE_URL}${encodeURIComponent(fileName)}.jpg`;
}
