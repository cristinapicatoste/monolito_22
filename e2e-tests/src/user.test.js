test('failed login', async () => {
    const response = await fetch(progress.env.BASE_URL + '/authentication/login');
    expect(response.status).toBe(400);
});