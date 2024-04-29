import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WishlitstResolverBase } from "./base/wishlitst.resolver.base";
import { Wishlitst } from "./base/Wishlitst";
import { WishlitstService } from "./wishlitst.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Wishlitst)
export class WishlitstResolver extends WishlitstResolverBase {
  constructor(
    protected readonly service: WishlitstService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
