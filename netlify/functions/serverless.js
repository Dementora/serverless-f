exports.handler = async (event, context) => {
	try {
		const url = new URL(event.request.url);
		const splitted = url.pathname.replace(/^\/*/, '').split('/');
		const address = splitted[0]; url.pathname = splitted.slice(1).join('/'); url.hostname = address; url.protocol = 'https';
		return fetch(new Request(url, event.request)); } catch (e) { return new Response(e); } };
