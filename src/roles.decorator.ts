import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: string[]) => SetMetadata('roles', roles); 
// This is a custom decorator that takes in a list of roles and sets the metadata for the roles key to the list of roles.