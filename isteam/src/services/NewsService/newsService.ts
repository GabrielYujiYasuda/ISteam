import axios from "axios";
export default class NewsService {
  public static async getNews() {
    axios({
      method: "GET",
      url: "localhost:3000/",
    });
  }
}
