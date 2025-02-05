import { JwtService } from "@nestjs/jwt"
import { CustomerController } from "../customer.controller"
import { CustomerService } from "../customer.service"
import { Test } from '@nestjs/testing';
import { Customer } from "../models/customer.model";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { customerStub } from "./stubs/customer.stub";

jest.mock("../customer.service");

describe("CustomerController", () => {
    let customerController: CustomerController
    let customerService: CustomerService

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [CustomerController],
            providers: [CustomerService, JwtService]
        }).compile();
        customerController = moduleRef.get(CustomerController)
        customerService = moduleRef.get(CustomerService);
        (customerService.create as jest.Mock).mockResolvedValue(customerStub());
        (customerService.findAll as jest.Mock).mockResolvedValue([customerStub()]);
        (customerService.findOne as jest.Mock).mockResolvedValue(customerStub());
        (customerService.update as jest.Mock).mockResolvedValue({ message: "updated", customer: customerStub() });
        (customerService.remove as jest.Mock).mockResolvedValue({ message: "customer deleted" });
        jest.clearAllMocks();
    })
    it("User controller should be defined", () => {
        expect(customerController).toBeDefined();
    });

    describe("Create Customer", () => {
        describe("when create customer is called", () => {
            let customer: Customer | null | Object
            let createCustomerDto: CreateCustomerDto;
            beforeAll(async () => {
                createCustomerDto = {
                    first_name: customerStub().first_name,
                    last_name: customerStub().last_name,
                    phone: customerStub().phone,
                    password: customerStub().password,
                    email: customerStub().email,
                    birth_day: customerStub().birth_day,
                    gender: customerStub().gender,
                    langId: customerStub().langId
                }
                customer = await customerController.create(createCustomerDto)
                // console.log(customer);

            })
            test("then it should call customerService", () => {
                expect(customerService.create).toHaveBeenCalledWith(createCustomerDto)
            })
            it("then it should return customer", () => {
                expect(customer).toMatchObject({
                    ...customerStub(),
                    birth_day: expect.any(String)
                })
            })
        })
    })

    describe("Update Customer", () => {
        describe("when update customer is called", () => {
            let customer: Customer | Object
            let updateCustomerDto: CreateCustomerDto;
            beforeAll(async () => {
                updateCustomerDto = {
                    first_name: customerStub().first_name,
                    last_name: customerStub().last_name,
                    phone: customerStub().phone,
                    password: customerStub().password,
                    email: customerStub().email,
                    birth_day: customerStub().birth_day,
                    gender: customerStub().gender,
                    langId: customerStub().langId
                }
                customer = await customerController.update(customerStub().id, updateCustomerDto)
            })
            test("then it should call customerService", () => {
                expect(customerService.update).toHaveBeenCalledWith(customerStub().id, updateCustomerDto)
            })
            it("then it should return customer", () => {
                expect(customer).toMatchObject({ message: "updated", customer: { ...customerStub(), birth_day: expect.any(String) } })
            })
        })
    })

    describe("Find All Cusomers", () => {
        describe("when findAll customers is called", () => {
            let customers: Customer[] | any;
            beforeAll(async () => {
                customers = await customerController.findAll()
            });
            test("then it should call customerServices findAll method", () => {
                expect(customerService.findAll).toHaveBeenCalled();
            })
            test("then it should return customers", () => {
                expect(customers).toMatchObject([{
                    ...customerStub(),
                    birth_day: expect.any(String)
                }]);
            })
        })
    })

    describe("Find One Cusomer", () => {
        describe("when findOne customer is called", () => {
            let customer: any;
            beforeAll(async () => {
                customer = await customerController.findOne(customerStub().id)
            });
            test("then it should call customerServices findOne method", () => {
                expect(customerService.findOne).toHaveBeenCalled();
            })
            test("then it should return customers", () => {
                expect(customer).toMatchObject({
                    ...customerStub(),
                    birth_day: expect.any(String)
                });
            })
        })
    })

    describe("Remove Cusomer", () => {
        describe("when remove customer is called", () => {
            let customer: Object;
            beforeAll(async () => {
                customer = await customerController.remove(customerStub().id)
            });
            test("then it should call customerServices remove method", () => {
                expect(customerService.remove).toHaveBeenCalled();
            })
            test("then it should return customers", () => {
                expect(customer).toEqual({ message: "customer deleted" });
            })
        })
    })
})