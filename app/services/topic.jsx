import config from './config.jsx';

export default {
	createTopic(topic) {
		return $.ajax({
			url: `${config.getApiUrl()}/topic`,
			method: 'POST',
			headers: {
				'x-access-token' : config.getToken(),
				'Content-Type' : 'application/json'
			},
			data: JSON.stringify(topic)
		});
	},
	updateTopic(id, data){
		return $.ajax({
			url: `${config.getApiUrl()}/topic/${id}`,
			method: 'PUT',
			headers:{
				'x-access-token': config.getToken(),
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(data)
		});
	},
	getTopicById(id) {
		return $.ajax({
			url: `${config.getApiUrl()}/topic/${id}`,
			method: 'GET',
			headers: {
				'x-access-token' : config.getToken(),
			}
		});
	},
	getTopics(data){
		return $.ajax({
			url: `${config.getApiUrl()}/topic/`,
			method: 'GET',
			headers: {
				'x-access-token' : config.getToken(),
			},
			data: data
		});
	},
	deleteTopic(id){
		return $.ajax({
			url: `${config.getApiUrl()}/topic/${id}`,
			method: 'DELETE',
			headers: {
				'x-access-token' : config.getToken()
			}
		});
	},
	searchTopics(query){
		return $.ajax({
			url: `${config.getApiUrl()}/topic/search`,
			method: 'GET',
			headers: {
				'x-access-token' : config.getToken()
			},
			data: {
				term: query
			}
		});
	}
};