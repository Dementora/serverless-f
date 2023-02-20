
exports.handler = async (event, context) => {
	let url = new URL(event.request.url);
        url.hostname = "in-full.privateip.net";                        
        url.protocol = "https";
        let request = new Request(url, event.request);
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
