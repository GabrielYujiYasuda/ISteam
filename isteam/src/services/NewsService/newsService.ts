import axios from "axios";
export default class NewsService {
  public static async getNews(id: number) {
    axios({
      method: "GET",
      url: `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${id}`,
    });
  }
}
