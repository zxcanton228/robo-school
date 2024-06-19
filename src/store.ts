import { create } from "zustand"
import { ITrainer, trainersData } from "./Components/Trainers/trainers.data"
import { IModalState, ITabsState, ITrainerState } from "./types/store.types"

export const useModal = create<IModalState>(set => ({
	isOpen: false,
	open: () => {
		set({ isOpen: true })
	},
	close: () => {
		set({ isOpen: false })
	},
}))
export const useTrainers = create<ITrainerState>(set => ({
	trainer: trainersData[0],
	setTrainer: (newTrainer: ITrainer) => {
		set({ trainer: newTrainer })
	},
}))
export const useTabs = create<ITabsState>(set => ({
	pickTab: 1,
	setPickTab: (pickTab: number) => {
		set({ pickTab })
	},
}))
