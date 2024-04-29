import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WishlitstService } from "./wishlitst.service";
import { WishlitstControllerBase } from "./base/wishlitst.controller.base";

@swagger.ApiTags("wishlitsts")
@common.Controller("wishlitsts")
export class WishlitstController extends WishlitstControllerBase {
  constructor(
    protected readonly service: WishlitstService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
