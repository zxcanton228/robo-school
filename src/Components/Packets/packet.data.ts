export enum RangEnum {
	PRO = "PRO",
	ROBO = "ROBO",
	PROG = "PROG",
}
export interface IPacket {
	rang: RangEnum
	price: number
	description: string
	isActive: boolean
}
export const packetsData: IPacket[] = [
	{
		isActive: true,
		price: 20000,
		rang: RangEnum.PRO,
		description: "УМК по робототехнике и программированию",
	},
	{
		isActive: false,
		price: 15000,
		rang: RangEnum.ROBO,
		description: "УМК по робототехнике",
	},
	{
		isActive: false,
		price: 10000,
		rang: RangEnum.PROG,
		description: "УМК по  программированию",
	},
]
