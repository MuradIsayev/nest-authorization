import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './entities/role.enum';
import { User } from './entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // If no roles are required, allow access
    }

    // const { user } = context.switchToHttp().getRequest();

    // Mock user
    const user: User = {
      name: 'John Doe',
      roles: [Role.USER],
    };

    return requiredRoles.some((role) => user.roles?.includes(role)); // If user has any of the required roles
  }
}
