/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'

export interface FileRoutesByFullPath {}
export interface FileRoutesByTo {}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: never
  fileRoutesByTo: FileRoutesByTo
  to: never
  id: '__root__'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {}
}

const rootRouteChildren: RootRouteChildren = {}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
