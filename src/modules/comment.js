export default class commentsUrl {
  static commentsUrl =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NU0JRPbStVeyNgQWILEC/comments/';

static getComments = async (id) => {
  const response = await fetch(`${this.commentsUrl}?item_id=${id}`);

  const data = await response.json();
  return data;
};

 