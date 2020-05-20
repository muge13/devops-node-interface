const app = require('../app');
const request = require('supertest')(app);

describe('GET /health', () => {
    test("Get health", () => {
        return request.get("/health")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });
});