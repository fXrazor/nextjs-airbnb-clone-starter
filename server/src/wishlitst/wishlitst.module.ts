import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WishlitstModuleBase } from "./base/wishlitst.module.base";
import { WishlitstService } from "./wishlitst.service";
import { WishlitstController } from "./wishlitst.controller";
import { WishlitstResolver } from "./wishlitst.resolver";

@Module({
  imports: [WishlitstModuleBase, forwardRef(() => AuthModule)],
  controllers: [WishlitstController],
  providers: [WishlitstService, WishlitstResolver],
  exports: [WishlitstService],
})
export class WishlitstModule {}
