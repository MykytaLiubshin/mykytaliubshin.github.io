const marks = [
        ["Теорія Біомедичних Сигналів",
            70, "D"
        ],
        ["Алгоритмізація та Програмування",
            85, "B"
        ],
        ["Математичний Аналіз",
            75, "C"
        ],
        ["Теорія Біомедичних Сигналів: Курсова робота",
            97, "A"
        ],
        ["Філософія",
            88, "B"
        ],
        ["Фізика",
            75, "C"
        ],
        ["Операційні Системи",
            83, "C"
        ],
        ["Теорія Ймовірності",
            60, "E"
        ]
];
const titles_arr = [
    "Назва", "Бал", "Літера"
]

const rows = (marks) => marks.map(el => `<tr>${el.map(e => `<td>${e}</td>`).filter(el => el !== ",")}</tr>`)
const titles = (arr) => `<tr>${arr.map(el => `<th>${el}</th>`)}</tr>`

const Table = (marks, titles_arr) => {
    return  `<table> 
    ${Array.from(titles(titles_arr)).filter(el => el !== ",").join('')}
    ${Array.from(Array.from(rows(marks)).filter(el => el !== ",").join('')).filter(el => el !== ",").join('')}
    </table>`
  }
  
document.querySelector('#table').innerHTML = Table(marks, titles_arr);