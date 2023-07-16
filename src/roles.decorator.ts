import { SetMetadata } from "@nestjs/common";
import { Role } from "./users/entities/role.enum";

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles); 
// This is a custom decorator that takes in a list of roles and sets the metadata for the roles key to the list of roles.