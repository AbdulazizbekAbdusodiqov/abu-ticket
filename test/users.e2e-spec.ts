import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common"
import * as request from 'supertest'
import { AppModule } from "../src/app.module";

describe("User (e2e)", () => {

    let app: INestApplication;
    let token: string;
    
    beforeAll(async() => {  
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init()
        const response = await request(app.getHttpServer())
            .post("/auth/sign-in")
            .send({
                email:"nimadir23@test.com",
                password:"parol_1$",
                value:"superAdmin"
            });
            token = response.body.token;
            console.log("token", token);
    })

    it("/users/(GET)--> 200 OK",()=>{
        // console.log(token);
        
        return request(app.getHttpServer())
        .get('/users')
        .set("Authorization", `Bearer ${token}`)
        .expect("Content-type", /json/)
        .expect(200)
    })
    afterAll(async () => {
        await app.close();
    });
    
})