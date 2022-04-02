import axios from "axios";

export default class ContentService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  //post
  async postData(title, videoUrl, description, content) {
    const response = await fetch(`${this.baseUrl}/content`, {
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

  //getAll
  async getAll() {
    const response = await fetch(`${this.baseUrl}/content`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((result) => console.log(result));

    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }
}
