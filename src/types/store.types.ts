import { ITrainer } from "../Components/Trainers/trainers.data"

export interface IModalState {
	isOpen: boolean
	open: () => void
	close: () => void
}
export interface ITrainerState {
	trainer: ITrainer
	setTrainer: (trainer: ITrainer) => void
}
export interface ITabsState {
	pickTab: number
	setPickTab: (pickTab: number) => void
}
