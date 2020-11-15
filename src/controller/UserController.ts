import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private static userRepository = getRepository(User);

    //get all users
    static async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    // get one user
    static async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    // Save user
    static async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    // delete user
    static async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}