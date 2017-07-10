import auth from './auth';

const user = {
	email: "alex@email.com",
	password: "123",
} //As a integration test, tests will fail in case this is not on the database already

describe('API auth services', () => {
	describe('Login', () => {
		// Fallow the pattern of returns with {err, res}
		it('returns the user with token on success', async () => {
			const answer = await auth(user.email, user.password);

			expect(answer.err).toBe(false);

			expect(answer.user.token).toBeDefined()
			expect(answer.user.name).toBeDefined()
			expect(answer.user.email).toBe(user.email)
		})

		it('returns a error message when the credentials are incorrect', async () => {
			const { err } = await auth(user.email, 'invalidpw');
			expect(err).toBe(401);
		})

		it('returns an error message if both arguments are not provided', async () => {
			const { err } = await auth(user.email);
			expect(err).toBe('expected email and password as arguments (email, password)');
		})
	})
})
