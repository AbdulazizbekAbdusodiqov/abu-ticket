import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe("Customer (e2e)", () => {
    let app: INestApplication;
    let token: string;
    let customerDto = {
        first_name: "abdulazizbek2",
        last_name: "abdusodiqov2",
        password: "parol",
        email: "abdulazizbek2@gamil.com",
        birth_day: "2006-05-26",
        phone :"123456",
        gender: "Male",
        langId: 1
    };
    jest.setTimeout(25000);
    beforeAll(async () => {

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init()
        const response = await request(app.getHttpServer())
            .post("/customer/login")
            .send({
                email: "abdulazizbek2@gamil.com",
                password: "parol"
            });

            token = response.body.accessToken;
            console.log("tokenjon:", token);
    })

    it("/customer/:id(GET)-->200 OK", ()=>{
        return request(app.getHttpServer())
        .get('/customer/6')
        .set("Authorization", `Bearer ${token}`)
        .expect("Content-type", /json/)
        .expect(200)
    });

    it("/customer/:id(GET)-->401 UNAUTHORIZED", ()=>{
        return request(app.getHttpServer())
        .get('/customer/6')
        .expect("Content-type", /json/)
        .expect(401)
    });

    it("customer/(POST)-->201 CREATED", ()=>{

        return request(app.getHttpServer())
        .post('/customer')
        .send(customerDto)
        .expect("Content-type", /json/)
        .expect(201)
    });

    it("customer/(POST)-->400 BAD REQUEST", ()=>{

        return request(app.getHttpServer())
        .post('/customer')
        .send({})
        .expect("Content-type", /json/)
        .expect(400)
    });

    // it("customer/(PATCH)-->200 OK", ()=>{
    //     return request(app.getHttpServer())
    //     .patch('/customer/6')
    //     .send({
    //         first_name: "abdulazizbek",
    //         last_name: "abdusodiqov",
    //         email: "abdulazizbek@gmail.com"
    //     })
    //     .set("Authorization", `Bearer ${token}`)
    //     .expect("Content-type", /json/)
    //     .expect(200)
    // });

    afterAll(async () => {
        await app.close();
    })
})