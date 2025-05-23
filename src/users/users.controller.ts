import asyncHandler from "@src/middlewares/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { UserService } from "./users.service";

const userService = new UserService();

export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.getCurrentUser(req.user.id);
    res.status(200).json({
      status: "success",
      message: "User fetched successfully",
      data: { user },
    });
  },
);
