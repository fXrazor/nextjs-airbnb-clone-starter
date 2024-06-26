/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Listing as PrismaListing,
  Trip as PrismaTrip,
  Wishlitst as PrismaWishlitst,
  User as PrismaUser,
} from "@prisma/client";

export class ListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ListingCountArgs, "select">): Promise<number> {
    return this.prisma.listing.count(args);
  }

  async listings<T extends Prisma.ListingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingFindManyArgs>
  ): Promise<PrismaListing[]> {
    return this.prisma.listing.findMany<Prisma.ListingFindManyArgs>(args);
  }
  async listing<T extends Prisma.ListingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingFindUniqueArgs>
  ): Promise<PrismaListing | null> {
    return this.prisma.listing.findUnique(args);
  }
  async createListing<T extends Prisma.ListingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingCreateArgs>
  ): Promise<PrismaListing> {
    return this.prisma.listing.create<T>(args);
  }
  async updateListing<T extends Prisma.ListingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingUpdateArgs>
  ): Promise<PrismaListing> {
    return this.prisma.listing.update<T>(args);
  }
  async deleteListing<T extends Prisma.ListingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingDeleteArgs>
  ): Promise<PrismaListing> {
    return this.prisma.listing.delete(args);
  }

  async findTrips(
    parentId: string,
    args: Prisma.TripFindManyArgs
  ): Promise<PrismaTrip[]> {
    return this.prisma.listing
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .trips(args);
  }

  async findWishlitsts(
    parentId: string,
    args: Prisma.WishlitstFindManyArgs
  ): Promise<PrismaWishlitst[]> {
    return this.prisma.listing
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wishlitsts(args);
  }

  async getListingCreatedBy(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.listing
      .findUnique({
        where: { id: parentId },
      })
      .listingCreatedBy();
  }
}
