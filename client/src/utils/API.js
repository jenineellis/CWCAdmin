import axios from "axios";

export default {

  getWines: function (filter) {
    return axios.get("/api/wines", {
      params: filter
    });
  },

  getWineRegions: function (filter) {
    return axios.get("/api/wines/regions", {
      params: filter
    });
  },

  getWineVarietals: function (filter) {
    return axios.get("/api/wines/varietals", {
      params: filter
    });
  },

  getWine: function (id) {
    return axios.get("/api/wines/" + id)
  }
};
