class ConectionService {
  constructor() {
    this.request = XMLHttpRequest;
  }

  async doRequest(pUrl) {
    const doRequest = new Promise(resolve => {
      const url = pUrl;
      const xhr = new this.request();
      let response;
      xhr.open(`get`, url, true);
      xhr.setRequestHeader(`cache-control`, `no-cache`);
      xhr.withCredentials = false;
      xhr.onloadend = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
    const donePromise = await doRequest;
    return donePromise;
  }
}

const serviceConector = new ConectionService();