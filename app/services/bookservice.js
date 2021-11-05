import express from "express";

export default class BookService {
  static async test() {
    return { statuscode: 405, result: "ifuck you" };
  }
}
