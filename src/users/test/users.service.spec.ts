import { UsersService } from "../users.service"
import { userStub } from "./stubs/user.stub";
import { Test, TestingModule } from "@nestjs/testing";
import { JwtService } from "@nestjs/jwt";
import { RolesService } from "../../roles/roles.service";
import { getModelToken } from "@nestjs/sequelize";
import { User } from "../models/user.model";
import { Role } from "../../roles/models/role.model";
import { CreateUserDto } from "../dto/create-user.dto";

describe("Users service", () => {
    let usersService: UsersService;
    const mockUserModel = {
        create: jest.fn().mockImplementation(userStub),
        findOne: jest.fn().mockImplementation(userStub),
        findAll: jest.fn().mockImplementation(() => [userStub()]),
        findByPk: jest.fn().mockImplementation(userStub),
        destroy: jest.fn(),
    }
    const mockRolesModel = {
        findOne: jest.fn().mockImplementation((value: string) => 'USER')
    }
    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                UsersService,
                JwtService,
                RolesService,
                {
                    provide: getModelToken(User),
                    useValue: mockUserModel,
                },
                {
                    provide: getModelToken(Role),
                    useValue: mockRolesModel
                }
            ]
        }).compile()
        usersService = moduleRef.get<UsersService>(UsersService);
    })

    it("should be defined", () => {
        expect(usersService).toBeDefined();
    })

    describe("createUser", () => {
        describe("when create User is called", () => {
            let createUserDto: CreateUserDto;
            let newUser: User;
            beforeEach(async () => {
                createUserDto = {
                    name: userStub().name,
                    email: userStub().email,
                    password: userStub().password,
                    value: userStub().value
                };
                newUser = await usersService.create(createUserDto);
                console.log(newUser);
            });
            it("should be create new user", async () => {
                expect(newUser).toMatchObject({
                    ...userStub(),
                    roles: ['USER']
                });
            });
        });
    });

    describe("get One User", () => {
        describe("when getOneUser is called", () => {
            test("then it should call usersService", async () => {
                expect(await usersService.findOne(userStub().id)).toEqual(userStub())
            })
        })
    })
    describe("getAllUser", () => {
        describe("when getAllUsers is called", () => {
            test("then it should call usersService", async () => {
                expect(await usersService.findAll()).toEqual([userStub()]);
            });
        });
    });


});