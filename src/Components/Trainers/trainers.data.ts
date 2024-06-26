export interface ITrainer {
	id: number
	avatar: string
	name: string
	job: string
	info: string[]
	courses: string[]
}

export const trainersData: ITrainer[] = [
	{
		id: 2,
		avatar: "/irina.png",
		name: "Ирина Лайм",
		job: "преподаватель по робототехнике",
		info: [
			"Сентябрь 1991 — Июнь 2000",
			"Санкт-Петербургский политехнический университет Петра Великого",
			"Факультет: Компьютерных наук и технологий",
			"Специальность: Математика и компьютерные науки",
			"Форма обучения: Очная",
		],
		courses: [
			"Ноябрь 2015 — Февраль 2021",
			"Программа дополнительного образования «3D Моделирование»",
		],
	},
	{
		id: 1,
		avatar: "/marina.png",
		name: "Марина Орлова",
		job: "преподаватель по робототехнике",
		info: [
			"Сентябрь 1995 — Июнь 2000",
			"Санкт-Петербургский политехнический университет Петра Великого",
			"Факультет: Компьютерных наук и технологий",
			"Специальность: Математика и компьютерные науки",
			"Форма обучения: Очная",
		],
		courses: [
			"Ноябрь 2017 — Февраль 2021",
			"Программа дополнительного образования «3D Моделирование»",
		],
	},

	{
		id: 3,
		avatar: "/maxim.jpg",
		name: "Максим Петров",
		job: "программист",
		info: [
			"Сентябрь 1994 — Июнь 2000",
			"Санкт-Петербургский политехнический университет Петра Великого",
			"Факультет: Компьютерных наук и технологий",
			"Специальность: Математика и компьютерные науки",
			"Форма обучения: Очная",
		],
		courses: [
			"Ноябрь 2019 — Февраль 2021",
			"Программа дополнительного образования «3D Моделирование»",
		],
	},
	{
		id: 4,
		avatar: "/kostya.jpg",
		name: "Константин Назаров",
		job: "преподаватель по робототехнике",
		info: [
			"Сентябрь 1998 — Июнь 2003",
			"Санкт-Петербургский политехнический университет Петра Великого",
			"Факультет: Компьютерных наук и технологий",
			"Специальность: Математика и компьютерные науки",
			"Форма обучения: Очная",
		],
		courses: [
			"Ноябрь 2016 — Январь 2021",
			"Программа дополнительного образования «3D Моделирование»",
		],
	},
	{
		id: 5,
		avatar: "/liza.jpg",
		name: "Лиза Весенняя",
		job: "программист",
		info: [
			"Сентябрь 2005 — Август 2010",
			"Санкт-Петербургский политехнический университет Петра Великого",
			"Факультет: Компьютерных наук и технологий",
			"Специальность: Математика и компьютерные науки",
			"Форма обучения: Очная",
		],
		courses: [
			"Ноябрь 2020 — Февраль 2021",
			"Программа дополнительного образования «3D Моделирование»",
		],
	},
]
