import axios from "axios";
import React, { useState } from "react";

const ProductService = {
  getListagemGoogle: async () => {
    const api = "http://localhost:3001";
    try {
      const response = await axios.get(`${api}/listarFruta`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export default ProductService;
