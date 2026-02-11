// Данные электронных книг КазУТБ
const booksData = [
    {
        id: 1,
        title: "Основы программирования на Python",
        author: "Ахметов Б.К., Нургалиева А.С.",
        year: 2023,
        specialty: "it",
        isbn: "978-5-9963-1234-5",
        description: "Учебник по основам программирования на языке Python для начинающих",
        format: "PDF",
        size: "8.5 MB",
        url: "#"
    },
    {
        id: 2,
        title: "Современные веб-технологии",
        author: "Иванов А.П., Петров С.В.",
        year: 2022,
        specialty: "it",
        isbn: "978-5-9963-1235-2",
        description: "Полное руководство по современным веб-технологиям и фреймворкам",
        format: "EPUB",
        size: "12.3 MB",
        url: "#"
    },
    {
        id: 3,
        title: "Микроэкономика: теория и практика",
        author: "Калиев М.Ж., Смагулова Г.Т.",
        year: 2023,
        specialty: "economy",
        isbn: "978-5-9963-1236-9",
        description: "Учебник по микроэкономике с практическими кейсами",
        format: "PDF",
        size: "10.2 MB",
        url: "#"
    },
    {
        id: 4,
        title: "Финансовый менеджмент предприятий",
        author: "Султанова Р.М.",
        year: 2022,
        specialty: "economy",
        isbn: "978-5-9963-1237-6",
        description: "Монография по управлению финансами на современных предприятиях",
        format: "PDF",
        size: "7.8 MB",
        url: "#"
    },
    {
        id: 5,
        title: "Стратегический менеджмент",
        author: "Жумабаев А.К., Омарова С.Б.",
        year: 2023,
        specialty: "management",
        isbn: "978-5-9963-1238-3",
        description: "Учебное пособие по стратегическому управлению организациями",
        format: "PDF",
        size: "9.1 MB",
        url: "#"
    },
    {
        id: 6,
        title: "Управление проектами в туризме",
        author: "Тулегенова А.Р.",
        year: 2022,
        specialty: "tourism",
        isbn: "978-5-9963-1239-0",
        description: "Практикум по управлению проектами в сфере туризма",
        format: "PDF",
        size: "6.5 MB",
        url: "#"
    },
    {
        id: 7,
        title: "Цифровой маркетинг и аналитика",
        author: "Иванов А.П., Ким Е.В.",
        year: 2023,
        specialty: "marketing",
        isbn: "978-5-9963-1240-6",
        description: "Современные инструменты цифрового маркетинга и аналитики",
        format: "PDF",
        size: "11.4 MB",
        url: "#"
    },
    {
        id: 8,
        title: "Международные стандарты финансовой отчетности",
        author: "Каримова Л.Н.",
        year: 2022,
        specialty: "finance",
        isbn: "978-5-9963-1241-3",
        description: "Учебник по МСФО для студентов финансовых специальностей",
        format: "PDF",
        size: "9.7 MB",
        url: "#"
    },
    {
        id: 9,
        title: "Логистика и управление цепями поставок",
        author: "Бектасов Е.Т.",
        year: 2023,
        specialty: "logistics",
        isbn: "978-5-9963-1242-0",
        description: "Основы логистики и управления цепями поставок",
        format: "PDF",
        size: "8.9 MB",
        url: "#"
    },
    {
        id: 10,
        title: "Гостиничный и ресторанный бизнес",
        author: "Сарсенова Г.М.",
        year: 2022,
        specialty: "hospitality",
        isbn: "978-5-9963-1243-7",
        description: "Практическое руководство по управлению в сфере гостеприимства",
        format: "PDF",
        size: "7.2 MB",
        url: "#"
    },
    {
        id: 11,
        title: "Основы веб-дизайна и UI/UX",
        author: "Оспанова А.К.",
        year: 2023,
        specialty: "design",
        isbn: "978-5-9963-1244-4",
        description: "Принципы и практика веб-дизайна и пользовательского опыта",
        format: "EPUB",
        size: "13.1 MB",
        url: "#"
    },
    {
        id: 12,
        title: "Промышленные технологии и инновации",
        author: "Нурпеисов Б.А.",
        year: 2022,
        specialty: "engineering",
        isbn: "978-5-9963-1245-1",
        description: "Современные промышленные технологии и инновационные решения",
        format: "PDF",
        size: "10.8 MB",
        url: "#"
    },
    {
        id: 13,
        title: "Агробизнес и управление фермерским хозяйством",
        author: "Тажибаев С.К.",
        year: 2023,
        specialty: "agriculture",
        isbn: "978-5-9963-1246-8",
        description: "Учебное пособие по управлению агробизнесом",
        format: "PDF",
        size: "9.3 MB",
        url: "#"
    }
];

