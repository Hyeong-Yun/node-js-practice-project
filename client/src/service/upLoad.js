import axios from "axios";

export default class UpLoadService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async postData(title, videoUrl, description, content) {
    const response = await fetch(`${this.baseUrl}/upload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        videoUrl,
        description,
        content,
      }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    console.log(data);
    return data;
  }
}
