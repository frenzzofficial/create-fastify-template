import type { RouteOptions } from "fastify";
import createAuthErrorHandler from "./auth.error";
// import *  as schemaHandler from "./auth.schemas";
import * as authController from "./auth.controllers";

const loginRoute: RouteOptions = {
  method: "POST",
  url: "/login",
  handler: authController.loginAuthController,
  errorHandler: createAuthErrorHandler("login"),
  // schema: schemaHandler.loginAuthSchema,
};

// const profileRoute: RouteOptions = {
//     method: "GET",
//     url: "/profile",
//     handler: authController.profileAuthController,
//     errorHandler: errHandler.profileAuthError,
// };

// const refreshTokenRoute: RouteOptions = {
//     method: "POST",
//     url: "/refresh",
//     handler: authController.refreshTokenAuthController,
//     errorHandler: errHandler.refreshTokenAuthError,
// };

// const logoutRoute: RouteOptions = {
//     method: "POST",
//     url: "/logout",
//     handler: authController.logoutAuthController,
//     errorHandler: errHandler.logoutAuthError,
// };

// const registerRoute: RouteOptions = {
//     method: "POST",
//     url: "/register",
//     handler: authController.registerAuthController,
//     errorHandler: errHandler.registerAuthError,
//     schema: schemaHandler.registrationSchema,
// };

// const verifyEmailRoute: RouteOptions = {
//     method: "POST",
//     url: "/verify-email",
//     handler: authController.verifyEmailAuthController,
//     errorHandler: errHandler.verifyEmailAuthError,
// };

// const resetPasswordRoute: RouteOptions = {
//     method: "POST",
//     url: "/reset-password",
//     handler: authController.resetPasswordAuthController,
//     errorHandler: errHandler.resetPasswordAuthError,
//     schema: schemaHandler.resetPasswordSchema,
// };

// const forgotPasswordRoute: RouteOptions = {
//     method: "POST",
//     url: "/forgot-password",
//     handler: authController.forgotPasswordAuthController,
//     errorHandler: errHandler.forgotPasswordAuthError,
//     schema: schemaHandler.forgotPasswordSchema,
// };

export default [
  loginRoute,
  // profileRoute,
  // refreshTokenRoute,
  // logoutRoute,
  // registerRoute,
  // verifyEmailRoute,
  // resetPasswordRoute,
  // forgotPasswordRoute,
];

export type routesOptions =
  | "login"
  | "profile"
  | "refreshToken"
  | "logout"
  | "register"
  | "verifyEmail"
  | "resetPassword"
  | "forgotPassword";