// DOM элементы
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const specialtyFilter = document.getElementById('specialtyFilter');
const resultsSection = document.getElementById('searchResults');
const booksGrid = document.getElementById('booksGrid');
const resultsCount = document.getElementById('resultsCount');
const clearSearchBtn = document.getElementById('clearSearch');
const teacherName = document.getElementById('teacherName');
const logoutBtn = document.getElementById('logoutBtn');
const userModal = document.getElementById('userModal');
const closeModal = document.querySelector('.close-modal');
const teacherOptions = document.querySelectorAll('.teacher-option');
const specialtyCards = document.querySelectorAll('.specialty-card');
const viewBooksButtons = document.querySelectorAll('.btn-view-books');

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Сохраняем имя преподавателя в localStorage
    if (!localStorage.getItem('teacherName')) {
        localStorage.setItem('teacherName', 'Иванов Александр Петрович');
    }
    
    teacherName.textContent = localStorage.getItem('teacherName');
    
    // Добавляем обработчики для кнопок "Показать книги"
    viewBooksButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const specialty = this.dataset.specialty;
            specialtyFilter.value = specialty;
            searchInput.value = '';
            performSearch();
        });
    });
    
    // Добавляем обработчики для карточек специальностей
    specialtyCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn-view-books')) {
                const specialty = this.dataset.specialty;
                specialtyFilter.value = specialty;
                searchInput.value = '';
                performSearch();
            }
        });
    });
});

// Поиск книг
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedSpecialty = specialtyFilter.value;
    
    const filteredBooks = booksData.filter(book => {
        // Поиск по названию, автору и описанию
        const matchesSearch = searchTerm === '' || 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm);
        
        // Фильтр по специальности
        const matchesSpecialty = selectedSpecialty === 'all' || book.specialty === selectedSpecialty;
        
        return matchesSearch && matchesSpecialty;
    });
    
    displayResults(filteredBooks);
}

// Отображение результатов поиска
function displayResults(books) {
    resultsCount.textContent = books.length;
    
    if (books.length === 0) {
        booksGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-book-open"></i>
                <h3>Электронные книги не найдены</h3>
                <p>Попробуйте изменить параметры поиска или выберите другую специальность</p>
            </div>
        `;
    } else {
        booksGrid.innerHTML = books.map(book => `
            <div class="book-card" data-specialty="${book.specialty}">
                <div class="book-header">
                    <h3>${book.title}</h3>
                    <span class="book-year">${book.year}</span>
                </div>
                <p class="book-author"><strong>Авторы:</strong> ${book.author}</p>
                <p class="book-isbn"><strong>ISBN:</strong> ${book.isbn}</p>
                <p class="book-desc">${book.description}</p>
                <div class="book-meta">
                    <span class="book-format">
                        <i class="fas fa-file-pdf"></i> ${book.format}, ${book.size}
                    </span>
                </div>
                <button class="btn-open" onclick="openBook('${book.url}', '${book.title}')">
                    <i class="fas fa-download"></i> Скачать книгу
                </button>
            </div>
        `).join('');
    }
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Функция для получения названия специальности
function getSpecialtyLabel(specialty) {
    const labels = {
        'it': 'Информационные технологии',
        'economy': 'Экономика и финансы',
        'management': 'Менеджмент',
        'tourism': 'Туризм и сервис',
        'marketing': 'Маркетинг',
        'finance': 'Финансы и учет',
        'logistics': 'Логистика',
        'hospitality': 'Гостеприимство',
        'design': 'Дизайн',
        'engineering': 'Технологии и инженерия',
        'agriculture': 'Агробизнес'
    };
    return labels[specialty] || specialty;
}

// Открытие/скачивание книги
function openBook(url, title) {
    alert(`Скачивание электронной книги: "${title}"\n\nВ реальном приложении здесь будет скачивание файла книги.`);
    // window.open(url, '_blank'); // Для реальных ссылок
}

// Обработчики событий
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

specialtyFilter.addEventListener('change', performSearch);

clearSearchBtn.addEventListener('click', function() {
    searchInput.value = '';
    specialtyFilter.value = 'all';
    resultsSection.style.display = 'none';
});

// Управление пользователем
logoutBtn.addEventListener('click', function() {
    userModal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    userModal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === userModal) {
        userModal.style.display = 'none';
    }
});

teacherOptions.forEach(option => {
    option.addEventListener('click', function() {
        const teacher = this.dataset.teacher;
        localStorage.setItem('teacherName', teacher);
        teacherName.textContent = teacher;
        userModal.style.display = 'none';
    });
});

// Анимация при загрузке
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Анимация для карточек специальностей
    const cards = document.querySelectorAll('.specialty-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});