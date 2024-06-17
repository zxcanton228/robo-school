import { useForm } from "react-hook-form"
import { IForm } from "../../../types/form.types"

const Form = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({ mode: "onChange" })

	return (
		<form className='feedback__form' onSubmit={handleSubmit(() => reset())}>
			<label>
				{errors.name && <p>{errors.name.message}</p>}
				<input
					type='text'
					placeholder='Имя'
					{...register("name", { required: "Введите имя" })}
				/>
			</label>
			<label>
				{errors.phone && <p>{errors.phone.message}</p>}
				<input
					type='text'
					placeholder='Телефон'
					{...register("phone", { required: "Введите телефон" })}
				/>
			</label>
			<label>
				{errors.email && <p>{errors.email.message}</p>}
				<input
					type='email'
					placeholder='E-mail'
					{...register("email", {
						pattern: {
							message: "Введите валидный E-mail!",

							value:
								/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
						},
						required: "Введите E-mail",
					})}
				/>
			</label>
			<button>Оформить заявку</button>
		</form>
	)
}

export default Form
