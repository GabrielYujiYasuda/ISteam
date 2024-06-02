import NewsService from "../services/NewsService";
export default class NewsManager {
  public static getNews(id: number) {
    try {
      return NewsService.getNews(id);
    } catch (error) {
      return Promise.reject();
    }
  }
}
