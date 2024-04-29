import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WishlitstServiceBase } from "./base/wishlitst.service.base";

@Injectable()
export class WishlitstService extends WishlitstServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
