import { loginUser } from "../utilities/backendApiCalls.js";
import {
	redirectIfLoggedIn,
	redirectTo,
    saveToken,
} from "../utilities/browserFunctions.js";
import { validateForm } from "../utilities/validations.js";

const form = document.getElementById("login-form");
const formInputs = document.querySelectorAll("#login-form input");

redirectIfLoggedIn();

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formValues = {};
	formInputs.forEach((input) => {
		formValues[input.name] = input.value;
	});

	try {
		validateForm(formValues, ["email", "password"], {
			validatePassword: false,
		});
	} catch (error) {
		Swal.fire("Error!", error.message, "error");
		return;
	}

	console.log(formValues);
	// login user
	loginUser(formValues)
		.then((response) => {
			console.log(response);
			Swal.fire("Success!", "Login successful!", "success");
			const { token } = response.data;
			saveToken(token);
			form.reset();

			// redirect to dashboard
			redirectTo("dashboard.html");
		})
		.catch((error) => {
			console.log(error);
			const errorMsg =
				error.response !== undefined
					? error.response.data.message
					: error.message;

			console.log(errorMsg);
			Swal.fire("Error!", errorMsg, "error");
			form.reset();
		});
});
