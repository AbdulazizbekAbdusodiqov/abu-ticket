import { Test, TestingModule } from "@nestjs/testing";
import { CustomerService } from "../customer.service";
import { customerStub } from "./stubs/customer.stub";
import { JwtService } from "@nestjs/jwt";
import { Customer } from "../models/customer.model";
import { getModelToken } from "@nestjs/sequelize";
import { CreateCustomerDto } from "../dto/create-customer.dto";

jest.mock('./stubs/customer.stub', () => ({
    customerStub: jest.fn().mockReturnValue({
        id: 1,
        first_name: 'nimadir',
        last_name: 'last',
        email: 'emailjon@gmail.com',
        password: 'password',
        phone: '1234567890',
        birth_day: '2025-02-05T05:21:06.628Z',
        gender: 'Male',
        langId: 1,
    }),
}));



describe("Users service", () => {
    let customerService: CustomerService;
    const mockUserModel = {
        create: jest.fn().mockImplementation(() => ({
            ...customerStub(),
            hashed_refresh_token: 'mockJwtToken',
            save: jest.fn().mockResolvedValue(customerStub()),
        })),
        findOne: jest.fn().mockImplementation(customerStub),
        findAll: jest.fn().mockImplementation(() => [customerStub()]),
        findByPk: jest.fn().mockImplementation(customerStub),
        destroy: jest.fn(),
        update: jest.fn().mockImplementation((updateData, options) => {
            if (options.where && options.where.id === customerStub().id) {
                return Promise.resolve([1, {
                    message: "updated",
                    customer: { ...customerStub(), ...updateData },
                }]);
            }
            return Promise.resolve([0, { message: "customer not found" }]);
        }),
    }
    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                CustomerService,
                {
                    provide: JwtService,
                    useValue: {
                        sign: jest.fn().mockReturnValue('mockJwtToken'),
                        verify: jest.fn().mockReturnValue({}),
                    },
                },
                // RolesService,
                {
                    provide: getModelToken(Customer),
                    useValue: mockUserModel,
                }
            ]
        }).compile()
        customerService = moduleRef.get<CustomerService>(CustomerService);
    })

    it("should be defined", () => {
        expect(customerService).toBeDefined();
    })

    describe("createUser", () => {
        describe("when create User is called", () => {
            let createCustomerDto: CreateCustomerDto;
            let newCustomer: any;
            beforeEach(async () => {
                createCustomerDto = {
                    first_name: customerStub().first_name,
                    last_name: customerStub().last_name,
                    email: customerStub().email,
                    password: customerStub().password,
                    phone: customerStub().phone,
                    birth_day: customerStub().birth_day,
                    gender: customerStub().gender,
                    langId: customerStub().langId,
                };
                const result = await customerService.create(createCustomerDto);
                if ('message' in result) {
                    throw new Error(result.message);
                }
                newCustomer = result;
                console.log(newCustomer);
            });
            it("should be create new customer", async () => {
                expect(newCustomer).toEqual({
                    ...customerStub(),
                    hashed_refresh_token: 'mockJwtToken',
                    save: expect.any(Function),
                });
            });
        });
    });

    describe("get One Customer", () => {
        describe("when getOneCustomer is called", () => {
            test("then it should call customerService", async () => {
                expect(await customerService.findOne(customerStub().id)).toEqual(customerStub())
            })
        })
    })
    describe("getAllCustomers", () => {
        describe("when getAllCustomers is called", () => {
            test("then it should call customerService", async () => {
                expect(await customerService.findAll()).toEqual([customerStub()]);
            });
        });
    });

    describe("deleteCustomer", () => {
        describe("when deleteCustomer is called", () => {
            test("then it should call customerService", async () => {
                expect(await customerService.remove(customerStub().id));
            });
        });
    });

    // describe("updateCustomer", () => {
    //     describe("when updateCustomer is called", () => {
    //         test("then it should call customerService", async () => {
    //             expect(await customerService.update(customerStub().id, customerStub()));
    //         });
    //         it("should be update customer", async () => {
    //             expect(await customerService.update(customerStub().id, customerStub())).toEqual({
    //                 message: "updated",
    //                 customer: customerStub()
    //             });
    //         });
    //     });
    // });

});