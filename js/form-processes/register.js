import { registerUser } from "../utilities/backendApiCalls.js";
import { redirectIfLoggedIn, saveToken } from "../utilities/browserFunctions.js";

const form = document.getElementById("registration-form");
const formInputs = document.querySelectorAll("#registration-form input");

redirectIfLoggedIn();

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formValues = {};
	formInputs.forEach((input) => {
		formValues[input.name] = input.value;
	});

	const error = validateForm(formValues);

	if (error !== null) {
		Swal.fire("Error!", error, "error");
		form.reset();
		return;
	}

	console.log(formValues);
	registerUser(formValues)
		.then((response) => {
			console.log(response);
			Swal.fire("Success!", "Registration successful!", "success");
			const { token } = response.data;
			saveToken(token);
			form.reset();

            // redirect to dashboard

		})
		.catch((error) => {
			console.log(error);
			const errorMsg = error.response !== undefined
				? error.response.data.message
				: error.message;

            console.log(errorMsg);
			Swal.fire("Error!", errorMsg, "error");
			form.reset();
		});
});

const validateForm = (formValues) => {
	const { first_name, last_name, email, password, password_confirmation } =
		formValues;
	if (
		first_name === "" ||
		last_name === "" ||
		email === "" ||
		password === "" ||
		password_confirmation === ""
	) {
		return "All fields are required";
	}
	if (password !== password_confirmation) {
		return "Passwords do not match";
	}

	if (terms_agreement === false) {
		return "You must agree to the terms and conditions";
	}

	return null;
};
