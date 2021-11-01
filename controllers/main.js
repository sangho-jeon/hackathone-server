import express from "express";
import BookService from "../services/bookservice.js";

export const getBook = async function (req, res) {
  try {
    const { statuscode, result } = await BookService.test();
    return res.jsonResult(statuscode, result);
  } catch (err) {
    console.log(err);
  }
};
